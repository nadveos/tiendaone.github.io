const $form = document.querySelector('.contact-form');
const envTo= document.querySelector('.env-email-to');
envTo.classList.add('invisble');
$form.addEventListener('submit', enviarEmail);
    
    function enviarEmail(e){
        e.preventDefault();
        const formEmail = new FormData(this);
        console.log(formEmail.get('name'))
        // envTo.setAttribute('href',`mailto:guflo32@gmail.com?subject=${formEmail.get('name')}&body=${formEmail.get('msg')}`)
        // envTo.click()
    }
