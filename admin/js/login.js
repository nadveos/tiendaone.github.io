
function validateLogin(){
    const but=document.getElementById('btn-env-log');
    const email = 'admin@dominio.com'
    const pass = "123456";
    const msg = document.getElementById('msg');
    const error = "Datos incorrectos. Intente Nuevamente";
    const inpEmail = document.getElementById('login');
    const inpPass = document.getElementById('pass');
    const sectionLogin= document.querySelector('.login');
    const adminButton = document.getElementById('adminButton');
    const div=document.createElement('div')
            div.innerHTML=`
            <i class="fa-solid fa-lock fa-fade fa-2xl  icon"></i>
            
            `
            adminButton.appendChild(div);         
        if(email==inpEmail.value && pass==inpPass.value){
            sectionLogin.classList.add('invisible');
            setTimeout(window.location.href='index.html',1000);
            
            
        }else{
            msg.innerHTML=error;
        } 
}