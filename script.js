setInterval(myTimer, 8000);
var i = 0;
function myTimer() {
    if (i === 0) {
        document.getElementById("pic1").src = "images/Picture-046410251500.jpg";
        document.getElementById("pic2").src = "images/פזקר_-291_354410564000.jpg";
        document.getElementById("pic3").src = "images/1908364606615453350.JPG";
        i++;
        } else if (i === 1) {
        document.getElementById("pic1").src = "images/1908364606615453350.JPG";
        document.getElementById("pic2").src = "images/Picture-046410251500.jpg";
        document.getElementById("pic3").src = "images/פזקר_-291_354410564000.jpg";
        i++;
        } else {
        document.getElementById("pic1").src = "images/פזקר_-291_354410564000.jpg";
        document.getElementById("pic2").src = "images/1908364606615453350.JPG";
        document.getElementById("pic3").src = "images/Picture-046410251500.jpg";
        i = 0;
    };
}
