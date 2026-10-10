using Microsoft.EntityFrameworkCore;

public enum Role
{
    Admin,
    User
}

[Index(nameof(Username), IsUnique = true)]
public class User
{
    public Guid Id { get; set; }
    public string Username { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public Role Role{ get; set; } = Role.User;
}

public class UserDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
}
