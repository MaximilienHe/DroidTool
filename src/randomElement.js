function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const axiosRandom = require("axios");
let intBrand = 0;
let intDevice = getRandomInt(12);
let deviceName = document.getElementById("DeviceName");
let deviceImage = document.getElementById("DeviceImage");
var button = document.getElementById("BUTTON");
let brandName = "";

// Get ALL brands informations (name and URLs)
button.addEventListener("click", function () {
  axiosRandom
    .get("https://gsmarena-api-mh.herokuapp.com/brands")
    .then(function (response) {
      console.log(response);
      intBrand = getRandomInt(response.data.length);
      brandName = response.data[intBrand].name;
      axiosRandom
        .get(
          "https://gsmarena-api-mh.herokuapp.com/brand/" +
            response.data[intBrand].url
        )
        .then(function (response) {
          console.log(response);
          deviceName.innerHTML =
            brandName + " " + response.data.data[intDevice].name;
          deviceImage.src = response.data.data[intDevice].img;
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
});
