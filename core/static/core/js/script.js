// profile menu
document.addEventListener('DOMContentLoaded', function() {
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.querySelector('[aria-labelledby="user-menu-button"]');

  // Mostrar u ocultar el menú desplegable al hacer clic en el botón
  userMenuButton.addEventListener('click', function() {
    const expanded = userMenuButton.getAttribute('aria-expanded') === 'true';       
    userMenuButton.setAttribute('aria-expanded', !expanded);
    userMenu.classList.toggle('hidden');
  });
  
  // Ocultar el menú desplegable al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
      userMenu.classList.add('hidden');
    }
  });
  
});
  
// responsibe menu
document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const menuIconClosed = mobileMenuBtn.querySelector('.block');
        const menuIconOpen = mobileMenuBtn.querySelector('.hidden');
        const mobileMenu = document.getElementById('mobile-menu');
  
        // Agregar evento de clic al botón del menú móvil
        mobileMenuBtn.addEventListener('click', function() {
  
            // Alternar la visibilidad de los íconos del botón del menú móvil
            menuIconClosed.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
  
            mobileMenu.classList.toggle('hidden');
  
  
        });
});


$(document).ready(function(){
  
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // funcion obtener datos api fakestore
  $.get('https://fakestoreapi.com/products',
  
  function(datos) 
  {   
      $('#tabla-ropas tbody').empty();
      $.each(datos, function(i, item) {
          
          var fila = '';
          fila += '<tr>' ;
          fila += '<td>' + item.title + '</td>';
          fila += '<td>' + item.description + '</td>';
          fila += '<td>' + item.price + '</td>';
          fila += '<td><img style="height: 50px" src="'+ item.image +'"></td>';

          fila += '</tr>';

          $('#tabla-ropas').append(fila);
      });
  });



});

document.addEventListener('DOMContentLoaded',function(event){



  $('#generarContrasena').click(function() {
    $('#passwordgenerate').val('Duoc@2023');
  });

  console.log("Código de JavaScript de Bootstrap ejecutándose...");

  function generarCodigoAleatorio() {
    var codigo = Math.floor(Math.random() * 10000) + 1;
    return codigo;
  }

  const copyEmailBtn = document.querySelector('#copy-email');

  copyEmailBtn.addEventListener('click', () => {
  const email = generarCodigoAleatorio();

  // Copiar el email al portapapeles
  navigator.clipboard.writeText(email)
    .then(() => {
      // Cambiar el texto del botón
      copyEmailBtn.innerText = 'Codigo de Descuento Copiado!';
    })
    .catch(err => {
      console.error('No se pudo copiar el Codigo de Descuento: ', err);
    });
  });




});



$(document).ready(function() {
  // Obtener la URL actual
  var currentUrl = window.location.href;

  // Iterar sobre los enlaces del navbar
  $(".nav-link").each(function() {
    // Obtener la URL del enlace
    var linkUrl = $(this).attr("href");
    
    // Comparar la URL actual con la URL del enlace
    if (currentUrl === linkUrl) {
      // Agregar la clase activa si coinciden las URLs
      $(this).addClass("active");
    }
  });
});

console.log('probandoo!!');