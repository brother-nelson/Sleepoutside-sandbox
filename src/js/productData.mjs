const baseURL = 'https://wdd330-backend.onrender.com/';

// var responseClone; // 1
// fetch(baseURL + `products/search/tents`)
// .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export async function getData(category) {
  return fetch(baseURL + `products/search/${category}`)
    .then(convertToJson)
    .then((data) => data.Result);
}

export async function findProductById(id) {
  return fetch(baseURL + `product/${id}`)
    .then(convertToJson)
    .then((data) => data.Result);
}
