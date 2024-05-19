from .models import Carrito

def registrar_carrito(request):

    mostrar_carrito = False
    cantidad_productos = 0
    
    # if request.user.is_authenticated:
    #     if request.user.perfil.tipo_usuario == 'Cliente':
    #         cantidad_productos = Carrito.objects.filter(cliente=request.user.perfil).count()
    #         mostrar_carrito = cantidad_productos > 0

    if request.user.is_authenticated:
        if hasattr(request.user, 'perfil') and request.user.perfil.tipo_usuario == 'Cliente':
            cantidad_productos = Carrito.objects.filter(cliente=request.user.perfil).count()
            mostrar_carrito = cantidad_productos > 0
        else:
            # Si el usuario no tiene perfil o no es un cliente, no mostramos el carrito
            mostrar_carrito = False
    else:
        # Si el usuario no está autenticado, tampoco mostramos el carrito
        mostrar_carrito = False




    return {
        'mostrar_carrito': mostrar_carrito,
        'cantidad_productos': cantidad_productos,
    }