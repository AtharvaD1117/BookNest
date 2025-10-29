using Microsoft.AspNetCore.Mvc;
using BookNest.API.Data;
using BookNest.API.Models;

namespace BookNest.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly AppDbContext _context;
    public BooksController(AppDbContext context) => _context = context;

    [HttpGet]
    public IActionResult GetAll() => Ok(_context.Books.ToList());

    [HttpPost]
    public IActionResult Create(Book book)
    {
        _context.Books.Add(book);
        _context.SaveChanges();
        return Ok(book);
    }
}
