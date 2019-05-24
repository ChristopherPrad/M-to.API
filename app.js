window.onload = function() {
  choice();
};
let villeInput = "";
function choice() {
  let ville = document.querySelector("#recherche").value;
  villeInput = ville;

  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        (villeInput || "Paris") +
        "&units=metric&APPID=e563b12ca592299ebf3f91a4386d3cbc"
    )
    .then(function(result) {
      let actuali = result.data.sys.country;
      let temps = result.data.main.temp;
      let humidite = result.data.main.humidity;
      let ville = result.data.name;
      let nuage = result.data.weather[0].description;
      let icone = document.querySelector("#image");
      let icon = result.data.weather[0].icon;

      icone.setAttribute(
        "src",
        "https://openweathermap.org/img/w/" + icon + ".png"
      );
      let afficher = (document.querySelector("#temp").innerHTML =
        Math.floor(temps) + "°");
      let humide = (document.querySelector("#hum").innerHTML = humidite);
      let pays = (document.querySelector("#lieu").innerHTML = ville);
      let soleil = (document.querySelector("#temps").innerHTML = nuage);
      let info1 = (document.querySelector("#info").innerHTML = actuali);
      //   deuxieme axios
      axios
        .get(
          "https://api.apixu.com/v1/current.json?key=2f6f8fe72897460e83b92345192305&q=" +
            ville
        )
        .then(function(result1) {
          let time = result1.data.location.localtime;
          let affichtime = (document.querySelector("#heure").innerHTML = time);
          let fuseaux = result1.data.location.tz_id;
          let affichfuso = (document.querySelector(
            "#fuseaux"
          ).innerHTML = fuseaux);
        });

      axios
        .get(
          "https://newsapi.org/v2/top-headlines?" +
            "country=" +
            actuali +
            "&" +
            "apiKey=d7b09d5e472b4aa6ae3a247afa21edd0"
        )
        .then(function(result2) {
          let actuali = result.data.sys.country;
          let actuali2 = (document.querySelector("#info").innerHTML = actuali);

          let actuali3 = result2.data.articles[1].title;

          let actuali4 = (document.querySelector("#info").innerHTML = actuali3);
          console.log(result2);
        });
    });
}

// let actuali3 = result2.data.articles[0];
// let info1 = (document.querySelector("#info").innerHTML = actuali3);
// console.log(result3);
