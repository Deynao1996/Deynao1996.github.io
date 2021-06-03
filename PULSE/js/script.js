  //Slider
  const slider = document.querySelector('.carousel__slider'),
        inner = document.querySelector('.carousel__inner'),
        wrapper = document.querySelector('.carousel__wrapper'),
        leftBtn = document.querySelector('.carousel__arrow_left'),
        rightBtn = document.querySelector('.carousel__arrow_right'),
        slides = document.querySelectorAll('.carousel__slide'),
        width = window.getComputedStyle(wrapper).width;

  let offer = 0;

  slider.style.display = 'flex';
  slider.style.justifyContent = 'space-between';
  slider.style.alignItems = 'center';

  inner.style.display = 'flex';
  inner.style.alignItems = 'center';
  inner.style.transition = '0.5s all';

  wrapper.style.overflow = 'hidden';

  rightBtn.addEventListener('click', () => {
    if (offer == (slides.length - 1) * +width.replace(/\D/g, "")) {
      offer = 0;
    } else {
      offer += +width.replace(/\D/g, "");
    }
    inner.style.transform = `translateX(-${offer}px)`;
  });

  leftBtn.addEventListener('click', () => {
    if (offer == 0) {
      offer = (slides.length - 1) * +width.replace(/\D/g, "");
    } else {
      offer -= +width.replace(/\D/g, "");
    }
    inner.style.transform = `translateX(-${offer}px)`;
  });

  function shangeSlides() {
    if (offer == (slides.length - 1) * +width.replace(/\D/g, "")) {
      offer = 0;
    } else {
      offer += +width.replace(/\D/g, "");
    }
    inner.style.transform = `translateX(-${offer}px)`;
  }

  // const timeInterval = setInterval(shangeSlides, 5000);

  //Tabs

  const tabParent = document.querySelector('.catalog__tabs'),
        tabs = document.querySelectorAll('.catalog__tab'),
        tabContents = document.querySelectorAll('.catalog__descr');

        function hideTabContent(tabActiveClass, contentActiveClass, fadeClass) {
          tabContents.forEach((item, i) => {
            item.classList.remove(contentActiveClass, fadeClass);
          });

          tabs.forEach((item, i) => {
            item.classList.remove(tabActiveClass, fadeClass);
          });
        }

        function showTabContent(tabActiveClass, contentActiveClass, fadeClass, i=0) {
          tabs[i].classList.add(tabActiveClass);
          tabContents[i].classList.add(contentActiveClass, fadeClass);
        }

        tabParent.addEventListener('click', (e) => {
          const target = e.target;
          if (target && target.classList.contains('catalog__tab')) {
             hideTabContent('catalog__tab_active', 'catalog__descr_active', 'fadeClass');
             tabs.forEach((item, i) => {
               if (target == item) {
                 showTabContent('catalog__tab_active', 'catalog__descr_active', 'fade', i);
               }
             });
          }
        });

// Hide/Show

  const detailsBtn = document.querySelectorAll('.button_hide'),
        backBtn = document.querySelectorAll('.button_show'),
        wrapperTrans = document.querySelectorAll('.catalog__item-wrapper');

        detailsBtn.forEach((item, i) => {
          item.addEventListener('click', () => {
            wrapperTrans.forEach((item, k) => {
              wrapperTransform(i, 320);
            });
          });
        });


        backBtn.forEach((item, i) => {
          item.addEventListener('click', () => {
            wrapperTransform(i, 0);
          });
        });

        function wrapperTransform(i, pos) {
          wrapperTrans.forEach((item, k) => {
            if (i == k) {
              item.style.transform = `translateX(-${pos}px)`;
            }
          });
        }

// Modal
  const consultTrigger = document.querySelector('.button_main'),
        orderTrigger = document.querySelectorAll('.button_tab'),
        submitTrigger = document.querySelectorAll('[data-done]'),
        consultModal = document.querySelector('.modal__consultation'),
        thanksModal = document.querySelector('.modal__thanks'),
        orderModal = document.querySelector('.modal__order'),
        errorModal = document.querySelector('.modal__error'),
        modals = document.querySelectorAll('.modal'),
        overlayBg = document.querySelector('.overlay'),
        orderTitles = document.querySelectorAll('.catalog__content h3'),
        modalTitle = document.querySelector('.modal__order span'),
        scroll = calcScroll();

        function showMoldal(modal) {
          overlayBg.style.display = 'block';
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = `${scroll}px`;
        }

        function closeModal() {
          overlayBg.style.display = 'none';
          modals.forEach((item, i) => {
            item.style.display = 'none';
          });
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

        function changeContent(ordersContents, modalContent, i) {
          ordersContents.forEach((title, k) => {
            if (i == k) {
              modalContent.textContent = title.textContent;
            }
          });
        }

        function calcScroll() {
        let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
      }

        consultTrigger.addEventListener('click', () => {
          showMoldal(consultModal);
        });

        orderTrigger.forEach((item, i) => {
          item.addEventListener('click', () => {
            showMoldal(orderModal);
            changeContent(orderTitles, modalTitle, i);
          });
        });

        overlayBg.addEventListener('click', (e) => {
          if (e.target && e.target.classList.contains('overlay') || e.target.classList.contains('overlay__btn')) {
            closeModal();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            closeModal();
          }
        });

// PostData
const form = document.querySelectorAll('.feed-form');

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res;
};

  form.forEach((item, i) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(item);
      postData('server.php', formData)
      .then(data => {
        closeModal();
        showMoldal(thanksModal);
      }).catch(() => {
        showMoldal(errorModal);
      }).finally(() => {
        item.reset();
        const timer = setTimeout(closeModal, 3000);
      });
    });
  });

//Scroll
    const scrollArrow = document.querySelector('.scroll__arrow');

    function checkScroll(pos) {
      if (window.scrollY >= pos) {
        scrollArrow.style.opacity = '1';
        scrollArrow.style.transition = '1s all';
      } else {
        scrollArrow.style.opacity = '0';
        scrollArrow.style.transition = '1s all';
      }
    }

  window.addEventListener('scroll', (e) => {
    checkScroll(2600);
  });

  scrollArrow.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
