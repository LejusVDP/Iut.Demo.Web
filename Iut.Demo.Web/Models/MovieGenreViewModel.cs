using System.ComponentModel.DataAnnotations;

namespace Iut.Demo.Web.Models
{
    public class Movie
    {
        public List<Movie>? Movies { get; set; }
        public SelectList? Genre { get; set; }
        public string? MovieGenre { get; set; }
        public string? SearchString { get; set; }
    }
}