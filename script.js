
document.body.addEventListener('keyup', (event) => {
     playSound(event.code.toLowerCase());
});

// Pegando o que foi digitado 
let btn = document.querySelector('#button');
btn.addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray)
    }
});

// Função principa
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    // verifica se o elemento foi encontrado
    if(audioElement){
        audioElement.currentTime = 0; // Reiniciando o audio das teclas 
        audioElement.play(); // função da tag áudio
    }

    // Verifica qual elemento foi teclado e adiciona uma class CSS
    if(keyElement) {
        keyElement.classList.add('active')

        // Removendo a class CSS active após 300ms
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 200);
    } 
}

// Função de composição das teclas
function playComposition(songArray) {
    let timeSong = 0;

    // Mapeando as teclas digitadas
    songArray.map((songItem) => {
        setTimeout(() => {
            playSound(`key${songItem}`)
            
        }, timeSong);

        timeSong += 250;

    })
}
