﻿namespace AppQuizz.Models
{
    public class AnswerOption
    {
        public int AnswerOptionId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
