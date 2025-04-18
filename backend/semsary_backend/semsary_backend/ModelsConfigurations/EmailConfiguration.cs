using Microsoft.EntityFrameworkCore;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class EmailConfiguration : IEntityTypeConfiguration<Email>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Email> builder)
        {
            builder.HasKey(e => new { e.EmailAddress , e.Username});

            builder.Property(e => e.EmailAddress)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(e => e.Username)
                .IsRequired();
        }
    }
}
