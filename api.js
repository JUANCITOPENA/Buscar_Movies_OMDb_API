var data;

function getanswer(q) {
    $.get("https://www.omdbapi.com/?s=" + q + "&apikey=9d938e72", function(rawdata) {

        var rawstring = JSON.stringify(rawdata);
        data = JSON.parse(rawstring);
        var Titulo = data.Search[0].Title;
        var year = data.Search[0].Year;

        var imdburl = "https://www.imdb.com/title/" + data.Search[0].imdbID + "/";

        var posterurl = data.Search[0].Poster;


        document.getElementById('answer').innerHTML = "<h1>" +
            Titulo + "</h1><img src= '" +
            posterurl + "'><br><p> Año de Esteno:" +
            year + "</p> <p> IMDB page: <a href='" +
            imdburl + "'target='_blank'>" +
            imdburl + "</a></p>";

        // Title: Batman Begins
        // Year: 2005
        // Runtime: 140 min
        // Genre(s): Action, Adventure
        // Language(s): English, Mandarin
        // Country: USA, UK
    });
}
