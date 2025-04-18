namespace semsary_backend.Models
{
    public class Complaint
    {
        public int ComplaintId { get; set; }
        public byte Status { get; set; }
        public required DateTime ComplaintDate { get; set; }
        public required string ComplaintDetails { get; set; }
        public required int RentalId { get; set; }  
        public ComplaintReview complaintReview { get; set; }
        public Rental Rental { get; set; } 
    }
}
