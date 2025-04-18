namespace semsary_backend.Models
{
    public class ArrivalRequest
    {
        public int ArrivalRequestId { get; set; }
        public int RentalId { get; set; }
        public byte Status { get; set; }  // requered or not
        public DateTime ?ArrivalDate { get; set; }
        public DateTime ?ConfirmDate { get; set; }
        public Rental Rental { get; set; } 
    }
}
