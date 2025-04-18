using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class CustomerServiceConfiguration : IEntityTypeConfiguration<CustomerService>
    {
        public void Configure(EntityTypeBuilder<CustomerService> builder)
        {
            builder.HasKey(cs => cs.Username);

            builder.Property(cs => cs.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(p => p.Password)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(n => n.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(a => a.Address)
                .HasMaxLength(200);

            builder.Property(t => t.ImageUrl)
                .HasMaxLength(200);        // should i make max length for image url?

            builder.HasMany(e => e.Emails)
                .WithOne(e => e.CustomerService)
                .HasForeignKey(e => e.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.Phones)
                .WithOne(p => p.CustomerService)
                .HasForeignKey(p => p.Username)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(m => m.SentMessages)
                .WithOne(m => m.CustomerServiceSender)
                .HasForeignKey(m => m.SenderUsername)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(m => m.ReceivedMessages)
                .WithOne(m => m.CustomerServiceReceiver)
                .HasForeignKey(m => m.ReceiverUsername)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(c => c.ComplaintReviews)
                .WithOne(c => c.CustomerService)
                .HasForeignKey(c => c.CustomerServiceUsername)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }

}
