import axiosListDevices from "axios";
var button = document.getElementById("BUTTON");
var container = document.getElementById("BigContainer");
let cpt = 0;
let cptpages = 0;
// Get selected element
var select = document.getElementById("marqueSelecter");
// When a brand is chosen
button.addEventListener("click", function () {
  // Axios devices that takes all devices from first page
  axiosListDevices
    .get("https://gsmarena-api-mh.herokuapp.com/brand/" + select.value)
    .then(function (response) {
      // Get each device from brand chosen
      // As it is a data of 85, and I want to display 17 devices by 17, I do it like that :
      if (cptpages === 0) {
        cpt++;
        for (
          let i = (response.data.data.length / 5) * cpt;
          i < (response.data.data.length / 5) * (cpt + 1);
          i++
        ) {
          const indexDate = response.data.data[i].description.indexOf(
            "Announced"
          );
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
          secondDiv.className = "column-inner dorik-column-i3pnpj12  1/3";
          firstDiv.appendChild(secondDiv);
          // Third div
          var thirdDiv = document.createElement("div");
          thirdDiv.className = "dorik-wrapper dorik-image-j53v1vfb-wrapper ";
          secondDiv.appendChild(thirdDiv);
          // Third Div Bis
          var thirdDivBis = document.createElement("div");
          thirdDivBis.className =
            "dorik-wrapper dorik-heading-rgm9tvvo-wrapper ";
          secondDiv.appendChild(thirdDivBis);
          // H5
          var titleProduct = document.createElement("h5");
          titleProduct.className = "dorik-heading dorik-heading-rgm9tvvo ";
          thirdDivBis.appendChild(titleProduct);
          // Span
          var span = document.createElement("span");
          titleProduct.appendChild(span);
          // Paragraph
          var paragraphName = document.createElement("p");
          paragraphName.id = "TitleLastProducts";
          span.appendChild(paragraphName);
          paragraphName.innerHTML =
            response.data.data[i].name + "<br>" + strDate;
          strDate = "";
          // Create image
          var imageProduct = document.createElement("img");
          imageProduct.src = response.data.data[i].img;
          imageProduct.className = "dorik-image-j53v1vfb";
          thirdDivBis.appendChild(imageProduct);
        }
        // Check if we have finished to do the first page :
        if (cpt === 4) {
          cptpages++;
          cpt = 0;
        }
        // Get other devices from subpages
      } else {
        cpt++;
        axiosListDevices
          .get(
            "https://gsmarena-api-mh.herokuapp.com/brand/" +
              response.data.pages[cptpages].url
          )
          .then(function (response) {
            for (
              let i = (response.data.data.length / 5) * cpt + cpt;
              i < (response.data.data.length / 5) * (cpt + 1);
              i++
            ) {
              const indexDate = response.data.data[i].description.indexOf(
                "Announced"
              );
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
              secondDiv.className = "column-inner dorik-column-i3pnpj12  1/3";
              firstDiv.appendChild(secondDiv);
              // Third div
              var thirdDiv = document.createElement("div");
              thirdDiv.className =
                "dorik-wrapper dorik-image-j53v1vfb-wrapper ";
              secondDiv.appendChild(thirdDiv);
              // Third Div Bis
              var thirdDivBis = document.createElement("div");
              thirdDivBis.className =
                "dorik-wrapper dorik-heading-rgm9tvvo-wrapper ";
              secondDiv.appendChild(thirdDivBis);
              // H5
              var titleProduct = document.createElement("h5");
              titleProduct.className = "dorik-heading dorik-heading-rgm9tvvo ";
              thirdDivBis.appendChild(titleProduct);
              // Span
              var span = document.createElement("span");
              titleProduct.appendChild(span);
              // Paragraph
              var paragraphName = document.createElement("p");
              paragraphName.id = "TitleLastProducts";
              span.appendChild(paragraphName);
              paragraphName.innerHTML =
                response.data.data[i].name + "<br>" + strDate;
              strDate = "";
              // Create image
              var imageProduct = document.createElement("img");
              imageProduct.src = response.data.data[i].img;
              imageProduct.className = "dorik-image-j53v1vfb";
              thirdDivBis.appendChild(imageProduct);
            }
            if (cpt % 4 === 0) {
              cpt = 0;
              cptpages++;
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
});
