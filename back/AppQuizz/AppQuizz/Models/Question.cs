<<<<<<< HEAD
﻿using System.Collections.Generic;

namespace AppQuizz.Models
=======
﻿namespace AppQuizz.Models
>>>>>>> 4789561f9cdbb184a4b0d5f61f0aa9d10da99ff4
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Text { get; set; }
<<<<<<< HEAD
        public int ComplexityLevel { get; set; } // 1: Junior, 2: Confirmed, 3: Expert
        public int TechnologyId { get; set; }
        public Technology Technology { get; set; }
        public int ExperienceLevelId { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
=======
        public int ComplexityLevel { get; set; }
        public int TechnologyId { get; set; }
        public Technology Technology { get; set; }
        public int ExperienceLevelId { get; set; } // Foreign key
        public ExperienceLevel ExperienceLevel { get; set; } // Navigation property
>>>>>>> 4789561f9cdbb184a4b0d5f61f0aa9d10da99ff4
        public List<AnswerOption> AnswerOptions { get; set; }
        public string Explanation { get; set; }
        public bool IsFreeText { get; set; }
    }
}
