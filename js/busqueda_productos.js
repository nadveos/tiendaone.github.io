function filtroBuscar(input,selector){//la funcion necesita del input de busqueda y el selector padre de los productos, en este caso el div inyectado por js que deveine del json tiene una clase llamada items
    document.addEventListener('keyup', e=>{//aqui esperamos que el ususario digite con el teclado para empezar la busqueda
        if (e.target.matches(input)){//si los que digite el usuario conicide de alguna manera con los productos....ejecutamos un querySelectorAll y hacemos un recorrido dentro de todo el contenido , lo dejamos en minusculas y si coincide removemos la clase invisible....si no coincide agregamos la clase invisble(display:none) para filtrar todo el contenido en busqueda
            // console.log(e.target.value)
            if(e.key==='Escape')e.target.value='';
            document.querySelectorAll(selector).forEach((el)=>el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove('invisible'):el.classList.add('invisible'));
        }
    })
}
filtroBuscar(".search-btn", ".items")//aqui llamamos a la funcion y le damos los parametros requeridos....en este caso la clase del input (.search-btn) y el selector del div arriba mencionado (.items)