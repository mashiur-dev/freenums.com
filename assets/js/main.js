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
        //loader.style.width = 20 * index + '%';
        console.log(20 * index);
      
    }, index * 1000);

});
  
