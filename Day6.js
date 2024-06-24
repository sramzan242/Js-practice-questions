//Q1. Your task is to write a function getPopularGenres that takes two parameters:

// moviesData (array of objects): The dataset containing movie information.
// year (number): The year for which you want to find popular genres.
//The function should return an array of objects containing the top 3 most popular genres (by number of movies) released in the specified year. Each object in the returned array should have two properties: genre (string) and count (number of movies in that genre).
const moviesData = [
  {
    title: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger"],
    genre: "Action",
    releaseYear: 2008,
    rating: 9.0,
  },
  {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    title: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    genre: "Crime",
    releaseYear: 1994,
    rating: 8.9,
  },
  {
    title: "Avatar",
    actors: ["Sam Worthington", "Zoe Saldana"],
    genre: "Action",
    releaseYear: 2009,
    rating: 7.8,
  },
  {
    title: "The Dark Knight Rises",
    actors: ["Christian Bale", "Tom Hardy"],
    genre: "Action",
    releaseYear: 2012,
    rating: 8.4,
  },
  {
    title: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    genre: "Sci-Fi",
    releaseYear: 1999,
    rating: 8.7,
  },
  {
    title: "Forrest Gump",
    actors: ["Tom Hanks", "Robin Wright"],
    genre: "Drama",
    releaseYear: 1994,
    rating: 8.8,
  },
  {
    title: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman"],
    genre: "Drama",
    releaseYear: 1994,
    rating: 9.3,
  },
  {
    title: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino"],
    genre: "Crime",
    releaseYear: 1972,
    rating: 9.2,
  },
  {
    title: "Schindler's List",
    actors: ["Liam Neeson", "Ben Kingsley"],
    genre: "Biography",
    releaseYear: 1993,
    rating: 8.9,
  },
  {
    title: "Gladiator",
    actors: ["Russell Crowe", "Joaquin Phoenix"],
    genre: "Action",
    releaseYear: 2008,
    rating: 8.5,
  },
  {
    title: "Saving Private Ryan",
    actors: ["Tom Hanks", "Matt Damon"],
    genre: "War",
    releaseYear: 1998,
    rating: 8.6,
  },
  {
    title: "The Departed",
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    genre: "Crime",
    releaseYear: 2006,
    rating: 8.5,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    actors: ["Elijah Wood", "Ian McKellen"],
    genre: "Adventure",
    releaseYear: 2001,
    rating: 8.8,
  },
  {
    title: "The Lion King",
    actors: ["Matthew Broderick", "Jeremy Irons"],
    genre: "Animation",
    releaseYear: 1994,
    rating: 8.5,
  },
  {
    title: "Jaws",
    actors: ["Roy Scheider", "Robert Shaw"],
    genre: "Thriller",
    releaseYear: 1975,
    rating: 8.0,
  },
  {
    title: "E.T. the Extra-Terrestrial",
    actors: ["Henry Thomas", "Drew Barrymore"],
    genre: "Family",
    releaseYear: 1982,
    rating: 7.8,
  },
  {
    title: "The Avengers",
    actors: ["Robert Downey Jr.", "Chris Evans"],
    genre: "Action",
    releaseYear: 2008,
    rating: 8.0,
  },
  {
    title: "Mad Max: Fury Road",
    actors: ["Tom Hardy", "Charlize Theron"],
    genre: "Action",
    releaseYear: 2015,
    rating: 8.1,
  },
  {
    title: "The Revenant",
    actors: ["Leonardo DiCaprio", "Tom Hardy"],
    genre: "Adventure",
    releaseYear: 2008,
    rating: 8.0,
  },
  {
    title: "The Social Network",
    actors: ["Jesse Eisenberg", "Andrew Garfield"],
    genre: "Biography",
    releaseYear: 2010,
    rating: 7.7,
  },
  {
    title: "La La Land",
    actors: ["Ryan Gosling", "Emma Stone"],
    genre: "Drama",
    releaseYear: 2016,
    rating: 8.0,
  },
  {
    title: "Interstellar",
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    genre: "Sci-Fi",
    releaseYear: 2008,
    rating: 8.6,
  },
  {
    title: "The Prestige",
    actors: ["Christian Bale", "Hugh Jackman"],
    genre: "Action",
    releaseYear: 2008,
    rating: 8.5,
  },
  {
    title: "The Green Mile",
    actors: ["Tom Hanks", "Michael Clarke Duncan"],
    genre: "Crime",
    releaseYear: 1999,
    rating: 8.6,
  },
  {
    title: "Memento",
    actors: ["Guy Pearce", "Carrie-Anne Moss"],
    genre: "Mystery",
    releaseYear: 2000,
    rating: 8.4,
  },
  // Add more movies as needed
];

