// template_qlseasg
// service_7hm4tog
// dEJ1-829s7lAeNkfB
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function contact (event) {

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    event.preventDefault();

    loading.classList += " modal__overlay--visible";
    emailjs.sendForm(
            'service_7hm4tog',
            'template_qlseasg',
            event.target,
            'dEJ1-829s7lAeNkfB'
        ).then(() => {
            console.log("Email Sent");
            loading.classList.remove("modal__overlay--visible");
            success.classList += (" modal__overlay--visible");
        }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
            "The Email Service is temporarily unavailable. Please Contact me Directly: Kanayoemenike37@gmail.com"
        );
    })
}

function toggleModal() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
    if(isModalOpen) {
        isModalOpen = !isModalOpen;
        document.body.classList.remove("modal--open");
    } else {
        isModalOpen = !isModalOpen;
        document.body.classList += " modal--open";
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += "dark-theme";
    } else {
        document.body.classList.remove ('dark-theme');
    }
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    let x = event.clientX * scaleFactor;
    let y = event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length; ++i)
    {
        const isOdd = i % 2 !== 0;
        const oddArr = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * oddArr}px, ${y * oddArr}px )`;
    }
}