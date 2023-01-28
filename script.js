const nome = document.getElementById('nome')
const email = document.querySelector('#email')
const form = document.querySelector("form")
const erro = document.querySelector('span')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    validName()
})


function validName(){
    if(nome.value.length<3){
        console.log('Nome invalido')
        nome.style.border = '2px red solid'
    }
    else{
        console.log("validado")
        nome.style.border = 'none'
    }
}

function validEmail(){
    if(!emailRegex.test(email.value)){
        console.log('NÃO VALIDADO')
        email.style.border = '2px red solid'
    }else{
        console.log('VALIDADO')
        email.style.border = 'none'
    }
}




















//////////////////////////////
/*interação do botão enviar*/
////////////////////////////
entro = ()=>{
    var entro = document.querySelector('button#bt')
    entro.style.backgroundImage = 'linear-gradient(to right, rgb(121, 28, 197), black)'
    entro.style.color = 'white'
    entro.style.transition = '1s'
    entro.style.bac

}
saiu=()=>{
    var sai = document.getElementById('bt')
    sai.style.background = 'rgb(121, 28, 197)'
    sai.style.color = 'white'
    sai.style.transition = '1s'
}
///////////////////////////////////////////////////////////