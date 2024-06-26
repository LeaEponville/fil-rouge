using System.Collections.Generic;

namespace AppQuizz.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public int ComplexityLevel { get; set; } // 1: Junior, 2: Confirmed, 3: Expert
        public int TechnologyId { get; set; }
        public Technology Technology { get; set; }
        public int ExperienceLevelId { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
        public List<AnswerOption> AnswerOptions { get; set; }
        public string Explanation { get; set; }
        public bool IsFreeText { get; set; }
    }
}
