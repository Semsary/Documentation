namespace semsary_backend.Models
{
    public class Admin
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string Name { get; set; }
        public List<Email> Emails { get; set; }
    }
}
