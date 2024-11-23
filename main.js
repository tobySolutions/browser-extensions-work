alert("The test extension is up and running");

function replaceImages() {
  var images = document.getElementsByTagName("img");

  const environment = chrome ?? browser;

  for (elt of images) {
    elt.src = `${environment.runtime.getURL("pp.jpeg")}`;
    elt.alt = "an alt text";
  }
}

// var images = document.getElementsByTagName("img");

// for (elt of images) {
//   elt.src = `${chrome.runtime.getURL("pp.jpeg")}`;
//   elt.alt = "an alt text";
// }

replaceImages();
