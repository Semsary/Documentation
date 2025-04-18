using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using semsary_backend.Models;

namespace semsary_backend.ModelsConfigurations
{
    public class ComplaintReviewConfiguration : IEntityTypeConfiguration<ComplaintReview>
    {
        public void Configure(EntityTypeBuilder<ComplaintReview> builder)
        {
            builder.HasKey(c => c.ComplaintReviewId);

            builder.Property(c => c.ComplaintReviewId)
                .ValueGeneratedOnAdd();            
        }
    }
}