function getPopularGenres(moviesData, year) {
  const filteredMovies = moviesData.filter((elem) => {
    return elem.releaseYear === year;
  });
  const genreCounts = filteredMovies.reduce((acc, cur) => {
    const genre = cur.genre;
    acc[genre] = acc[genre] ? acc[genre] + 1 : 1;
    return acc;
  }, {});

  const sortedGenres = Object.keys(genreCounts)
    .map((genre) => ({ genre, count: genreCounts[genre] }))
    .sort((a, b) => b.count - a.count);

  return sortedGenres.slice(0, 3);
}

console.log(getPopularGenres(moviesData, 2008));

//Q2. moviesData (array of objects): The dataset containing movie information.
// genre (string): The genre of movies to compare ratings.
// The function should return an array of movie titles (strings) that belong to the specified genre and have a rating greater than or equal to a given minRating.

function compareRatings(moviesData, genre, minRating) {
  const filteredArr = moviesData.filter(
    (movie) => movie.rating >= minRating && movie.genre === genre
  );

  return filteredArr.map((movie) => movie.title);
}

console.log(compareRatings(moviesData, "Action", 8.5));

//Q3 moviesData (array of objects): The dataset containing movie information.
// year (number): The year for which you want to calculate the average rating.
// The function should calculate and return the average rating (rounded to one decimal place) of all movies released in the specified year. If no movies were released in the specified year, return 0.

function getYearlyAverageRating(moviesData, year) {
  const releasedMovies = moviesData.filter(
    (movie) => movie.releaseYear === year
  );
  const totalRating = releasedMovies.reduce((acc, movie, i) => {
    return (acc += movie.rating);
  }, 0);
  let avgRating = totalRating / releasedMovies.length;
  return isNaN(avgRating) ? (avgRating = 0) : avgRating.toFixed(1);
}

console.log(getYearlyAverageRating(moviesData, 2008));

console.log(getYearlyAverageRating(moviesData, 1994));

console.log(getYearlyAverageRating(moviesData, 2005));

//Q4. You have an array of objects representing sales, each with a product, year, and revenue. Write a function getTotalRevenue that calculates the total revenue for a given year.
const salesData = [
  { product: "Laptop", year: 2021, revenue: 1200 },
  { product: "Phone", year: 2021, revenue: 800 },
  { product: "Tablet", year: 2022, revenue: 600 },
  { product: "Monitor", year: 2021, revenue: 300 },
];

function getTotalRevenue(salesData, year) {
  const yearlySales = salesData.filter((sale) => sale.year === year);
  const totalRevenue = yearlySales.reduce((acc, sale) => acc + sale.revenue, 0);
  return totalRevenue;
}

const totalRevenue2021 = getTotalRevenue(salesData, 2021);
console.log(totalRevenue2021);

//Q5 Find the average rating of movies for each genre and the highest-rated movie in each genre. Write a function getGenreStatistics that returns an object where each key is a genre and the value is an object containing the average rating and the highest-rated movie for that genre.

function getGenreStatistics(moviesData) {
  const genreStats = {};

  moviesData.forEach((movie) => {
    if (!genreStats[movie.genre]) {
      genreStats[movie.genre] = {
        totalRating: 0,
        movieCount: 0,
        highestRatedMovie: movie,
        averageRating: 0,
      };
    }

    const genre = genreStats[movie.genre];

    genre.totalRating += movie.rating;
    genre.movieCount += 1;

    if (movie.rating > genre.highestRatedMovie.rating) {
      genre.highestRatedMovie = movie;
    }

    genre.averageRating = genre.totalRating / genre.movieCount;
  });

  const result = {};
  for (const genre in genreStats) {
    result[genre] = {
      averageRating: parseFloat(genreStats[genre].averageRating.toFixed(1)),
      highestRatedMovie: genreStats[genre].highestRatedMovie,
    };
  }

  return result;
}

const genreStatistics = getGenreStatistics(moviesData);
console.log(genreStatistics);
