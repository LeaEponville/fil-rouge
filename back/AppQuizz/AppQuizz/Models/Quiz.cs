using System;
using System.Collections.Generic;

namespace AppQuizz.Models
{
    public class Quiz
    {
        public int QuizId { get; set; }
        public int AgentId { get; set; }
        public Agent Agent { get; set; }
        public int CandidateId { get; set; }
        public Candidate Candidate { get; set; }
        public List<QuizQuestion> QuizQuestions { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
