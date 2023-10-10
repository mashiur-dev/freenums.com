let subsInputs = document.querySelectorAll(".fields input"),
  subsButton = document.querySelector(".submit");

subsButton.addEventListener('click', () => {
  subsInputs.forEach(input => {
    input.classList.remove("error");

    if (input.value.trim() == "") {
      input.classList.add("error");
    } else if (
      (input.type ==
        "email" &&
        !input.value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ))
    ) {
      input.classList.add("error");
    }
  });
});


/**
 * Loading page
 */
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
        if (index > 0) {
            if (index < texts.length - 1) {
              loader.style.width = 30 * index + "%";
            } else {
              loader.style.width = "100%";

              window.location.replace("http://yahoo.com");
            }
        }
        
      
    }, index * 1000);

});
  
