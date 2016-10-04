
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
var i = 0; //for loop counter
var centerThumb = 0;
var leftThumb = 4;
var rightThumb = 1;
var image = new Image(); // creates an image object
var image2 = new Image(); // large images


// declaring arrays
var images = ["thumb/thumb1.jpg", "thumb/thumb2.jpg", "thumb/thumb3.jpg", "thumb/thumb4.jpg", "thumb/thumb5.jpg", "thumb/thumb6.jpg", "thumb/thumb7.jpg", "thumb/thumb8.jpg", "thumb/thumb9.jpg", "thumb/thumb10.jpg", "thumb/thumb11.jpg", "thumb/thumb12.png", "thumb/thumb13.png", "thumb/thumb14.png", "thumb/thumb15.png";
var largeImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image10.jpg", "images/image11.jpg", "images/image12.png", "images/image13.png", "images/image14.png", "images/image15.png"];
var title = ["Mt", "tree", "kitty", "kyle", "flower", "bird", "homework", "homework two","cool", "coolio", "homework 3", "homework 4", "spart 1", "spartan 2"];
var descripton = ["do you", "belive", "in love", "after love", "i can", "feel", "something", "inside me", "say i", "really dont", "think", "im strong", "enough", "no"];


var count = images.length; // will change if we add more items to the image array

// preloading the images for the slide show
function preload() {
    "use strict";
    for (i = 0; i < count; i++) {
        image.src = images[i];
        image2.src = largeImages[i];
        images.push(image);
        largeImages.push(image2);
    }
}



//moving through the thumbnails
function changeThumb() {
    "use strict";
    centerThumb++;
    if (centerThumb === count) {
        centerThumb = 0;
    }
    $("center").src = images[centerThumb];

    leftThumb++;
    if (leftThumb === count) {
        leftThumb = 0;
    }
    $("left").src = images[leftThumb];


    rightThumb++;
    if (rightThumb === count) {
        rightThumb = 0;
    }
    $("right").src = images[rightThumb];
}

function leftButton() {
    "use strict";
    $("large").src = largeImages[leftThumb];
    $("title").innerHTML = title[leftThumb];
    $("detail").innerHTML = descripton[leftThumb];
}

function rightButton() {
    "use strict";
    $("large").src = largeImages[rightThumb];
    $("title").innerHTML = title[rightThumb];
    $("detail").innerHTML = descripton[rightThumb];
}

function centerButton() {
    "use strict";
    $("large").src = largeImages[centerThumb];
    $("title").innerHTML = title[centerThumb];
    $("detail").innerHTML = descripton[centerThumb];
}



function onload() {
    "use strict";
    preload();
}