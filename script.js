const menu = document.getElementById('menu')
const header = document.getElementById("header")
const nav = document.getElementById('container__navegacao')
const nav_container = document.querySelector(".container-nav")
const container_lista = document.querySelector(".container_listas")
const home = document.querySelector('.home')
const aboutID = document.getElementById('aboutID')
const works = document.getElementById('worksID')
const footer = document.getElementById('footerID')
const projects = document.getElementById('projectsID')

const container_social = document.querySelector(".container_social")
const container_linha = document.querySelector(".container-linha")
container_linha.remove()

let menuImage

function verificar() {
    if(!(window.innerWidth < 1280)) {
        return
    }
    menu.style.opacity = '0';
    menuImage = menu.src.split('/').pop();
   
    if (menuImage === 'menu.png') {
        menu.src = './assests/menu-fechar.png';
        nav.classList.toggle('menu-nav-transition');
        home.style.opacity = '0'
        aboutID.style.opacity = '0'
        works.style.opacity = '0'
        footer.style.opacity = '0'
        projects.style.opacity = '0'
    } else {
        menu.src = './assests/menu.png';
        nav.classList.remove('menu-nav-transition')
        aboutID.style.opacity = '1'
        home.style.opacity = '1'
        works.style.opacity = '1'
        footer.style.opacity = '1'
        projects.style.opacity = '1'
    }
    menu.style.opacity = '1';
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



window.addEventListener('scroll', (e) => {
    menuImage = menu.src.split('/').pop();

    if(menuImage == 'menu-fechar.png') {
        menu.src = './assests/menu.png';
        nav.classList.remove('menu-nav-transition')
        aboutID.style.opacity = '1'
        home.style.opacity = '1'
        works.style.opacity = '1'
        menu.style.opacity = '1';
        footer.style.opacity = '1'
        projects.style.opacity = '1'
    }
})

container_lista.addEventListener('click', (e) => {
        nav.classList.remove('menu-nav-transition')
        verificar()
})

window.addEventListener("load", () => window_desktop())
window.addEventListener("resize", () => window_desktop())

function window_desktop() {
    if(window.innerWidth > 1280) {
        container_social.appendChild(container_linha)
        menu.remove()
        nav_container.remove()
        header.appendChild(nav_container)
    } else {
        header.appendChild(menu)
        container_lista.insertBefore(nav_container, container_social)
    }
}




