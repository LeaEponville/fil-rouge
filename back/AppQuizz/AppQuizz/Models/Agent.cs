using System.Collections.Generic;

namespace AppQuizz.Models
{
    public class Agent
    {
        public int AgentId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<Quiz> Quizzes { get; set; }
    }
}

