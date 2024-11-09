/**
 * Simples simulador de uma lampada
 * @author murilo dos santos
 */

// variaveis de apoio
let chave = false // o interruptor inicia desligado
let lampada = true // a lampada está OK

// pré´carregamento
let som = new Audio("sound/breaking-glass.mp3")

// lanterna (pré carregamento)
let stream, track
inicializarLanterna()


  

function quebrar() {
    if (lampada === true)
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de audio


    // passo 3: pra carregar o arquivo de audio para sincronizar com a troca de imagem 
    som.play()
    
    // apoio a çogica para o JS identificar a lampada quebrada
     lampada = false
}

function onoff() {
    if (chave === false) {
        document.getElementById('interruptor').src="img/swon.png"
        
        chave = true // O JS sabe que a chave esta ligada
        // verificar se a lampada
        if(lampada === true) {
        document.getElementById('lamp').src="img/on.jpg"
        }
    } else {
        document.getElementById('interruptor'). src="img/swoff.png"
        chave = false
        // desliga a lampada
        if(lampada === true) {
        document.getElementById('lamp').src="img/off.jpg"
    }
  }
}

// Estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e relas touch
// passo1: - captura os elementos do HTML (DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

// passo 2: - manipular o evento mouse pressionado
// addEventListener ("escuta de eventos em tempo real ")
// mousedown (mouse pressionado constantemente)
// mouseup (soltar o botão do mouse)
// touchstart (tocar na tela e manter)
// touchead (deixar de pressionar)

// preessionar o botao do mouse
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
 //  console.log("botão do mouse pressionado")
 if(lampada === true && chave === false){
    lampadaImg.src= "img/on.jpg" // trocar a imagem
 }
})
// soltar o botao do mouse
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
  //  console.log("botão do mouse solto")
  if(lampada === true && chave === false){
    lampadaImg.src= "img/off.jpg" // trocar a imagem
 }
})

// preessionar o botao do mouse
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
   // console.log("tela pressionada")
   if(lampada === true && chave === false){
    lampadaImg.src= "img/on.jpg" // trocar a imagem
 }
 })

 // soltar o botao do mouse
 botao.addEventListener('touchend', (event) =>{
    event.preventDefault() //ignorar o comportamento padrão
   //  console.log("a tela não esta sendo pressionada")
   if(lampada === true && chave === false){
    lampadaImg.src= "img/off.jpg" // trocar a imagem
 }
 })

 // lanterna (torch)
 async function inicializarLanterna() {
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}


 async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}


 async function desligar() {

 }