namespace semsary_backend.Models
{
    public class HouseInspection
    {
        public required string HouseInspectionId { get; set; }
        public required DateTime InspectionDate { get; set; }
        public required string InspectorId { get; set; }     //customer service
        public required string HouseId { get; set; }
        public int Amenities { get; set; }
        public string NearbyPlaces { get; set; }
        public byte Status { get; set; }
        public List<byte> Services { get; set; }
        public List<HouseImage> HouseImages { get; set; }
        public House House { get; set; }

    }
}
