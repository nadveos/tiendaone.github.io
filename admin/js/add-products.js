var route = document.getElementById('img-url');
var prodName = document.getElementById('name-prod');
var prodPrice = document.getElementById('price-prod');

//Funcion asincrona para conectarnos al json
const connectData = async()=>{
    try{// https://my-json-server.typicode.com/nadveos/nadveos.github.io/db
        const res = await fetch('https://my-json-server.typicode.com/nadveos/nadveos.github.io/items')
        const data = await res.json();
        // console.log(data);
    } catch (error){console.log(error)};
    
};
//Funcion para declarar el tipo de conexion que vamos a demandar al json
const crearProducto =(id,img,name,precio)=>{
    return fetch('https://my-json-server.typicode.com/nadveos/nadveos.github.io/items', {
        method: 'POST',
        mode:"cors",
        headers:{
            'Content-Type':'application/json'

        },//usamos uuid.v4() para generar id´s dinamicamente sin nuestra intervencio
        body:JSON.stringify({id:uuid.v4(),img:route.value,name:prodName.value,precio:prodPrice.value})//Muy importate el cuerpo del contenido que vamos a iterar, un formato incorrecto terminara con items de con otro formato al insertear un nuevo producto en la base de datos...en esta caso products.json
    })
    
}

const form = document.querySelector('#form-add');
    
//Comieza el evnto que va tomar los calores de los inputs del form para crear un nuevo producto    
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const agregando = {id:uuid.v4(),img:route.value,name:prodName.value,precio:prodPrice.value}//coincidiendo con el cuerpo (body) de la requisitoria del json....definimos sus contenidos
    crearProducto(agregando).then((res)=>{//una vez que creamos el producto adicionamos un .then para no dejar en el aire la Promise que devuelve el fetch.Entonces así comprobamos que nos devuelva un status 201 o Created y redirigioms al usuario a una pagina determinada
        // console.log(res.status)
        if(res.status===201){
            window.location.href='index.html'//aqui redirijimos al usuario, siempre y cuando la respuesta del servidor sea === identica a 201 Created
        }
    }).catch((err)=>{
        const msg = err.statusText || " Ocurrio un error ";
        if(err)
        alert(`Error ${err.status}:${msg}`)
    });
        
});

    
    
    
       



    
    

