function validar(form) {

    let nome = form.nome.value;
    let idade = form.idade.value;
    let cidade = form.cidade.value;
    let email = form.email.value;
    let curriculo = form.curriculo.value;

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        form.nome.focus();
        return false;
    }

    if (idade == "") {
        alert('Preencha o campo com sua idade');
        form.idade.focus();
        return false;
    }

    if (cidade == "") {
        alert('Preencha o campo com sua cidade');
        form.cidade.focus();
        return false;
    }

    if (email == "") {
        alert('Preencha o campo com seu email');
        form.email.focus();
        return false;
    }
    if (curriculo == "") {
        alert('Preencha o campo curriculo');
        form.curriculo.focus();
        return false;
    }

    alert("Formulário validado com sucesso!");  

}

function validarIdade(form){
    form.idade.value = form.idade.value.replace(/[^0-9]+/g, '');
}

function checkIdade(form){
    // if (/^[0-9].-$/.test(form.idade.value)) {
    //     return true;
    // } else {
    //     return false;
    //}

    var ValidChars = /^[0-9]*$/;
    if(ValidChars.test(form.idade.value))
        return true;
    else {
        alert("Numero Inválido");
        return false;
    }
}

