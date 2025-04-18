namespace semsary_backend.Models
{
    public class Advertisement
    {
        public required string AdvertisementId { get; set; }
        public required string HouseId { get; set; }  
        public required DateTime PublishDate { get; set; }
        public List<RentalUnit> RentalUnits { get; set; }
        public House House { get; set; } 
    }
}