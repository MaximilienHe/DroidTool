import axiosBrands from "axios";
import axiosDevices3 from "axios";
var container = document.getElementById("BigContainer");

function createElements(response, i, name) {
  const indexDate = response.data.data[i].description.indexOf("Announced");
  let strDate = "";
  for (let j = indexDate + 10; j < indexDate + 18; j++) {
    strDate += response.data.data[i].description[j];
  }

  // Creation of elements
  // First Div
  var firstDiv = document.createElement("div");
  firstDiv.className = "col-lg-1/3 col-md-1/2 ";
  container.appendChild(firstDiv);
  // Second Div
  var secondDiv = document.createElement("div");
  if (i === 0) {
    secondDiv.className = "column-inner dorik-column-r9gkezcp 1/3";
  } else if (i === 1) {
    secondDiv.className = "column-inner dorik-column-4zxq0pzz 1/3";
  } else if (i === 2) {
    secondDiv.className = "column-inner dorik-column-x2t6sk4a 1/3";
  }
  firstDiv.appendChild(secondDiv);
  // Third div
  var thirdDiv = document.createElement("div");
  thirdDiv.className = "dorik-wrapper dorik-heading-z8qvguf8-wrapper";
  secondDiv.appendChild(thirdDiv);
  // Third Div Bis
  var thirdDivBis = document.createElement("div");
  thirdDivBis.className = "dorik-wrapper dorik-image-cvi3n655-wrapper";
  secondDiv.appendChild(thirdDivBis);
  // H5
  var titleProduct = document.createElement("h5");
  titleProduct.className = "dorik-heading dorik-heading-z8qvguf8";
  thirdDivBis.appendChild(titleProduct);
  // Span
  var span = document.createElement("span");
  titleProduct.appendChild(span);
  // Paragraph
  var paragraphName = document.createElement("p");
  paragraphName.id = "TitleLastProducts";
  span.appendChild(paragraphName);
  paragraphName.innerHTML =
    name + " " + response.data.data[i].name + "<br>" + strDate;
  strDate = "";
  // Create image
  var imageProduct = document.createElement("img");
  imageProduct.src = response.data.data[i].img;
  imageProduct.className = "dorik-image-j53v1vfb";
  thirdDivBis.appendChild(imageProduct);
}

// Get ALL brands informations (name and URLs)
axiosBrands
  .get("https://gsmarena-api-mh.herokuapp.com/brands")
  .then(function (response) {
    // As it's an array, for each element (= each brand)
    response.data.forEach((element) => {
      if (element.name === "Samsung") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Xiaomi") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Honor") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Huawei") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Nokia") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "OnePlus") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Realme") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      if (element.name === "Wiko") {
        axiosDevices3
          .get("https://gsmarena-api-mh.herokuapp.com/brand/" + element.url)
          .then(function (response) {
            for (let i = 0; i < 3; i++) {
              createElements(response, i, element.name);
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
