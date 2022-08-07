var character = document.getElementById("character");
var block = document.getElementById("block");
var clock = document.getElementById("clock");

var start = Date.now();

window.onload = function() {
    clock.innerHTML = "START";
    setInterval(timer(), 20000);
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function timer() {
    var delta = Date.now() - start;
    clock.innerHTML = time-delta;
    if (time-delta === 0) {return}
}

function jump(){    
    if(character.classList == "animate"){return}
    character.classList.add("animate");

    setTimeout(function(){
        character.classList.remove("animate");
    }, 300);

    var checkDead = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        
        if(blockLeft<-10 && blockLeft>-60 && characterTop>=130){
            block.style.animation="none";
            block.style.display="none";
            //alert("game over");
            window.location.replace("https://website1-nine.vercel.app/");

        }
    },10);

    animate();
}

function animate(){
    if (character.src === "./img/dino1.png"){
        character.src="./img/dino2.png";
    }
    else if (character.src === "./img/dino2.png"){
        character.src="./img/dino3.png";
    }
    else {
        character.src="./img/dino1.png";
    }
}

document.addEventListener("click", event => {
    if(block.classList == "block-animate"){return}
    block.classList.add("block-animate");
})

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump()
    }
    if(block.classList == "block-animate"){return}
    block.classList.add("block-animate");
  })