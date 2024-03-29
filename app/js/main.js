window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  //* Show scroll top
  function scrollTop() {
    const scrollTopEl = document.querySelector('.scroll');
    if (this.scrollY >= 660) {
      scrollTopEl.classList.add('show-scroll');
    } else {
      scrollTopEl.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollTop);

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 150) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 150) {
    header.classList.add('scroll-header');
  }

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: document.querySelector('.hero__slider .swiper-button-next'),
        prevEl: document.querySelector('.hero__slider .swiper-button-prev'),
      },
    });
  })();

  (function showMore() {
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
      let currentItem = 4;

      const boxes = [...document.querySelectorAll('.categories__item')];

      const boxesRemove = boxes.slice(8);

      boxesRemove.forEach((el) => {
        el.style.display = 'none';
      });

      showMoreBtn.addEventListener('click', (e) => {
        for (let i = currentItem; i < currentItem + 4; i++) {
          boxesRemove[i].style.display = 'block';
        }
        currentItem += 4;

        if (currentItem >= boxesRemove.length) {
          showMoreBtn.style.display = 'none';
        }
      });
    }
  })();

  (function showMore2() {
    const showMoreBtn = document.querySelector('.blog__btn');
    if (showMoreBtn) {
      let currentItem = 3;

      const boxes = [
        ...document.querySelectorAll('.blog--section .blog__item'),
      ];

      const boxesRemove = boxes.slice(3);

      boxesRemove.forEach((el) => {
        el.style.display = 'none';
      });

      showMoreBtn.addEventListener('click', (e) => {
        for (let i = currentItem; i < currentItem + 4; i++) {
          boxesRemove[i].style.display = 'block';
        }
        currentItem += 3;

        if (currentItem >= boxesRemove.length) {
          showMoreBtn.style.display = 'none';
        }
      });
    }
  })();

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelectorAll('.range-slider__range');
    let minStep = document.querySelectorAll('.range-slider__min');
    let maxStep = document.querySelectorAll('.range-slider__max');
    if (handlesSlider) {
      handlesSlider.forEach((el) => {
        noUiSlider.create(el, {
          start: [5000, 150000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [0],
            max: [200000],
          },

          tooltips: [true, true],
          format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' Р',
          }),
        });

        el.noUiSlider.on('update', function (values, handle) {
          if (handle) {
            maxStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          } else {
            minStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          }
        });
      });
    }
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: document.querySelector(
          '.slider-thumbs__nav-control .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.slider-thumbs__nav-control .swiper-button-prev'
        ),
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.our-works__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.tags__wrap');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 5,
      });
    });
  })();

  // * ===== Slider
  (function sliderCertificates() {
    const sliderEl = document.querySelectorAll('.certificates__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 17,
        navigation: {
          nextEl: document.querySelector(
            '.certificates__slider .swiper-button-next'
          ),
          prevEl: document.querySelector(
            '.certificates__slider .swiper-button-prev'
          ),
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.news-product__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.reviews__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: document.querySelector('.reviews .swiper-button-next'),
          prevEl: document.querySelector('.reviews .swiper-button-prev'),
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderTags() {
    const sliderEl = document.querySelectorAll('.tags-slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        effect: 'slide',
        slidesPerView: 'auto',
        // loop: true,
        observer: true,
        observeParents: true,
        // slidesPerView: 4,
        spaceBetween: 10,
        // freeMode: true,
        // centeredSlides: true,
        navigation: {
          nextEl: document.querySelector('.tags .swiper-button-next'),
          prevEl: document.querySelector('.tags .swiper-button-prev'),
        },
      });
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.portfolio');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.download__btn', '.popup--download', '.popup__close');
    bindModal('.btn-call', '.popup--call', '.popup__close');
    bindModal('.btn-cooperation', '.popup--cooperation', '.popup__close');
    bindModal('.header__search', '.popup--search', '.popup__close');
    bindModal('.btn-subscribe', '.popup--subscribe', '.popup__close');
    bindModal('.btn-passport', '.popup--passport', '.popup__close');
    bindModal('.btn-development', '.popup--development', '.popup__close');
    bindModal('.btn-message', '.popup--message', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');
  someTabs(
    '.tabs',
    '.news-product__top-btn',
    '.news-product__content',
    'news-product__top-btn--active'
  );
});
