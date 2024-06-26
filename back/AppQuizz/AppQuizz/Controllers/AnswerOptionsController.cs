using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppQuizz.Data;
using AppQuizz.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AppQuizz.Controllers
{
    public class AnswerOptionsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AnswerOptionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.AnswerOptions.ToListAsync());
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var answerOption = await _context.AnswerOptions
                .Include(a => a.Question)
                .FirstOrDefaultAsync(m => m.AnswerOptionId == id);
            if (answerOption == null)
            {
                return NotFound();
            }

            return View(answerOption);
        }

        public IActionResult Create()
        {
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("AnswerOptionId,Text,IsCorrect,QuestionId")] AnswerOption answerOption)
        {
            if (ModelState.IsValid)
            {
                _context.Add(answerOption);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", answerOption.QuestionId);
            return View(answerOption);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var answerOption = await _context.AnswerOptions.FindAsync(id);
            if (answerOption == null)
            {
                return NotFound();
            }
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", answerOption.QuestionId);
            return View(answerOption);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("AnswerOptionId,Text,IsCorrect,QuestionId")] AnswerOption answerOption)
        {
            if (id != answerOption.AnswerOptionId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(answerOption);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AnswerOptionExists(answerOption.AnswerOptionId))
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
            ViewData["QuestionId"] = new SelectList(_context.Questions, "QuestionId", "Text", answerOption.QuestionId);
            return View(answerOption);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var answerOption = await _context.AnswerOptions
                .Include(a => a.Question)
                .FirstOrDefaultAsync(m => m.AnswerOptionId == id);
            if (answerOption == null)
            {
                return NotFound();
            }

            return View(answerOption);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var answerOption = await _context.AnswerOptions.FindAsync(id);
            _context.AnswerOptions.Remove(answerOption);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AnswerOptionExists(int id)
        {
            return _context.AnswerOptions.Any(e => e.AnswerOptionId == id);
        }
    }
}
