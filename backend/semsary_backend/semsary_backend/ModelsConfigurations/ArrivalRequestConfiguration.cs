using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class ArrivalRequestConfiguration : IEntityTypeConfiguration<ArrivalRequest>
    {
        public void Configure(EntityTypeBuilder<ArrivalRequest> builder)
        {
            builder.HasKey(a => a.ArrivalRequestId);

            builder.Property(a => a.ArrivalRequestId)
                .ValueGeneratedOnAdd();

            builder.HasOne(r => r.Rental)
                .WithOne(r => r.ArrivalRequest)
                .HasForeignKey<ArrivalRequest>(r => r.RentalId)
                .OnDelete(DeleteBehavior.Cascade);

            //builder.Property(ar => ar.Status).IsRequired();

        }

    }
    
}
