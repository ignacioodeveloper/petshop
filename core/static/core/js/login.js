$(document).ready(function(){
    $.validator.setDefaults({
        messages: {
            required: 'Este campo es obligatorio',
        },
    });
    $('#form').validate({ 
        rules: {
            'username': {
            required: true,
            },
            'password': {
                required: true,
            }

        },
        messages: {
            'username': {
            required: 'Debe ingresar un nombre de usuario',
            },
            
            'password': {
                required: 'Debe ingresar su contraseña',
            }

        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Inserta el mensaje de error después del elemento
            error.addClass('div font-bold text-red-500'); // Aplica una clase al mensaje de error
            //element.after('<br>'); 
        },
    });


});