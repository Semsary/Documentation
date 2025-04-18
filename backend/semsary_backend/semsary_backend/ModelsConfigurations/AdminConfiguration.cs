using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class AdminConfiguration : IEntityTypeConfiguration<Admin>
    {
        public void Configure(EntityTypeBuilder<Admin> builder)
        {
            builder.HasKey(a => a.Username);

            builder.Property(a => a.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(a => a.Password)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(a => a.Name)
                .HasMaxLength(50)
                .IsRequired();

            builder.HasMany(a => a.Emails)
                .WithOne(e => e.Admin)
                .HasForeignKey(e => e.Username)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
