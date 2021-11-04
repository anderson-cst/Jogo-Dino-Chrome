const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
}

function jump(){  

    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);
        } else {
            position += 20;
            //faz o stylo.css receber os valores de position mais px para o dino pular
            dino.style.bottom = position + 'px';
        }
    },20);
}

function createCactus(){
    const cactus = document.createElement('div');//const cactus cria e recebe a div
    let cactusPosition = 1000;
    let ramdomTime = Math.random() * 6000;

    cactus.classList.add('cactus');//add a classe cactus a div criada
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); //document.appendChild(cactus) sem '' add a classe ao background

    let leftInterval = setInterval(() => {
       
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //if game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class= "game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20)

    setTimeout(createCactus, ramdomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);