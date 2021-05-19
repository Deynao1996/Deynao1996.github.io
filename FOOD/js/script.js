'use strict';
//cd Dmytro Bludov\APPS\OpenServer\domains\test.com
// npx json-server --watch db.json
// npm install --save-dev webpack
      import tabs from './modules/tabs';
      import calc from './modules/calc';
      import forms from './modules/forms';
      import modal from './modules/modal';
      import slider from './modules/slider';
      import timer from './modules/timer';
      import cards from './modules/cards';
      import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 120000);

      tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
      calc();
      forms('form', modalTimerId);
      modal('[data-modal]', '.modal', modalTimerId);
      slider();
      timer('.timer', '2022-06-11');
      cards();

});
