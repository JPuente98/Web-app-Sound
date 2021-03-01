window.addEventListener("load", ()=>
{
    const sounds = document.querySelectorAll(".sonidos");

    const pads = document.querySelectorAll(".pads div");

    const visual = document.querySelector(".visual");

    const colores = [

        "#120591",
        "#120331",
        "#696969",
        "#69f0ae",
        "#006064",
        "#424242"
    ];

    //Obtener todos los div con audios

    pads.forEach((pad, index) => {

        pad.addEventListener("click", function(){

            sounds[index].currentTime = 0;
            sounds[index].play();
            crearBolas(index);
        });

    });

    const crearBolas = index => {

        const bolas = document.createElement("div");
        visual.appendChild(bolas);
        bolas.style.backgroundColor = colores[index];

        bolas.style.animation = `jump 1s ease`;

        bolas.addEventListener("animationend",function()
        {
            visual.removeChild(this);
        })

    }
});