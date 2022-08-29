const peliculas = [
    {
        nombre: 'Wonder Woman',
        genero: 'accion',
        calificacion: 7.4,
        imagen: 'https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster1.jpg',
        trailer: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
        reparto: 'Gal Gadot, Chris Pine, Robin Wright, Danny Huston, David Thewlis ',
        director: 'Patty Jenkins',
        id:1
    }, 
    {
        nombre: 'Justice League',
        genero: 'accion',
        calificacion: 6.1,
        imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster2-691x1024.jpg",
        trailer: 'https://www.youtube.com/embed/3cxixDgHUYw',
        reparto: 'Ben Affleck, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Henry Cavill',
        director: 'Joss Whedon',
        id:2
    }, 
    {
        nombre: 'The Dark Knight Rises',
        genero: 'accion',
        calificacion: 8.4,
        imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster3.jpg",
        trailer: 'https://www.youtube.com/embed/GokKUqLcvD8',
        reparto: 'Christian Bale,  Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy',
        director: 'Christopher Nolan',
        id: 3
    }, 
    {
        nombre: 'The Joker',
        genero: 'accion',
        calificacion: 8.4,
        imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster4.jpg",
        trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY',
        reparto: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy',
        director: 'Todd Phillips',
        id: 4
    }, 
    {
        nombre: 'Batman v Superman: Dawn Of Justice',
        genero: 'accion',
        calificacion: 6.4,
        imagen: "https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster5.jpg",
        trailer: 'https://www.youtube.com/embed/0WWzgGyAH6Y',
        reparto: 'Ben Affleck, Henry Cavill, Jesse Eisenberg, Amy Adams,  Jeremy Irons, Laurence Fishburne ',
        director: 'Zack Snyder',
        id: 5
    }, 
    {
        nombre: 'Inception',
        genero: 'accion',
        calificacion: 8.8,
        imagen: "https://www.themoviedb.org/t/p/w220_and_h330_face/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
        trailer: 'https://www.youtube.com/embed/JvJBdJqJXCk',
        reparto: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy, Ken Watanabe, Marion Cotillard, Cillian Murphy, Tom Berenger, Michael Caine',
        director: 'Christopher Nolan',
        id: 6
    }, 
    {
        nombre: 'Mad Max',
        genero: 'accion',
        calificacion: 8.1,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-mad-max-.jpg",
        trailer: 'https://www.youtube.com/embed/hEJnMQG9ev8',
        reparto: '	Mel Gibson, Joanne Samuel, Hugh Keays-Byrne, Steve Bisley, Tim Burns',
        director: 'George Miller',
        id: 7
    }, 
    {
        nombre: 'The amazing SpiderMan',
        genero: 'accion',
        calificacion: 6.9,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_729934-MLA42963890145_072020-O.webp",
        trailer: 'https://www.youtube.com/embed/-tnxzJ0SSOw',
        reparto: 'Andrew Garfield, Rhys Ifans, Emma Stone, Martin Sheen, Sally Field, Denis Leary',
        director: 'Marc Webb',
        id: 8
    }, 
    {
        nombre: 'Fight Club',
        genero: 'drama',
        calificacion: 8.8,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-fight-club-.jpg",
        trailer: 'https://www.youtube.com/embed/qtRKdVHc-cE',
        reparto: 'Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf, Jared Leto',
        director: 'David Fincher',
        id: 9
    }, 
    {
        nombre: 'Django',
        genero: 'drama',
        calificacion: 8.4,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-django-.jpg",
        trailer: 'https://www.youtube.com/embed/CLofzNkIqAc',
        reparto: 'Jamie Foxx, Christoph Waltz,Leonardo DiCaprio,erry Washington, Samuel L. Jackson',
        director: 'Quentin Tarantino',
        id: 10
    }, 
    {
        nombre: 'Interstellar',
        genero: 'drama',
        calificacion: 8.6,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-interstellar-.jpg",
        trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        reparto: '	Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, Matt Damon',
        director: 'Christopher Nolan',
        id: 11
    }, 
    {
        nombre: 'Cisne Negro',
        genero: 'drama',
        calificacion: 8.0,
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/cisne-negro/7055592-1-esl-ES/CISNE-NEGRO.jpg?resize=980:*",
        trailer: 'https://www.youtube.com/embed/5jaI1XOB-bs',
        reparto: 'Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey, Winona Ryder',
        director: 'Darren Aronofsky',
        id: 12
    }, 
    {
        nombre: 'Pulp Fiction',
        genero: 'crimen',
        calificacion: 8.9,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-pulp-fiction-.jpg",
        trailer: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
        reparto: 'John Travolta,  Samuel L. Jackson, Uma Thurman, Harvey Keitel, Tim Roth, Amanda Plummer, Maria de Medeiros, Ving Rhames, Eric Stoltz, Rosanna Arquette, Christopher Walken, Bruce Willis',
        director: 'Quentin Tarantino',
        id: 13
    }, 
    {
        nombre: 'The Mask',
        genero: 'comedia',
        calificacion: 6.9,
        imagen: "https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-the-mask-.jpg",
        trailer: 'https://www.youtube.com/embed/LZl69yk5lEY',
        reparto: 'Jim Carrey, Cameron Diaz, Peter Greene, Amy Yasbeck, Peter Riegert, Jim Doughan, Richard Jeni, Orestes Matacena',
        director: 'Chuck Russell',
        id: 14
    }, 
    {
        nombre: 'Men in Black',
        genero: 'comedia',
        calificacion: 7.3,
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/men-in-black-3/7055676-1-esl-ES/MEN-IN-BLACK-3.jpg?resize=980:*",
        trailer: 'https://www.youtube.com/embed/1Q4mhYF9aQQ',
        reparto: 'Tommy Lee Jones, Will Smith, Linda Fiorentino, Vincent DOnofrio, Rip Torn',
        director: 'Barry Sonnenfeld',
        id: 15
    }, 
    {
        nombre: 'The Truman Show',
        genero: 'comedia',
        calificacion: 8.2,
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/show-truman/7055694-1-esl-ES/SHOW-TRUMAN.jpg?resize=980:*",
        trailer: 'https://www.youtube.com/embed/dlnmQbPGuls',
        reparto: 'Jim Carrey, Laura Linney, Ed Harris, Noah Emmerich, Natascha McElhone',
        director: 'Peter Weir',
        id: 16
    }, 
    {
        nombre: 'Brave',
        genero: 'infantiles',
        calificacion: 7.1,
        imagen: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/posters-cine-2012-5.jpg?resize=550%2C814",
        trailer: 'https://www.youtube.com/embed/TEHWDA_6e3M',
        reparto: 'Kelly Macdonald, Billy Connolly, Emma Thompson, Julie Walters, John Ratzenberger',
        director: 'Mark Andrews, Brenda Chapman',
        id: 17
    }, 
    {
        nombre: 'Frankenweenie',
        genero: 'infantiles',
        calificacion: 6.9,
        imagen: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/posters-cine-2012-10.jpg?resize=550%2C786",
        trailer: 'https://www.youtube.com/embed/29vIJQohUWE',
        reparto: '	Charlie Tahan, Winona Ryder, Catherine OHara, Martin Landau, Robert Capron',
        director: 'Tim Burton',
        id: 18
    }, 
    {
        nombre: 'Hotel Transylvania',
        genero: 'infantiles',
        calificacion: 7.0,
        imagen: "https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/posters-cine-2012-11.jpg",
        trailer: 'https://www.youtube.com/embed/FYgzizpCTKU',
        reparto: '	Adam Sandler, Andy Samberg, Selena Gomez, Kevin James, Fran Drescher, Steve Buscemi, Molly Shannon',
        director: 'Genndy Tartakovsky',
        id: 19
    }, 
]