var movies = require("../data/movies.js");

module.exports = function (app) {
    app.get("/api/movies", function (req, res) {
        res.json(movies);
    });
    app.post("/api/movies", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            MovieDifference: 1000
        };
        console.log(req.body);

        // taking in user results and using POST to parse it
        var userdata = req.body;
        var userScores = userdata.scores;

        console.log(userScores);

        // this variable will calculate the difference in userscores and the scores in the database
        var totalDifference = 0;

        // created a forloop to go trough the all the possibilies in the database
        for (var i = 0; i < movies.lenght; i++) {

            console.log(movies[i]);
            totalDifference = 0;

            // going through the scores of each movie
            for (var j = 0; j <= movies[i].scores.length; j++) {

                ///calculating the difference between the score & sum them into the totalDifference
                //math.abs means if its negative it will be negative & positive = positive
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(movies[i].scores[j]));

                if (totalDifference <= bestMatch.movieDifference) {
                    // reseting the bestmatch to the newmovie
                    bestMatch.name = movies[i].name;
                    bestMatch.photo = movies[i].photo;
                    bestMatch.movieDifference = totalDifference;

                }
            }
        }
        // saving the user data into the database, the database will always return the new movie recommendation
        movies.push(userdata);
        // return a json with the user best preferrance , it will be used by the html
        res.json(bestMatch);
    });
}