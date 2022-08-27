var botaoForm = document.getElementById("botao-criar");
var verificar;

function criarconta(){
    alert("Conta Criada com Sucesso! Te enviamos um código de verificação por email. digite no próximo campo. Código possui 8 numeros.");
    verificar = prompt();
    if(verificar = 1){
        alert("Sucesso! Comece a ter a experiencia de um cliente User.");
    }else {
        alert("Código de verificação errado. tente novamente.");
    }
}