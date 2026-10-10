using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
var configuration = builder.Configuration;

builder.Services.AddDbContext<UserDbContext>(options =>
{
    options.UseNpgsql(configuration.GetConnectionString("PostgresDB"));
});

app.MapGet("/", () => "Hello World!");

app.Run();
