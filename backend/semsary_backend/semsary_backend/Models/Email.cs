namespace semsary_backend.Models
{
    public class Email
    {
        public required string EmailAddress { get; set; }
        public required string Username { get; set; }
        public Tenant Tenant { get; set; } 
        public Landlord Landlord { get; set; } 
        public CustomerService CustomerService { get; set; } 
        public Admin Admin { get; set; } 
    }
}
