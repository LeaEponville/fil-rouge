using Microsoft.EntityFrameworkCore;
using AppQuizz.Models;

namespace AppQuizz.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Technology> Technologies { get; set; }
        public DbSet<ExperienceLevel> ExperienceLevels { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Result> Results { get; set; }
        public DbSet<Response> Responses { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships and keys if needed
            modelBuilder.Entity<Question>()
                .HasOne(q => q.Quiz)
                .WithMany(qz => qz.Questions)
                .HasForeignKey(q => q.QuizId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Question>()
                .HasMany(q => q.Options)
                .WithOne(o => o.Question)
                .HasForeignKey(o => o.QuestionId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Question>()
                .HasOne(q => q.ExperienceLevel)
                .WithMany(e => e.Questions)
                .HasForeignKey(q => q.ExperienceLevelId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Question>()
                .HasOne(q => q.Technology)
                .WithMany(t => t.Questions)
                .HasForeignKey(q => q.TechnologyId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Question>()
                .HasMany(q => q.Comments)
                .WithOne(c => c.Question)
                .HasForeignKey(c => c.QuestionId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.User)
                .WithMany(u => u.Results)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Result>()
                .HasOne(r => r.Quiz)
                .WithMany(q => q.Results)
                .HasForeignKey(r => r.QuizId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Response>()
                .HasOne(r => r.User)
                .WithMany(u => u.Responses)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Response>()
                .HasOne(r => r.Question)
                .WithMany(q => q.Responses)
                .HasForeignKey(r => r.QuestionId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Response>()
                .HasOne(r => r.Option)
                .WithMany(o => o.Responses)
                .HasForeignKey(r => r.OptionId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}

namespace AppQuizz.Models
{
    public class Technology
    {
        public int TechnologyId { get; set; }
        public string Name { get; set; }
        public ICollection<Question> Questions { get; set; }
    }

    public class ExperienceLevel
    {
        public int ExperienceLevelId { get; set; }
        public string Description { get; set; }
        public ICollection<Question> Questions { get; set; }
    }

    public class Question
    {
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public List<Option> Options { get; set; }
        public int ExperienceLevelId { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
        public int TechnologyId { get; set; }
        public Technology Technology { get; set; }
        public string Comment { get; set; }
        public List<Response> Responses { get; set; }
        public List<Comment> Comments { get; set; }
    }

    public class Option
    {
        public int OptionId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
        public List<Response> Responses { get; set; }
    }

    public class Quiz
    {
        public int QuizId { get; set; }
        public string Title { get; set; }
        public int NumberOfQuestions { get; set; }
        public int AgentId { get; set; } // Assuming there is a relation with an Agent
        public List<Question> Questions { get; set; }
        public List<Result> Results { get; set; }
    }

    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public List<Result> Results { get; set; }
        public List<Response> Responses { get; set; }
    }

    public class Result
    {
        public int ResultId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public int Score { get; set; }
        public string PDFGeneratedPath { get; set; }
    }

    public class Response
    {
        public int ResponseId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
        public int? OptionId { get; set; } // This can be null if the response is for a free text question
        public Option Option { get; set; }
        public string TextAnswer { get; set; } // For free text answers
        public DateTime Timestamp { get; set; } // Time when the response was recorded
    }

    public class Comment
    {
        public int CommentId { get; set; }
        public string Text { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
