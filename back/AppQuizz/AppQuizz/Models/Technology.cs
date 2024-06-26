using System.Collections.Generic;

namespace AppQuizz.Models
{
    public class Technology
    {
        public int TechnologyId { get; set; }
        public string Name { get; set; }
        public List<Question> Questions { get; set; }
    }
}
