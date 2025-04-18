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
        public int status { get; set; }

        // navigational properties
        public Complaint Complaint { get; set; } // foreign key
        public ArrivalRequest ArrivalRequest { get; set; } // navigational property
        public Tenant Tenant { get; set; }
        public RentalUnit RentalUnit { get; set; } // navigational property


    }
}