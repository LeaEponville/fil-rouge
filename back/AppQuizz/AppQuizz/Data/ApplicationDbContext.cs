using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AppQuizz.Models;

namespace AppQuizz.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Seeding Roles
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
                new IdentityRole { Id = "2", Name = "Recruiter", NormalizedName = "RECRUITER" }
            );

            // Seeding Users
            var hasher = new PasswordHasher<IdentityUser>();
            builder.Entity<IdentityUser>().HasData(
                new IdentityUser
                {
                    Id = "1",
                    UserName = "admin@appquizz.com",
                    NormalizedUserName = "ADMIN@APPQUIZZ.COM",
                    Email = "admin@appquizz.com",
                    NormalizedEmail = "ADMIN@APPQUIZZ.COM",
                    EmailConfirmed = true,
                    PasswordHash = hasher.HashPassword(null, "Admin@123"),
                    SecurityStamp = string.Empty
                },
                new IdentityUser
                {
                    Id = "2",
                    UserName = "recruiter@appquizz.com",
                    NormalizedUserName = "RECRUITER@APPQUIZZ.COM",
                    Email = "recruiter@appquizz.com",
                    NormalizedEmail = "RECRUITER@APPQUIZZ.COM",
                    EmailConfirmed = true,
                    PasswordHash = hasher.HashPassword(null, "Recruiter@123"),
                    SecurityStamp = string.Empty
                }
            );

            // Assign roles to users
            builder.Entity<IdentityUserRole<string>>().HasKey(r => new { r.UserId, r.RoleId });

            builder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>
                {
                    RoleId = "1",
                    UserId = "1"
                },
                new IdentityUserRole<string>
                {
                    RoleId = "2",
                    UserId = "2"
                }
            );

            // Seeding ExperienceLevels
            builder.Entity<ExperienceLevel>().HasData(
                new ExperienceLevel { ExperienceLevelId = 1, LevelName = "Junior" },
                new ExperienceLevel { ExperienceLevelId = 2, LevelName = "Confirmed" },
                new ExperienceLevel { ExperienceLevelId = 3, LevelName = "Expert" }
            );

            // Seeding Technologies
            builder.Entity<Technology>().HasData(
                new Technology { TechnologyId = 1, Name = ".NET" },
                new Technology { TechnologyId = 2, Name = "Java" },
                new Technology { TechnologyId = 3, Name = "Python" }
            );

            // Seeding Questions
            builder.Entity<Question>().HasData(
                new Question
                {
                    QuestionId = 1,
                    Text = "What is .NET?",
                    ComplexityLevel = 1,
                    TechnologyId = 1,
                    ExperienceLevelId = 1,
                    Explanation = "A brief description of .NET.",
                    IsFreeText = false
                },
                new Question
                {
                    QuestionId = 2,
                    Text = "Explain the JVM.",
                    ComplexityLevel = 2,
                    TechnologyId = 2,
                    ExperienceLevelId = 2,
                    Explanation = "A brief description of the JVM.",
                    IsFreeText = false
                }
            );

            // Seeding AnswerOptions
            builder.Entity<AnswerOption>().HasData(
                new AnswerOption { AnswerOptionId = 1, Text = ".NET is a framework.", IsCorrect = true, QuestionId = 1 },
                new AnswerOption { AnswerOptionId = 2, Text = "JVM stands for Java Virtual Machine.", IsCorrect = true, QuestionId = 2 }
            );

            // Seeding Agents
            builder.Entity<Agent>().HasData(
                new Agent { AgentId = 1, Name = "John Doe", Email = "john.doe@appquizz.com" }
            );

            // Seeding Candidates
            builder.Entity<Candidate>().HasData(
                new Candidate { CandidateId = 1, Name = "Jane Smith", Email = "jane.smith@appquizz.com" }
            );

            // Seeding Quizzes
            builder.Entity<Quiz>().HasData(
                new Quiz { QuizId = 1, AgentId = 1, CandidateId = 1, CreatedAt = DateTime.Now }
            );

            // Seeding QuizQuestions
            builder.Entity<QuizQuestion>().HasData(
                new QuizQuestion { QuizQuestionId = 1, QuizId = 1, QuestionId = 1, Answer = "", IsCorrect = false, Comment = "" },
                new QuizQuestion { QuizQuestionId = 2, QuizId = 1, QuestionId = 2, Answer = "", IsCorrect = false, Comment = "" }
            );
        }
    }
}
