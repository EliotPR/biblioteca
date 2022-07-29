let totalLibros = 0;
let opcionUsuario ;
let usuarioLogueado = -1
let nombreUsuarioLogueado ="";


const usuarios = [
    {
        nombre: "jorge",
        totalLibros : 100,
    },
    {
        nombre: "martin",
        totalLibros : 50,
    },
    {
        nombre: "karla",
        totalLibros : 200,
    }
]



const ingresarLibros = (cuentaUsuario, cantidadIngresar) =>  {
    if (cantidadIngresar >= 700){
        alert('usted ha devuelto todos los libros, gracias')
    }
    usuarios[cuentaUsuario].totalLibros += cantidadIngresar
    alert (`El remanente de libros en la biblioteca es de ${usuarios[cuentaUsuario].totalLibros}` )
}

const retirarLibros = (cuentaUsuario, cantidadRetirar) =>  {
    if (cantidadRetirar <= usuarios[cuentaUsuario].totalLibros) {
        usuarios[cuentaUsuario].totalLibros -= cantidadRetirar
    
    } else {
        alert('No quedan libros por retirar')
    }
    alert (`El remanente de libros en la biblioteca es de ${usuarios[cuentaUsuario].totalLibros}` )
}


do {
    if (usuarioLogueado === -1){
    
        nombreUsuarioLogueado = prompt('Ingrese nombre de cuenta')
        usuarioLogueado = usuarios.indexOf(usuarios.find((usuario)=>{
            return usuario.nombre === nombreUsuarioLogueado.toLowerCase()
    }))
        console.log(usuarioLogueado)
    
    } else {
    
    opcionUsuario = parseInt (prompt ('Ingrese una opción, 0: para finalizar. \n 1: para devolver libros. \n 2: para llevarse libros. \n 3: logout'))
    
    switch (opcionUsuario) {
        case 0:
            alert ('Gracias por utilizar los servicios de la biblioteca')
            break;
        case 1:            
            cantidadLibros = parseInt (prompt('Cuantos libros desea devolver?'))
            ingresarLibros(usuarioLogueado, cantidadLibros)     
            cantidadLibros = 0;
            break;
        case 2:
            cantidadLibros = parseInt (prompt('Cuantos libros desea retirar?'))
            retirarLibros(usuarioLogueado, cantidadLibros)     
            cantidadLibros = 0;
            break;
        case 3:
            usuarioLogueado = -1;
            alert("Gracias vuelva pronto!");
            break;
        default:
            alert ('Esta opción no es válida.')
            break;    
    }
}
} while (opcionUsuario != 0)


