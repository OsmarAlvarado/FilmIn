// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let onlyDirector = moviesArray.map(movie => {
        return movie.director
    })
    return onlyDirector
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let quanty = 0
    let movieSteven = moviesArray.filter(e => {
        if (e.director === 'Steven Spielberg' && e.genre.includes('Drama')) {
            quanty++
        }
    })
    return quanty
}
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// function scoresAverage(moviesArray) {
//     let addScores = moviesArray.reduce((acc, score) =>
//         (acc + score, 0) / (moviesArray.length));
//     return addScores
// }
function scoresAverage(moviesArray) {
    let addScores = moviesArray.map((score) =>
        score['score']
    ).reduce((acc, b) =>
        (acc += b) / (moviesArray.length)
    );
    if (moviesArray.length === '') {
        return 0
    }

    return addScores
}
console.log(scoresAverage(movies))

// // Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sumScore = moviesArray.reduce((acc, b) =>
        acc.score + b.score)
    let promGenre = moviesArray.filter(e => {
        if (e.genre.includes('Drama')) {
            return sumScore
        }
    })


    return promGenre
}

console.log(dramaMoviesScore(movies));

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let order = moviesArray.sort((a, b) =>
        a.year - b.year)


    return order
}

console.log(orderByYear(movies));

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    for (i = 0; i <= moviesArray.length[20]; i++) {
        orderAlf = moviesArray.length.sort(20)((a, b) =>
            a.title - b.title)

        return orderAlf++
    }
    return orderAlf
}

console.log(orderAlphabetically(movies));

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) { }
