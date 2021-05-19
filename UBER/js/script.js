//
// const btn = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu');
//
// function showMenu(hamActiveClass, menuActiveClass) {
//     if (btn.classList.contains(hamActiveClass) && menu.classList.contains(menuActiveClass)) {
//       btn.classList.remove(hamActiveClass);
//       menu.classList.remove(menuActiveClass);
//     } else {
//       btn.classList.add(hamActiveClass);
//       menu.classList.add(menuActiveClass);
//   }
// }
//
// btn.addEventListener('click', () => {
//   showMenu('hamburger_active', 'menu_active');
// });

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
