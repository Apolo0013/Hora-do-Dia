// a imagem que sera alterado de acordo com o harario
var image = window.document.getElementById('imagem')
var copy = window.document.getElementById('copyrate')

// o hora, minutos e segundos atual


// o texto que falaram "o abestando agora é tal horas"
var horaText =  window.document.getElementById('Hora')

//image.addEventListener('mouseenter', mudar_hora)

function Relogio(){
    var horaAtual =  new Date().getHours()
    var minutoAtual = new Date().getMinutes()
    var segAtual = new Date().getSeconds()


    if (horaAtual >= 12 && horaAtual < 18){ // aqui voce botar a imagem de tarde

        if (minutoAtual > 9 && segAtual > 9){
        horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:${segAtual} da tarde.`
        }
        else if (minutoAtual <= 9 && segAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:0${minutoAtual}:${segAtual} da tarde.`
        }
        else if (segAtual <= 9 && minutoAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:0${segAtual} da tarde.`
        }
        else if (segAtual <= 9 && minutoAtual <= 9){
            horaText.innerText = `Agora são ${horaAtual};0${minutoAtual}:0${segAtual} da tarde`
        }
        
        image.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F2A444'
        copy.style.color = 'black'
    }

    else if (horaAtual >= 18 && horaAtual <=23){ // aqui da noite pae

        if ( minutoAtual > 9 && segAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:${segAtual} da noite.`
        }
        else if (minutoAtual <= 9 && segAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:0${minutoAtual}:${segAtual} da noite`
        }
        else if (minutoAtual > 9 && segAtual <= 9){
            horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:0${segAtual} da noite`
        }
        else if (minutoAtual <= 9 && segAtual <= 9){
            horaText.innerText = `Agora são ${horaAtual}:0${minutoAtual}:0${segAtual} da noite`
        }

        image.src = 'imagens/noite.jpg'
        document.body.style.background = '#091326'
        copy.style.color = 'white'
        }

    else if (horaAtual > 6 && horaAtual <= 12){ // aqui da manhâ

        if (horaAtual > 6 && horaAtual <= 9 && minutoAtual <= 9 && segAtual <= 9){
            horaText.innerText = `Agora são 0${horaAtual}:0${minutoAtual}:0${segAtual} da manhã`
        }
        else if  (horaAtual > 6 && horaAtual <= 9 && minutoAtual > 9 && segAtual > 9){
            horaText.innerText = `Agora são 0${horaAtual}:${minutoAtual}:${segAtual} da manhã`
        }
        else if (horaAtual > 9 && minutoAtual <= 9 && segAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:0${minutoAtual}:${segAtual} da manhã`
        }
        else if (horaAtual > 9 && minutoAtual > 9 && segAtual <= 9){
            horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:0${segAtual} da manhã`
        }
        else if (horaAtual > 9 && segAtual > 9 && minutoAtual > 9){
            horaText.innerText = `Agora são ${horaAtual}:${minutoAtual}:${segAtual} da manhã`
        }

        image.src = 'imagens/manha.jpg'
        document.body.style.background = '#F2B705'
        copy.style.color = 'black'

    }

    else if ( horaAtual >= 0 && horaAtual <= 6){ // madrugada
        
        if (minutoAtual > 9 && segAtual > 9){
            horaText.innerText = `Agora são 0${horaAtual}:${minutoAtual}:${segAtual} da madrugada.` 
        }
        else if (minutoAtual <= 9 && segAtual <= 9){
            horaText.innerText = `Agora são 0${horaAtual}:0${minutoAtual}:0${segAtual} da madrugada`
        }
        else if (minutoAtual <= 9 && segAtual > 9){
            horaText.innerText = `Agora são 0${horaAtual}:0${minutoAtual}:${segAtual} da madrugada`
        }
        else if (minutoAtual > 9 && segAtual <= 9 ){
            horaText.innerText = `Agora são 0${horaAtual}:${minutoAtual}:0${segAtual} da madrugada`
        }

        image.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#262626'
        copy.style.color = 'white'
    }
}


setInterval(Relogio , 1000)
Relogio()



