import axiosBrands from "axios";
var select = document.getElementById("marqueSelecter");

// Get ALL brands informations (name and URLs)
axiosBrands
  .get("https://gsmarena-api-mh.herokuapp.com/brands")
  .then(function (response) {
    console.log(response);
    // As it's an array, for each element (= each brand)
    response.data.forEach((element) => {
      // We take name and URL
      var opt = document.createElement("option");
      opt.value = element.url;
      opt.innerHTML = element.name;
      select.appendChild(opt);
    });
  })
  .catch(function (error) {
    console.error(error);
  });

// axiosTest
//   .get(
//     "https://fierce-tundra-54636.herokuapp.com/device/samsung_galaxy_tab_s6_lite_(2022)-11524"
//   )
//   .then(function (response) {
//     console.log(response.data.spec_detail[1].specs[0].value);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// Get
// axiosDevices
//   .get("https://fierce-tundra-54636.herokuapp.com/brand/huawei-phones-58")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
