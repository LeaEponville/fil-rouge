using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppQuizz.Data;
using AppQuizz.Models;
using System.Linq;
using System.Threading.Tasks;

namespace AppQuizz.Controllers
{
    public class ExperienceLevelsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ExperienceLevelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.ExperienceLevels.ToListAsync());
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var experienceLevel = await _context.ExperienceLevels
                .FirstOrDefaultAsync(m => m.ExperienceLevelId == id);
            if (experienceLevel == null)
            {
                return NotFound();
            }

            return View(experienceLevel);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ExperienceLevelId,LevelName")] ExperienceLevel experienceLevel)
        {
            if (ModelState.IsValid)
            {
                _context.Add(experienceLevel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(experienceLevel);
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var experienceLevel = await _context.ExperienceLevels.FindAsync(id);
            if (experienceLevel == null)
            {
                return NotFound();
            }
            return View(experienceLevel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ExperienceLevelId,LevelName")] ExperienceLevel experienceLevel)
        {
            if (id != experienceLevel.ExperienceLevelId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(experienceLevel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ExperienceLevelExists(experienceLevel.ExperienceLevelId))
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
            return View(experienceLevel);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var experienceLevel = await _context.ExperienceLevels
                .FirstOrDefaultAsync(m => m.ExperienceLevelId == id);
            if (experienceLevel == null)
            {
                return NotFound();
            }

            return View(experienceLevel);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var experienceLevel = await _context.ExperienceLevels.FindAsync(id);
            _context.ExperienceLevels.Remove(experienceLevel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ExperienceLevelExists(int id)
        {
            return _context.ExperienceLevels.Any(e => e.ExperienceLevelId == id);
        }
    }
}
