namespace AppQuizz.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public int ComplexityLevel { get; set; }
        public int TechnologyId { get; set; }
        public Technology Technology { get; set; }
        public int ExperienceLevelId { get; set; } // Foreign key
        public ExperienceLevel ExperienceLevel { get; set; } // Navigation property
        public List<AnswerOption> AnswerOptions { get; set; }
        public string Explanation { get; set; }
        public bool IsFreeText { get; set; }
    }
}
