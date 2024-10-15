const menu = document.getElementById('menu')
const nav = document.getElementById('container__navegacao')
const home = document.querySelector('.home')
const aboutID = document.getElementById('aboutID')
const works = document.getElementById('worksID')




function verificar() {
    menu.style.opacity = '0';

    setTimeout(() => {
        const menuImage = menu.src.split('/').pop();

        if (menuImage === 'menu.png') {
            menu.src = './assests/menu-fechar.png';
            nav.classList.toggle('menu-nav-transition');
            home.style.opacity = '0'
            aboutID.style.opacity = '0'
            works.style.opacity = '0'
        } else {
            menu.src = './assests/menu.png';
            nav.classList.remove('menu-nav-transition')
            aboutID.style.opacity = '1'
            home.style.opacity = '1'
            works.style.opacity = '1'
        }
        menu.style.opacity = '1';
    }, 300);
}

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


const container_lista = document.querySelector(".container_listas")
const selevents = ['touchmove', 'click']

selevents.forEach(selevent => {
    container_lista.addEventListener(selevent, (e) => {
        nav.classList.remove('menu-nav-transition')
        verificar()
    })
})



