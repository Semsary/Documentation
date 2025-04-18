namespace semsary_backend.Models
{
    public class Phone
    {
        public required string PhoneNumber { get; set; }
        public required  string Username { get; set; } 
        public Tenant Tenant { get; set; } 
        public Landlord Landlord { get; set; } 
        public CustomerService CustomerService { get; set; } 
    }
}
