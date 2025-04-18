using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class HouseImageConfiguration : IEntityTypeConfiguration<HouseImage>
    {
        public void Configure(EntityTypeBuilder<HouseImage> builder)
        {
            builder.HasKey(h => new { h.HouseImageId , h.HouseInspectionId});

            builder.Property(h => h.HouseImageId)
                .ValueGeneratedOnAdd();

            builder.Property(h => h.HouseInspectionId)
                .IsRequired();

            builder.Property(h => h.ImageUrl)
                .IsRequired();
        }
    }
}
