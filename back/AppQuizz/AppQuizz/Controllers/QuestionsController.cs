using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppQuizz.Data;
using AppQuizz.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace AppQuizz.Controllers
{
    public class QuestionsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public QuestionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Questions.ToListAsync());
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var question = await _context.Questions
                .Include(q => q.Technology)
                .Include(q => q.ExperienceLevel)
                .FirstOrDefaultAsync(m => m.QuestionId == id);
            if (question == null)
            {
                return NotFound();
            }

            return View(question);
        }

        public IActionResult Create()
        {
            ViewData["TechnologyId"] = new SelectList(_context.Technologies, "TechnologyId", "Name");
            ViewData["ExperienceLevelId"] = new SelectList(_context.ExperienceLevels, "ExperienceLevelId", "LevelName");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("QuestionId,Text,ComplexityLevel,TechnologyId,ExperienceLevelId,Explanation,IsFreeText")] Question question)
        {
            if (ModelState.IsValid)
            {
                _context.Add(question);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["TechnologyId"] = new SelectList(_context.Technologies, "TechnologyId", "Name", question.TechnologyId);
            ViewData["ExperienceLevelId"] = new SelectList(_context.ExperienceLevels, "ExperienceLevelId", "LevelName", question.ExperienceLevelId);
            return View(question);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var question = await _context.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }
            ViewData["TechnologyId"] = new SelectList(_context.Technologies, "TechnologyId", "Name", question.TechnologyId);
            ViewData["ExperienceLevelId"] = new SelectList(_context.ExperienceLevels, "ExperienceLevelId", "LevelName", question.ExperienceLevelId);
            return View(question);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("QuestionId,Text,ComplexityLevel,TechnologyId,ExperienceLevelId,Explanation,IsFreeText")] Question question)
        {
            if (id != question.QuestionId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(question);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!QuestionExists(question.QuestionId))
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
            ViewData["TechnologyId"] = new SelectList(_context.Technologies, "TechnologyId", "Name", question.TechnologyId);
            ViewData["ExperienceLevelId"] = new SelectList(_context.ExperienceLevels, "ExperienceLevelId", "LevelName", question.ExperienceLevelId);
            return View(question);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var question = await _context.Questions
                .Include(q => q.Technology)
                .Include(q => q.ExperienceLevel)
                .FirstOrDefaultAsync(m => m.QuestionId == id);
            if (question == null)
            {
                return NotFound();
            }

            return View(question);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var question = await _context.Questions.FindAsync(id);
            _context.Questions.Remove(question);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool QuestionExists(int id)
        {
            return _context.Questions.Any(e => e.QuestionId == id);
        }
    }
}
