using Microsoft.EntityFrameworkCore;
using AppQuizz.Models;

namespace AppQuizz.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Agent> Agents { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<AnswerOption> AnswerOptions { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<QuizQuestion> QuizQuestions { get; set; }
        public DbSet<ExperienceLevel> ExperienceLevels { get; set; }
    }
}
