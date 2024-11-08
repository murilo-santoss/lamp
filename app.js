/**
 * Simples simulador de uma lampada
 * @author murilo dos santos
 */

// variaveis de apoio
let chave = false // o interruptor inicia desligado
let lampada = true // a lampada está OK

function quebrar() {
    if (lampada === true)
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de audio



    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio a çogica para o JS identificar a lampada quebrada
     lampada = false
}

function onoff() {
    if (chave === false && lampada === true) {
        document.getElementById('interruptor').src="img/swon.png"
        
        chave = true // O JS sabe que a chave esta ligada
        // acender a lampada
        document.getElementById('lamp').src="img/on.jpg"
    } else if(lampada == true){
        document.getElementById('interruptor'). src="img/swoff.png"
        chave = false
        // desliga a lampada
        document.getElementById('lamp').src="img/off.jpg"
       
    }
 
}
  