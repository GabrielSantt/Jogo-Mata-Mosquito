var altura= 0
var largura= 0
var vidas =1

var nivel= window.location.search //Pega Nivel dificuldade da Index
nivel= nivel.replace('?','') // Eliminina o ? deixando o nivel limpo
var tempoDificuldade= 1500
//=======================================
if(nivel==='normal'){ //Faz a comparação para definição do tempo 
    tempoDificuldade=1500
}else if( nivel==='dificil'){
    tempoDificuldade=1000
}else if(nivel ==='hardcore'){
    tempoDificuldade=750
}



var tempo=10 //cronometro começa em 10s
var cronometro= setInterval( function(){
    tempo-=1 //Diminui -1 do tempo a cada repetição
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(mosca)
        
        window.location.href='vitoria.html' //Tempo for < que 0 vai para page Vitória
    }else{
        document.getElementById('cronometro').innerHTML=tempo //Se não reescreve o tempo com seu valor atual
    } 
},1000) // Repete o cód a cada 1s (1000mls)


function ajustatamanhotela(){//função para pegar o tamanho da tela que acordo  como o evento
    
     altura = window.innerHeight
     largura = window.innerWidth
     //console.log(altura +' e '+largura)
     
}
ajustatamanhotela()

function posicaoRandomica(){ // função que executa o código após a chamada da var mosca

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove() //Remove o mosquito caso e exista
        if(vidas>3){
            window.location.href='fim_jogo.html' //Se vida for > que 3 redireciona para index fim de jogo
        }else{
            document.getElementById('v'+vidas).src='imagens/coracao_vazio.png' //Adiciona um coração vazio a cada erro de matar o mosquito
            vidas++
        }
        
        

    }
var posicaoX= Math.floor(Math.random()*largura)-90 //Cria posições randômicas e que não excendam a size da window
var posicaoY= Math.floor(Math.random()*altura)-90 //Cria posições randômicas e que não excendam a size da window

posicaoX= posicaoX<0? 0:posicaoX // operador ternário usado para deixar as posições<0 e sairem da tela
posicaoY= posicaoY<0? 0:posicaoY // operador ternário usado para deixar as posições<0 e sairem da tela

console.log(posicaoX, posicaoY)


//Criando um elemento mosquito
var mosquito= document.createElement('img') //cria um <img> no html
mosquito.src="imagens/mosca.png"; //identifica a img com a src
mosquito.className= tamanhoAleatorio()+' '+ ladoAleatorio()//adiciona as classes de acordo como resul da fução
mosquito.style.top= posicaoY +'px' //Muda as posições de forma randomicamente pelas variáveis
mosquito.style.left=posicaoX +'px'//Muda as posições de forma randomicamente pelas variáveis
mosquito.style.position='absolute' //Posição absoluta para o mosquito mudar sua position na tela
mosquito.id='mosquito' //add um id ao mosquito
mosquito.onclick= function(){ //ao clicar no mosquito dispara um Function para remover da tela
        mosquito.remove()
}
document.body.appendChild(mosquito) //adiciona mais um elemento no caso o mosquito, ao body
}


function tamanhoAleatorio(){ //função para criar tamanhos aleatórios
    var classe=Math.floor( Math.random()*3)
    switch(classe){ 
        case 0:
            return'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
    
}

function ladoAleatorio(){ //função para inverter o lado do mosquito
    var classe=Math.floor( Math.random()*2)
    switch(classe){  //De acordo com o valor da var= classe retorno para a função a classe a ser executadas
        case 0:
            return'ladoA'
        case 1:
            return 'ladoB'
    }
}

 var mosca= setInterval(function (){ 
//Motorzinho da aplição que faz ele ser executada novamente a cada x tempo
   posicaoRandomica()

},tempoDificuldade)

