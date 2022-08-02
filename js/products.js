const data = document.getElementById('products');
//Comienza una funcion anonima autoejecutable
(()=>{
    //https://my-json-server.typicode.com/nadveos/nadveos.github.io/db
    fetch('https://my-json-server.typicode.com/nadveos/nadveos.github.io/items')//direccion del archivo json, puede ser local o alojada en webs o servidores
    .then((res)=>{
        
        return res.ok ? res.json(): Promise.reject(res);//aqui retornamos el primer then siempre y cuando la respuesta sea status:ok, status:200 sino devolvemos la funcion rechazar desde la promesa
    })
    .then((json)=>{
        
        json.forEach(elem => {//recorremos los elementos del archivo json
            const div = document.createElement('div');
            //usamos un template para inyectar contenido html + los elementos del json
            div.innerHTML=`<img src="${elem.img}"/>
                            <p>${elem.name}</p>
                            <p>$${elem.precio}</p>
                            <a href="">Ver más</a>`;
            data.appendChild(div);
            div.classList.add("items");
            
        });
    })
    .catch((err)=>{
        const msg = err.statusText || " Ocurrio un error ";
        if(err)
        console.log(msg)
    })
    

})();
