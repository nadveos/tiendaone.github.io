const formulario = document.querySelector('[data-form]');
const obtenerInfoCliente = ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const img = document.getElementById('img-url');
    const nameC = document.getElementById('name-prod');
    const price = document.getElementById('price-prod');
    
    detallesCliente(id).then(elem =>{
        img.value = elem.img;
        nameC.value = elem.name;
        price.value = elem.precio
    });
}


const detallesCliente = (id)=>{
    return fetch(`https://my-json-server.typicode.com/nadveos/nadveos.github.io/items/${id}`)
    .then((res)=>res.json())
    
}
obtenerInfoCliente()
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const img = document.getElementById('img-url').value;
    const nameP = document.getElementById('name-prod').value;
    const price = document.getElementById('price-prod').value;
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    
    actualizarProducto(id,img,nameP,price)
});
const actualizarProducto = (id,img,nameP,price)=>{
    return fetch(`https://my-json-server.typicode.com/nadveos/nadveos.github.io/items/${id}`,{
        method:"PUT",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({img:img,name:nameP,precio:price})
    })
    .then((res)=>{
        if(res.status === 200){
            window.location.href='index.html'
        }
    })
}