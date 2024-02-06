var urls = [
  { url: "https://jsonplaceholder.typicode.com/photos/1" },
  { url: "https://jsonplaceholder.typicode.com/photos/2" },
  { url: "https://jsonplaceholder.typicode.com/photos/3" },
];

// ------------------
// 1. Review and Fix:
// ------------------
/* Here are the different errors:
    a. TypeError: Cannot read properties of undefined (reading 'url')
      - This error is caused by the '=' in the for operator '<=', which will restart the loop once more than the length of the array

    b. [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
    - Fetch returns one promise per URL, so we have an array of promises in the photos variable.
    - We will wait for the result of each promise by creating an asynchronous function, then retrieve a JSON format
*/

/* const fetchPhotosFixed = async () => {
  for (var i = 0; i < urls.length; i++) {
    try {
      const response = await fetch(urls[i].url);
      const data = await response.json();
      photos[i] = data;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(photos);
};

fetchPhotosFixed();
*/

// ---------------------
// 2. Improved Solution:
// ---------------------
/* I use Promise.all to parallelize fetch requests to improve function performance, then
a map on the response array to transform it into a JSON data array.
We gain visibility at the same time */

const myFetchPhotos = async () => {
  try {
    const responses = await Promise.all(
      urls.map((urlObj) => fetch(urlObj.url))
    );
    const pictureData = await Promise.all(
      responses.map((response) => response.json())
    );
    console.log(pictureData);

    // ---------------------
    // 3. Display images:
    // ---------------------
    const root = document.getElementById("root"); // Get root element

    pictureData.forEach((picture) => {
      const img = document.createElement("img"); // create img element for each picture
      img.src = picture.url; // Defined Url of img
      img.alt = picture.title; // Defined alt of img
      root.appendChild(img); // Append img on web page
    });
  } catch (error) {
    console.log(error);
  }
};

myFetchPhotos();
