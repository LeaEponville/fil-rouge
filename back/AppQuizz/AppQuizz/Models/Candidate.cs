<<<<<<< HEAD
﻿using System.Collections.Generic;

namespace AppQuizz.Models
=======
﻿namespace AppQuizz.Models
>>>>>>> 4789561f9cdbb184a4b0d5f61f0aa9d10da99ff4
{
    public class Candidate
    {
        public int CandidateId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public List<Quiz> Quizzes { get; set; }
    }
}
