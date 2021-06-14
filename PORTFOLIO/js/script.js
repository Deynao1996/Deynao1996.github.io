// menu

  const triggerBtn = document.querySelector('.header__ham'),
        closeBtn = document.querySelector('.menu__cross'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.header'),
        menuItems = document.querySelectorAll('.menu__link');
        // scroll = calcScroll();

        function checkClasses() {
          if (!menu.classList.contains('animate__fadeInLeft')) {
            menu.style.display = 'block';
            menu.classList.add('animate__fadeInLeft');
            menu.classList.remove('animate__fadeOutLeft');
          } else {
            menu.classList.remove('animate__fadeInLeft');
            menu.classList.add('animate__fadeOutLeft');
          }

          if (!overlay.classList.contains('animate__showOpacity')) {
            overlay.classList.add('animate__showOpacity');
            overlay.classList.remove('animate__hideOpacity');
          } else {
            overlay.classList.remove('animate__showOpacity');
            overlay.classList.add('animate__hideOpacity');
          }
        }

        // function calcScroll() {
        //   let div = document.createElement('div');
        //       div.style.width = '50px';
        //       div.style.height = '50px';
        //       div.style.overflowY = 'scroll';
        //       div.style.visibility = 'hidden';
        //
        //       document.body.appendChild(div);
        //       let scrollWidth = div.offsetWidth - div.clientWidth;
        //       div.remove();
        //       return scrollWidth;
        //   }

        function afterClick(overPos) {
            document.body.style.overflow = overPos;
            // document.body.style.marginRight = `${marginPos}px`;
          }

        triggerBtn.addEventListener('click', () => {
          checkClasses();
          afterClick('hidden');
        });

        closeBtn.addEventListener('click', () => {
          checkClasses();
          afterClick('');
        });

        menuItems.forEach((item, i) => {
          item.addEventListener('click', () => {
            checkClasses();
            afterClick('');
          });
        });



// pasteImg

    function pasteImg(selector, folder, posX) {
      const items = document.querySelectorAll(selector);
      items.forEach((item, i) => {
        item.style.position = 'relative';
        const elem = document.createElement('div');
              elem.innerHTML = `
                <img src="icons/${folder}/about_me_${i}.svg" alt="icon">
              `;
              elem.style.cssText = `
                position: absolute;
                z-index: 1;
                top: 15px;
                left: ${posX};
              `;
              item.append(elem);
      });

    }
    pasteImg('.about__item', 'about_me', '-40px');
    pasteImg('.benefit__item', 'experience', '10px');

// percent

  function changePercent(percentSelector, panelSelector) {
    const percents = document.querySelectorAll(percentSelector),
          innerPanel = document.querySelectorAll(panelSelector);

          innerPanel.forEach((item, i) => {
            item.style.width = percents[i].textContent;
          });
        }

  changePercent('.title_percent span', '.item__inner');

//PostData

  // const form = document.querySelector('.contact__form'),
  //       submitBtn = document.querySelector('.button_submit');
  //
  // const mess = {
  //   ok: 'Спасибо! Скоро я свяжусь с вами!',
  //   fail: 'Упс, что-то пошло не так',
  //   def: 'Отправить сообщение'
  // };
  //
  //
  // const postData = async (url, data) => {
  // const res = await fetch(url, {
  //   method: 'POST',
  //   body: data
  // });
  // return await res;
  // };
  //
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(form);
  //     postData('server.php', formData)
  //     .then(data => {
  //         showThanks(mess.ok, '300px');
  //     }).catch(() => {
  //         showThanks(mess.fail, '300px');
  //     }).finally(() => {
  //       form.reset();
  //       const time = setTimeout(comeBack, 3000);
  //     });
  //   });
  //
  //   function showThanks(content) {
  //     submitBtn.style.width = '300px';
  //     submitBtn.textContent = `${content}`;
  //   }
  //
  //   function comeBack() {
  //     submitBtn.style.width = '219px';
  //     submitBtn.textContent = mess.def;
  //   }
