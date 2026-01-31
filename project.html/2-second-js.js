let image1 =
  "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3RtJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D";
let image2 =
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3RtJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D";
let image3 =
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3RtJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D";

let images = [image1, image2, image3];
let i = 0;

function showImage() {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  document.getElementById("image").src = images[i];
}
function back() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  document.getElementById("image").src = images[i];
}


// Automatic image slider
setInterval(function(){
    showImage();
},2000)
;