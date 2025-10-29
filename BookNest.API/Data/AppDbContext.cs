using Microsoft.EntityFrameworkCore;
using BookNest.API.Models;

namespace BookNest.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Book> Books => Set<Book>();
}
