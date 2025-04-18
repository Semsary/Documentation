namespace semsary_backend.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public required string SenderUsername { get; set; }
        public required string ReceiverUsername { get; set; }
        public DateTime SendDate { get; set; }
        public required string Content { get; set; }
        public Tenant TenantSender { get; set; }  
        public Tenant TenantReceiver { get; set; } 
        public Landlord LandlordSender { get; set; } 
        public Landlord LandlordReceiver { get; set; } 
        public CustomerService CustomerServiceSender { get; set; } 
        public CustomerService CustomerServiceReceiver { get; set; } // navigational property
    }
}