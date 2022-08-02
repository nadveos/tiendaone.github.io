const data = document.getElementById('products');

//Comienza una funcion anonima autoejecutable
(()=>{
    
    fetch('https://my-json-server.typicode.com/nadveos/nadveos.github.io/items')//direccion del archivo json, puede ser local o alojada en webs o servidores
    .then((res)=>{
        
        return res.ok ? res.json(): Promise.reject(res);//aqui retornamos el primer then siempre y cuando la respuesta sea status:ok, status:200 sino devolvemos la funcion rechazar desde la promesa
    })
    .then((json)=>{
        
        json.forEach(elem => {//recorremos los elementos del archivo json
            const div = document.createElement('div');
            
            //usamos un template para inyectar contenido html + los elementos del json
            
            div.innerHTML=` 
                            <img src="${elem.img}"/>
                            <p>${elem.name}</p>
                            <p>$${elem.precio}</p>
                            <a href="./edit-product.html?id=${elem.id}">
                            <i title="Editar" class="fa-regular fa-pen-to-square tooltip" ></i></a>
                            <i title="Eliminar" class="fa-regular fa-trash-can tooltip" id="${elem.id}"></i>
                            
                           
                            `;
            data.appendChild(div);
            div.classList.add("items");
            const trash =div.querySelector('.fa-trash-can');
            
            trash.addEventListener('click', ()=>{
                
                const id = trash.id;
                eliminarProducto(id)
                .then((res)=>{
                    console.log(res)
                })
                .catch((err)=>{
                    const msg = err.statusText || " Ocurrio un error ";
                    if(err)
                    alert(`Error ${err.status}:${msg}`)
                })
            })

        });
        
    }).catch((err)=>{
        const msg = err.statusText || " Ocurrio un error ";
        if(err)
        alert(`Error ${err.status}:${msg}`)
    })
    
})();

const eliminarProducto = (id)=>{
    return fetch(`https://my-json-server.typicode.com/nadveos/nadveos.github.io/items/${id}`,{
        method:'DELETE'
    })
}


