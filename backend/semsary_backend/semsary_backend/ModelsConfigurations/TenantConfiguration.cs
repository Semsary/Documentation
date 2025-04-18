using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class TenantConfiguration : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> builder)
        {
            builder.HasKey(t => t.Username);

            builder.Property(a => a.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(t => t.Password)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(t => t.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(t => t.Address)
                .HasMaxLength(200);

            builder.Property(t => t.Balance)
                .HasDefaultValue(0);

           builder.Property(t => t.ImageUrl)
                .HasMaxLength(200);        // should i make max length for image url?

            builder.HasMany(e => e.Emails)
                .WithOne(e => e.Tenant)
                .HasForeignKey(e => e.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.Phones)
                .WithOne(p => p.Tenant)
                .HasForeignKey(p => p.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(r => r.Rentals)
                .WithOne(r => r.Tenant)
                .HasForeignKey(r => r.TenantUsername)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(t => t.Rates)
                .WithOne(r => r.Tenant)
                .HasForeignKey(r => r.TenantUsername)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(m => m.SentMessages)
                .WithOne(m => m.TenantSender)
                .HasForeignKey(m => m.SenderUsername )
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(m => m.ReceivedMessages)
                .WithOne(m => m.TenantReceiver)
                .HasForeignKey(m => m.ReceiverUsername)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }

}
