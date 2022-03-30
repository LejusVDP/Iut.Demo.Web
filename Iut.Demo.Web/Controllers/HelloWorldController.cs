using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;

namespace Iut.Demo.Web.Controllers;

public class HelloWorldController : Controller
{
    // GET /HelloWorld/
    public IActionResult Index()
    {
        ViewData["Hello"] = "Bienvenue du controller";
        return View();
    }
    
    // GET /HelloWorld/Bienvenue/?nom=Maxime&count=2
    // GET /HelloWorld/Bienvenue/12?nom=Maxime
    public IActionResult Bienvenue(string nom, int id = 1)
    {
        ViewData["Hello"] = $"Bienvenue {nom}, id vaut : {id}";
        return View("Index");
    }
}
