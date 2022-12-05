<<<<<<< Updated upstream
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');
// const data = getData();

// console.log(data);
=======
/* eslint-disable max-len */
// const form = document.querySelector('.main-form');
// const submit = document.querySelector('#get-location');
>>>>>>> Stashed changes

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  console.log(json);
  return json;
}

<<<<<<< Updated upstream
const data = getData();
=======
/* Map Functions */

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const {coordinates} = item.geocoded_column;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

// const districtCities = {
//   1: ['Adelphi', 'Beltsville', 'Calverton', 'College Park', 'Laurel', 'Montpelier', 'South Laurel', 'Vansville', 'West Laurel'],
//   2: ['Adelphi', 'Avondale', 'Brentwood', 'Carole Highlands', 'Chillum', 'Green Meadows', 'Hyattsville', 'Langley Park', 'Lewisdale', 'Mount Rainier', 'North Brentwood'],
//   3: ['Beacon Heights', 'Berwyn Heights', 'College Park', 'East Pines', 'Glenn Dale', 'Glenridge', 'Landover Hills', 'Lanham', 'New Carrollton', 'Riverdale Heights and Hills', 'Riverdale Park', 'Seabrook', 'Templeton Knolls', 'University Park', 'West Lanham Hills', 'Woodlawn'],
//   4: ['Bowie', 'Glenn Dale', 'Greenbelt', 'Westchester Park', 'Seabrook', 'Upper Marlboro'],
//   5: ['Bladensburg', 'Cheverly', 'Edmonston', 'Fairmount Heights', 'Glenarden', 'Landover', 'Colmar Manor', 'Cottage City', 'Springdale', 'Bowie', 'Lanham', 'Hyattsville', 'Landover Hills'],
//   6: ['South Bowie', 'Capitol Heights', 'District Heights', 'Forestville', 'Kettering', 'Largo', 'Mitchellville', 'Upper Marlboro'],
//   7: ['District Heights', 'Bradbury', 'Boulevard Heights', 'Capitol Heights', 'Hillcrest Heights', 'Marlow Heights', 'Seat Pleasant', 'Suitland', 'Morningside'],
//   8: ['Camp Springs', 'Andrews Air Force Base', 'Clinton', 'Forest Heights', 'Fort Washington', 'Glass Manor', 'Marlow Heights', 'Oxon Hill', 'Temple Hills'],
//   9: ['Accokeek', 'Aquasco', 'Baden', 'Brandywine', 'Cheltenham', 'Clinton', 'Eagle Harbor', 'Fort Washington', 'Piscataway', 'Upper Marlboro']
// };

const districts = [
  [1, 'Adelphi', 'Beltsville', 'Calverton', 'College Park', 'Laurel', 'Montpelier', 'South Laurel', 'Vansville', 'West Laurel'],
  [2, 'Avondale', 'Brentwood', 'Carole Highlands', 'Chillum', 'Green Meadows', 'Hyattsville', 'Langley Park', 'Lewisdale', 'Mount Rainier', 'North Brentwood'],
  [3, 'Beacon Heights', 'Berwyn Heights', 'East Pines', 'Glenridge', 'Lanham', 'New Carrollton', 'Riverdale Heights and Hills', 'Riverdale Park', 'Seabrook', 'Templeton Knolls', 'University Park', 'West Lanham Hills', 'Woodlawn'],
  [4, 'Bowie', 'Glenn Dale', 'Greenbelt', 'Westchester Park', 'Seabrook', 'Upper Marlboro'],
  [5, 'Bladensburg', 'Cheverly', 'Edmonston', 'Fairmount Heights', 'Glenarden', 'Landover', 'Colmar Manor', 'Cottage City', 'Springdale', 'Landover Hills'],
  [6, 'South Bowie', 'Forestville', 'Kettering', 'Largo', 'Mitchellville'],
  [7, 'District Heights', 'Bradbury', 'Boulevard Heights', 'Capitol Heights', 'Hillcrest Heights', 'Marlow Heights', 'Seat Pleasant', 'Suitland', 'Morningside'],
  [8, 'Camp Springs', 'Andrews Air Force Base', 'Clinton', 'Forest Heights', 'Glass Manor', 'Oxon Hill', 'Temple Hills'],
  [9, 'Accokeek', 'Aquasco', 'Baden', 'Brandywine', 'Cheltenham', 'Eagle Harbor', 'Fort Washington', 'Piscataway']

];

// This function finds the district a city belongs to.
function findDistrict(districtArray, city) {
  const match = [];
  districtArray.forEach((district) => {
    if (district.includes(city)) {
      match.push(district[0]);
    }
  });
  return match.pop();
}

console.log(findDistrict(districts, 'Laurel'));

async function main() {
  const map = initMap();
  const data = await getData();

  const form = document.querySelector('.main-form');
  const submit = document.querySelector('#get-location');

  console.table(data);

  function selectElement(id, valueToSelect) {
    const element = document.getElementById(id);
    element.value = valueToSelect;
  }

  selectElement('leaveCode', '11');
  console.log(data[0]);
}
main();
>>>>>>> Stashed changes

// const data = []

// $.getJSON(data, function (json) {
//   for (var key in json) {
//       if (json.hasOwnProperty(key)) {
//           var item = json[key];
//           data.push({
//               district: council_district,
//               latitude: latitude,
//               mobile: item.mobile,
//               email: item.email
//           });
//       }
//   }
//   });

console.log(data.keys);

function districtCount(data, district) {
  let count = 0;
  data.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      obj.forEach((litter) => {
        if (!litter.council_district) { return; }
        if (litter.council_district === district) { count++; }
      });
    });

    return count;
  });
}

const districts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0
};

function districtLitters() {
  for (let i = 1; i <= 9; i++) {
    districts[i] = districtCount(data, i);
  }
}

districtLitters();

console.log(districts);
// function districtCount(district) {
//  var count = 0;
// for (var i = 0; i < data.length; i++) {
//      if (data[i].council_district == district) {
//          count++;
//      }
//  }
//  return count;
// }

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const {coordinates} = item.Location;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

const map = initMap();
