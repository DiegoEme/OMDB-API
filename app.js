const url = `http://www.omdbapi.com/?t=${movieSearchText}&apikey=1a20d3ac`
//const urlImg = `http://img.omdbapi.com/?i=${resultJson.imdbID}}&apikey=1a20d3ac`

const getSearchText = () => {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (e)=>{
        e.preventDefault();

        const movieSearchText = document.getElementById("movieSearchText").value ? document.getElementById("movieSearchText").value : "escribí algo ome";
        
        console.log(movieSearchText);
        testApi(movieSearchText);
        document.getElementById("movieSearchText").value = ""
        
    })
}
getSearchText();

const testApi = async (movieSearchText) => {
    const resultText = await fetch (`http://www.omdbapi.com/?t=${movieSearchText}&apikey=1a20d3ac`);
    let resultJson = await resultText.json()
    console.log(resultJson)

    const resultPoster = await fetch( `http://img.omdbapi.com/?i=${resultJson.imdbID}&apikey=1a20d3ac`);
    let poster= await resultPoster;
    console.log(poster.url)
    llenarDatos(resultJson)
}

const llenarDatos = (pelicula) => {
let html = "";
html += `<div class="card" style="width: 18rem;">`;
html += `<img src="${pelicula.Poster}" class="card-img-top">`;
html += `  <div class="card-body">`;
html += `<h5 class="card-title">${pelicula.Title}</h5>`;
html += ` <p class="card-text">${pelicula.Genre}</p>`;
html += "</div>";
html += "</div>";

document.getElementById("movies").innerHTML = html;
}

