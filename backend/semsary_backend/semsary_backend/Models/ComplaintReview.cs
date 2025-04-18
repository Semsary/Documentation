namespace semsary_backend.Models
{
    public class ComplaintReview
    {
        public int ComplaintReviewId { get; set; }
        public byte Status { get; set; }
        public DateTime ComplaintReviewDate { get; set; }
        public string Comment { get; set; }
        public int ComplaintId { get; set; }
        public required string CustomerServiceUsername { get; set; }
        public Complaint Complaint { get; set; } 
        public CustomerService CustomerService { get; set; } 

    }
}