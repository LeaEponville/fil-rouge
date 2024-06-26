namespace AppQuizz.Models
{
    public class QuizQuestion
    {
        public int QuizQuestionId { get; set; }
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
        public string Answer { get; set; } = string.Empty; // Initialisation par défaut
        public bool IsCorrect { get; set; }
        public string Comment { get; set; } = string.Empty; // Initialisation par défaut
    }
}
