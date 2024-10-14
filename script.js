const menu = document.getElementById('menu')
const nav = document.getElementById('container__navegacao')


menu.addEventListener("click", (evento) => {
    menu.style.opacity = '0';

    setTimeout(() => {

        const menuImage = menu.src.split('/').pop();

        if (menuImage === 'menu.png') {
            menu.src = 'assests/menu-fechar.png';
            nav.classList.toggle('menu-nav-transition');
        } else {
            menu.src = 'assests/menu.png';
            nav.classList.remove('menu-nav-transition')
        }

        menu.style.opacity = '0.4';
        setTimeout(100)
        menu.style.opacity = '1';
    }, 250);
})