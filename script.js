const menu = document.getElementById('menu')
const nav = document.getElementById('container__navegacao')


menu.addEventListener("click", (evento) => {
    const menuImage = menu.src.split('/').pop();
    
    if (menuImage == 'menu.png') {
        menu.src = 'assests/menu-fechar.png'
        nav.classList.toggle('menu-nav-transition');
    } else {
        menu.src = 'assests/menu.png'
        nav.classList.remove('menu-nav-transition')
    }
})