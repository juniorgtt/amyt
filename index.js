var fontSize = 72;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
var vara = new Vara(
  "#container", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "My name is Fiorella",
      y: 150,
      fromCurrentPosition: { y: false },
      duration: 3000
    },
    {
      text: "hello Fiorella, my name is Tom Riddle",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000
    },
    {
      text: "I want to wish you happy birthday",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "Do you know anything about the Chamber of Secrets ?",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4500
    },
    {
      text: "Yes",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 1000
    },
    {
      text: "Hola",
      y: 150,
      id: "no_erase",
      delay: 2000
    },
    {
      text:
        "Ahora si, te deseo que tengas un dia genial :D",
      y: 50,
      duration: 4000
    },
    {
      text: "Espero que hallas entendido la referencia XD"
    }
  ],
  {
    strokeWidth: 2,
    color: "#523c33",
    fontSize: fontSize,
    textAlign: "center"
  }
);
vara.ready(function() {
  var erase = true;
  vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
  vara.get("github").container.style.cursor = "pointer";
  vara.get("github").container.onclick = function() {
    document.querySelector("#link").click();
  };
});
