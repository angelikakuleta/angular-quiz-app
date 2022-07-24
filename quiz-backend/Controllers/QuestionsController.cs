using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> Get([FromQuery] int? quizId)
        {
            var userId = HttpContext.User.Claims.First().Value;
            var quizes = await context.Quiz
                .Where(q => q.OwnerId == userId)
                .Select(q => q.Id)
                .ToListAsync();

            IQueryable<Question> query = context.Questions.Where(q => quizes.Contains(q.QuizId));
            if (quizId != null)
                query = query.Where(q => q.QuizId == quizId);

            var questions = await query.ToListAsync();
            return Ok(questions);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {
            var quiz = await context.Quiz.Where(q => q.Id == question.QuizId).FirstOrDefaultAsync();
            if (quiz == null)
                return NotFound();

            var userId = HttpContext.User.Claims.First().Value;
            if(userId != quiz.OwnerId)
            {
                return BadRequest();
            }

            context.Questions.Add(question);
            await context.SaveChangesAsync();

            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question question)
        {
            if (id != question.Id)
                return BadRequest();

            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return Ok(question);
        }
    }
}
