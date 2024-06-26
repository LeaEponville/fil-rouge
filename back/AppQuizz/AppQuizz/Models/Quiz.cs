<<<<<<< HEAD
﻿using System;
using System.Collections.Generic;

namespace AppQuizz.Models
=======
﻿namespace AppQuizz.Models
>>>>>>> 4789561f9cdbb184a4b0d5f61f0aa9d10da99ff4
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
