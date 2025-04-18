namespace semsary_backend.Models
{
    public class Rental
    {
        public int RentalId { get; set; }
        public DateTime StartDate { get; set; }
        public int Duration { get; set; } 
        public string RentalUnitId { get; set; } 
        public int RentalType { get; set; } 
        public string TenantUsername { get; set; }  

        public DateTime CreationDate { get; set; } 
        public DateTime InspectionDate { get; set; }
        public byte status { get; set; }

        public Complaint Complaint { get; set; } 
        public ArrivalRequest ArrivalRequest { get; set; } 
        public Tenant Tenant { get; set; }
        public RentalUnit RentalUnit { get; set; } 


    }
}