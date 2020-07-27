const validateField = (field, message) => {
    if (!field.value && field.value.trim() == "") {
        alert(message);
        return false;
    }
    return true;
}

const validateNotice = (form) => {
    return validateField(form.email, "Informe o email!") && 
            validateField(form.descricao, "Informe a descrição!") &&
            validateField(form.titulo, "Informe o título!") && 
            validateField(form.cidade, "Informe a cidade!");
}

const validateSearch = (form) => {
    return validateField(form.key, "Informe o que deseja buscar!")
}