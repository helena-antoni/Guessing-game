//variables
const screen1 = document.querySelector(".screen1") 
const screen2 = document.querySelector(".screen2") 
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber =  Math.round(Math.random() * 10) ;  

let xAttempts = 0
inputNumber = Number(inputNumber)

//Events
btnTry.addEventListener('click', handleTryClick)  
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyPressEnter)

//functions callback
function handleTryClick(event){
    event.preventDefault() 
    
    const inputNumber = document.querySelector('#inputNumber') 

    if(inputNumber.value !== ''){
        xAttempts++;  
        if((inputNumber.value >= 0 )  && (inputNumber.value <=10)){ 
            if((inputNumber.value) == (randomNumber)){
                toggleScreen()
                
                screen2.querySelector("h2")
                    .innerHTML = `Parabéns! O número é o ${randomNumber}.
                    Você acertou em ${xAttempts} tentativas` 
            }  
        }else{
            alert("Número inválido! Tente números de 0 a 10.") 
        }
        inputNumber.value = "" 
   }
}  

function handleResetClick(){
    toggleScreen()
    xAttempts = 0
    
    randomNumber =  Math.round(Math.random() * 10) ;  
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
                                               
function keyPressEnter(e){  
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}

 