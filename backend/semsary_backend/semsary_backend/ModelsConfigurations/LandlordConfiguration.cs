using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class LandlordConfiguration : IEntityTypeConfiguration<Landlord>
    {
        public void Configure(EntityTypeBuilder<Landlord> builder)
        {
            builder.HasKey(l => l.Username);

            builder.Property(l => l.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(p => p.Password)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(n => n.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(t => t.Balance)
                .HasDefaultValue(0);

            builder.Property(a => a.Address)
                .HasMaxLength(200);

            builder.Property(t => t.ImageUrl)
                .HasMaxLength(200);        // should i make max length for image url?

            builder.HasMany(e => e.Emails)
                .WithOne(e => e.Landlord)
                .HasForeignKey(e => e.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.Phones)
                .WithOne(p => p.Landlord)
                .HasForeignKey(p => p.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(m => m.SentMessages)
                .WithOne(m => m.LandlordSender)
                .HasForeignKey(m => m.SenderUsername)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(m => m.ReceivedMessages)
                .WithOne(m => m.LandlordReceiver)
                .HasForeignKey(m => m.ReceiverUsername)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(m => m.Houses)
                .WithOne(m => m.Landlord)
                .HasForeignKey(m => m.LandlordUsername)
                .OnDelete(DeleteBehavior.Cascade);



        }
    }
}
