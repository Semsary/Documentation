using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class PhoneConfiguration : IEntityTypeConfiguration<Phone>
    {
        public void Configure(EntityTypeBuilder<Phone> builder)
        {
            builder.HasKey(p => new { p.PhoneNumber, p.Username });

            builder.Property(p => p.PhoneNumber)
                .IsRequired()
                .HasMaxLength(15);

            builder.Property(p => p.Username)
                .IsRequired();

        }
    }
}
