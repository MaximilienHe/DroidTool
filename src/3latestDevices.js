// // Requires on axios
// const axiosBrandsURL = require("axios");
// const axiosDevices = require("axios");
// // Regex for date integrity
// let regex = /[0-9]+-20\d\d/i;
// // Array of 3 elements
// let devicesDate = []; // date to compare and get only the 3 latest elements
// let devicesName = []; // name and URL of 3 latest elements

// // Get ALL brands informations (name and URLs)
// axiosBrandsURL
//   .get("https://gsmarena-api-mh.herokuapp.com/brands")
//   .then(function (response) {
//     // As it's an array we get each elements as brands
//     let nbBrands = response.data.length;
//     for (let i = 0; i < response.data.length; i++) {
//       // We use URL to get devices of this brand
//       axiosDevices
//         .get(
//           "https://gsmarena-api-mh.herokuapp.com/brand/" + response.data[i].url
//         )
//         .then(function (response) {
//           // The first element of array is automatically the latest device of the brand (response.data.data[0])
//           const indexDate = response.data.data[0].description.indexOf(
//             "Announced"
//           ); // Here, we take the index of "Announced" in the description string, as the date is following this word in descriptions

//           // We create two empty strings to get informations from the string
//           let strMonth = "";
//           let strYear = "";
//           // We take the date from string, i.e. the 8 following characters (Format, e.g : Feb 2022)
//           for (let j = indexDate + 10; j < indexDate + 18; j++) {
//             // The characters after the 4th after are the date (e.g 2022)
//             if (j > indexDate + 13) {
//               strYear += response.data.data[0].description[j];
//             } else {
//               // And these are the month (e.g Feb )
//               strMonth += response.data.data[0].description[j];
//             }
//           }
//           let nbMonth; // This will contain the number of the month, in order to be more convenient in sorting process
//           // Basically, we convert string to number
//           switch (strMonth) {
//             case "Jan ":
//               nbMonth = 1;
//               break;
//             case "Feb ":
//               nbMonth = 2;
//               break;
//             case "Mar ":
//               nbMonth = 3;
//               break;
//             case "Apr ":
//               nbMonth = 4;
//               break;
//             case "May ":
//               nbMonth = 5;
//               break;
//             case "Jun ":
//               nbMonth = 6;
//               break;
//             case "Jul ":
//               nbMonth = 7;
//               break;
//             case "Aug ":
//               nbMonth = 8;
//               break;
//             case "Sep ":
//               nbMonth = 9;
//               break;
//             case "Oct ":
//               nbMonth = 10;
//               break;
//             case "Nov ":
//               nbMonth = 11;
//               break;
//             case "Dec ":
//               nbMonth = 12;
//               break;
//             default:
//               nbMonth = 0;
//               break;
//           }
//           // We initialize the array with really old values (sorry people who were born this date)
//           for (let countToThree = 0; countToThree < 4; countToThree++) {
//             devicesDate[countToThree] = new Date("1990", "01");
//           }
//           // In this way, we can compare in all case the current value with something that is on the array
//           // We check the integrity of date, there are some nonconformity in the API
//           if (regex.test(nbMonth + "-" + strYear)) {
//             // First case, the new date is sooner that the first element, we replace the current first element
//             // from the array, with the new date value
//             var date = new Date(strYear, nbMonth);
//             if (devicesDate[0].getTime() < date) {
//               devicesDate[0] = nbMonth + "-" + strYear;
//               devicesName[0] =
//                 response.data.data[0].name + "," + response.data.data[0].img;
//             }
//             // Second case, it's the second element who is older than the current date, we replace the second element ...
//             else if (devicesDate[1].getTime() < date) {
//               devicesDate[1] = nbMonth + "-" + strYear;
//               devicesName[1] =
//                 response.data.data[0].name + "," + response.data.data[0].img;
//             }
//             // Last, but not least case, the third element is older, then replace ...
//             else if (devicesDate[2].getTime() < date) {
//               devicesDate[2] = nbMonth + "-" + strYear;
//               devicesName[2] =
//                 response.data.data[0].name + "," + response.data.data[0].img;
//             }
//             // By default, we won't do anything, cuz there are sooner dates on the array !
//           }
//           console.log(devicesDate[0] + "    " + devicesName[0]);
//           if (i === nbBrands - 1) {
//             console.log("Fin !");
//             console.log(devicesDate[0] + "    " + devicesName[0]);
//             console.log(devicesDate[1] + "    " + devicesName[1]);
//             console.log(devicesDate[2] + "    " + devicesName[2]);
//           }
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     }
//   })
//   .then(function (response) {
//     //console.log(devicesDateObjet);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
