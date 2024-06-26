namespace AppQuizz.Models
{
    public class ExperienceLevel
    {
        public int ExperienceLevelId { get; set; }
        public string LevelName { get; set; } // e.g., Junior, Confirmed, Expert
        public List<Question> Questions { get; set; }
    }
}
