$(document).ready(function() {
    $('#contato_form').validate({
        rules: {
            nome: 'required',
            sobrenome: 'required',
            telefone: {
                required: true,
                minlength: 10,
                maxlength: 11,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            assunto: 'required',
            mensagem: 'required',
            cidade: 'required',
            estado: 'required'
        },
        messages: {
            nome: 'Por favor, preencha o campo Nome.',
            sobrenome: 'Por favor, preencha o campo Sobrenome.',
            telefone: {
                required: 'Por favor, preencha o campo Telefone.',
                minlength: 'O número de telefone deve ter no mínimo 10 dígitos.',
                maxlength: 'O número de telefone deve ter no máximo 11 dígitos.',
                digits: 'Por favor, insira apenas dígitos no campo Telefone.'
            },
            email: {
                required: 'Por favor, preencha o campo Email.',
                email: 'Por favor, insira um endereço de email válido.'
            },
            assunto: 'Por favor, preencha o campo Assunto.',
            mensagem: 'Por favor, preencha o campo Mensagem.',
            cidade: 'Por favor, preencha o campo Cidade.',
            estado: 'Por favor, preencha o campo Estado.'
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});