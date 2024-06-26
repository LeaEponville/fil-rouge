using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppQuizz.Data;
using AppQuizz.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AppQuizz.Controllers
{
    public class QuizQuestionsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public QuizQuestionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.QuizQuestions.Include(q => q.Quiz).Include(q => q.Question).ToListAsync());
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var quizQuestion = await _context.QuizQuestions
                .Include(q => q.Quiz)
                .Include(q => q.Question)
                .FirstOrDefaultAsync(m => m.QuizQuestionId == id);
            if (quizQuestion == null)
            {
                return NotFound();
            }

            return View(quizQuestion);
        }

        public IActionResult Create()
        {
            ViewData["QuizId"] = new SelectList(_context.Quizzes, "QuizId", "QuizId");
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("QuizQuestionId,QuizId,QuestionId,Answer,IsCorrect,Comment")] QuizQuestion quizQuestion)
        {
            if (ModelState.IsValid)
            {
                _context.Add(quizQuestion);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["QuizId"] = new SelectList(_context.Quizzes, "QuizId", "QuizId", quizQuestion.QuizId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", quizQuestion.QuestionId);
            return View(quizQuestion);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var quizQuestion = await _context.QuizQuestions.FindAsync(id);
            if (quizQuestion == null)
            {
                return NotFound();
            }
            ViewData["QuizId"] = new SelectList(_context.Quizzes, "QuizId", "QuizId", quizQuestion.QuizId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", quizQuestion.QuestionId);
            return View(quizQuestion);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("QuizQuestionId,QuizId,QuestionId,Answer,IsCorrect,Comment")] QuizQuestion quizQuestion)
        {
            if (id != quizQuestion.QuizQuestionId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(quizQuestion);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!QuizQuestionExists(quizQuestion.QuizQuestionId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["QuizId"] = new SelectList(_context.Quizzes, "QuizId", "QuizId", quizQuestion.QuizId);
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", quizQuestion.QuestionId);
            return View(quizQuestion);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var quizQuestion = await _context.QuizQuestions
                .Include(q => q.Quiz)
                .Include(q => q.Question)
                .FirstOrDefaultAsync(m => m.QuizQuestionId == id);
            if (quizQuestion == null)
            {
                return NotFound();
            }

            return View(quizQuestion);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var quizQuestion = await _context.QuizQuestions.FindAsync(id);
            _context.QuizQuestions.Remove(quizQuestion);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool QuizQuestionExists(int id)
        {
            return _context.QuizQuestions.Any(e => e.QuizQuestionId == id);
        }
    }
}
