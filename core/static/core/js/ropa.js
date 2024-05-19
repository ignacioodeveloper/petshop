

  $(document).ready(function(){
    // función obtener datos api fakestore
    $.get('https://fakestoreapi.com/products', function(datos) {
      $('#product-grid').empty(); // Limpiar el contenedor
  
      $.each(datos, function(i, item) {
        var producto = '';
        producto += '<a href="#" class="group">';
        producto += '<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">';
        producto += '<img src="' + item.image + '" alt="' + item.title + '" class="h-full w-full object-cover object-center group-hover:opacity-75">';
        producto += '</div>';
        producto += '<h3 class="mt-4 text-sm text-gray-700 font-bold">' + item.title + '</h3>';
        producto += ' <p class="mt-1 text-sm text-gray-500">'+item.description+'</p>';

        producto += '<p class="mt-1 text-lg font-medium text-gray-900">$' + item.price + '</p>';
        producto += '</a>';
  
        $('#product-grid').append(producto);
      });
    });
  });
  