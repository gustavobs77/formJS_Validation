const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput= document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    // verificação dos campos obrigatórios 
    if(nameInput.value === ""){
       alert("Por favor, digite seu nome");
       return;
    }
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, digite seu email");
        return;
     }

     if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa de pelo menos 8 digitos"); 
        return;
     };

     if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return;
     };

     if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
        return;
     };


    // Se todos os campos estão devidamente preenchidos, envie o formulário
    form.submit()
    // verificar se o email é verdadeiro 
    function isEmailValid (email){
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );
        if(emailRegex.test(email)){
            return true
        }
    


    }; // validando o tamanho da senha
    function validatePassword (password, minDigits){
        if(password.length >= minDigits){
       // senha válida
        return true
        } // caso contrário...
        return false
    }
})