using System.Collections.Generic;

namespace AppQuizz.Models
{
    public class ExperienceLevel
    {
        public int ExperienceLevelId { get; set; }
        public string LevelName { get; set; }
        public List<Question> Questions { get; set; }
    }
}
