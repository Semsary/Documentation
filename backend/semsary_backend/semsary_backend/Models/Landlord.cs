namespace semsary_backend.Models
{
    public class Landlord
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string Name { get; set; }
        public string Address { get; set; }
        public int Balance { get; set; }
        public string ?ImageUrl { get; set; }
        public List<Email> Emails { get; set; }
        public List<Phone> Phones { get; set; }
        public List<House> Houses { get; set; }
        public List<Message> ?SentMessages { get; set; }
        public List<Message>? ReceivedMessages { get; set; }
    }
}
