using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Family.DAL.Models
{
    public partial class FamilyContext : DbContext
    {
        public FamilyContext()
        {
        }

        public FamilyContext(DbContextOptions<FamilyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Child> Children { get; set; }
        public virtual DbSet<ChildToParent> ChildToParents { get; set; }
        public virtual DbSet<Parent> Parents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(" Data Source=.;Initial Catalog=Family;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Hebrew_CI_AS");

            modelBuilder.Entity<Child>(entity =>
            {
                entity.ToTable("Child");

                entity.Property(e => e.Id).HasMaxLength(10);

                entity.Property(e => e.DateOfBorn).HasColumnType("date");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(15);
            });

            modelBuilder.Entity<ChildToParent>(entity =>
            {
                entity.HasKey(e => new { e.ChildId, e.ParentId });

                entity.ToTable("ChildToParent");

                entity.HasIndex(e => e.ChildId, "IX_ChildToParent");

                entity.Property(e => e.ChildId).HasMaxLength(10);

                entity.Property(e => e.ParentId).HasMaxLength(10);

                entity.HasOne(d => d.Child)
                    .WithMany(p => p.Children)
                    .HasForeignKey(d => d.ChildId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ChildToParent_Child");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.Children)
                    .HasForeignKey(d => d.ParentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ChildToParent_Parent");
            });

            modelBuilder.Entity<Parent>(entity =>
            {
                entity.ToTable("Parent");

                entity.Property(e => e.Id).HasMaxLength(10);

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Hmo)
                    .IsRequired()
                    .HasMaxLength(15)
                    .HasColumnName("HMO");

                entity.Property(e => e.Kind)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(15);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
