const menu = document.getElementById('menu')
const nav = document.getElementById('container__navegacao')
const home = document.querySelector('.home')
const aboutMe = document.getElementById('aboutMe')

const listaNav = document.querySelectorAll('.lista-nav')



function verificar() {
    menu.style.opacity = '0';

    setTimeout(() => {
        const menuImage = menu.src.split('/').pop();

        if (menuImage === 'menu.png') {
            menu.src = './assests/menu-fechar.png';
            nav.classList.toggle('menu-nav-transition');
            home.style.opacity = '0'
            aboutMe.style.opacity = '0'
        } else {
            menu.src = './assests/menu.png';
            nav.classList.remove('menu-nav-transition')
            aboutMe.style.opacity = '1'
            home.style.opacity = '1'
        }
        menu.style.opacity = '1';
    }, 300);
}

listaNav.forEach((elementos) => {
    elementos.addEventListener("click", function (evento) {
        nav.classList.remove('menu-nav-transition')
        verificar()
    })
})


const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))

