let texts = [
    "Establishing Connection...",
    "Locating Local Numerologist...",
    "Checking Availability...",
    "Finalizing Connection....",
    "Redirecting Now!",
  ],
  rotator = document.getElementById("text-rotator"),
  loader = document.querySelector(".loading .progress span");

texts.forEach((text, index) => {

    setTimeout(function () {
      
        rotator.innerText = text;
        if (index < texts.length-1) {
            loader.style.width = 20 * index + "%";
            console.log(index);
        } else {
            loader.style.width = "100%";

            window.location.href = "http://yahoo.com";
        }
      
    }, index * 1000);

});
  
