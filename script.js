const submit = document.querySelector(".submit")
const errorMsg = document.querySelector(".msgError")
const errorMsg1 = document.querySelector(".msgError1")
const emailBorder = document.querySelector(".email")
const passBorder = document.querySelector(".password")
const emailInput = document.querySelector(".email")
const passInput = document.querySelector(".password")
submit.addEventListener("click", clicar)

function sumir(){
    errorMsg.textContent = ''
    emailBorder.style.borderColor = 'black'
}

function sumir1(){
    errorMsg1.textContent = ''
    passBorder.style.borderColor = 'black'
}

function clicar(e){
    e.preventDefault()
    emailValue = emailInput.value
    passValue = passInput.value

    if (emailValue === ''){
        errorMsg.textContent = ' - O e-mail é obrigatório!'
        errorMsg.style.color = 'rgb(207, 57, 57)'
        errorMsg.style.fontSize = '15px'
        errorMsg.style.fontStyle = 'italic'
        emailBorder.style.borderColor = 'rgb(207, 57, 57)'
        setTimeout(sumir, 5000)
        return
    }

    if(emailValue.includes("@") === false){
        errorMsg.textContent = ' - É necessário um @ no seu e-mail!'
        errorMsg.style.color = 'rgb(207, 57, 57)'
        errorMsg.style.fontSize = '15px'
        errorMsg.style.fontStyle = 'italic'
        emailBorder.style.borderColor = 'rgb(207, 57, 57)'
        setTimeout(sumir, 5000)
        return
    }

    if(emailValue.includes(".") === false){
        errorMsg.textContent = ' - É necessário um ou mais (.) no seu e-mail!'
        errorMsg.style.color = 'rgb(207, 57, 57)'
        errorMsg.style.fontSize = '15px'
        errorMsg.style.fontStyle = 'italic'
        emailBorder.style.borderColor = 'rgb(207, 57, 57)'
        setTimeout(sumir, 5000)
        return
    }

    if((emailValue.indexOf(".") - emailValue.indexOf("@") == 1)){
        errorMsg.textContent = ' - E-mail inválido!'
        errorMsg.style.color = 'rgb(207, 57, 57)'
        errorMsg.style.fontSize = '15px'
        errorMsg.style.fontStyle = 'italic'
        emailBorder.style.borderColor = 'rgb(207, 57, 57)'
        setTimeout(sumir, 5000)
        return
    }


    
    if (passValue === ''){
        errorMsg1.textContent = ' - A senha é obrigatória!'
        errorMsg1.style.color = 'rgb(207, 57, 57)'
        errorMsg1.style.fontSize = '15px'
        errorMsg1.style.fontStyle = 'italic'
        passBorder.style.borderColor = 'rgb(207, 57, 57)'
        setTimeout(sumir1, 5000)
        return
    }


    errorMsg.textContent = ''
    errorMsg1.textContent = ''
    emailBorder.style.borderColor = 'black'
    passBorder.style.borderColor = 'black'
    
}