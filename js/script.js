// скрипт для бургера-меню
const menu = document.getElementById("nav");
const blackWindow = document.getElementById("blackWindow");

function openMenu() {
    menu.style.marginLeft = "0%";
    blackWindow.style.display = "block";
}

function hideMenu() {
    menu.style.marginLeft = "-65%";
    blackWindow.style.display = "none";
}

// скрипт для кнопки "наверх"
const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// Маска ввода номера телефона c помощью JQuery
$(function () {
  $('[data-phone-pattern]').on('input blur focus', (e) => {
      var el = e.target,
          clearVal = $(el).data('phoneClear'),
          pattern = $(el).data('phonePattern'),
          matrix = pattern ? pattern : matrix_def,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = $(el).val().replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              $(el).val('');
              return;
          }
      }
      if (def.length >= val.length) val = def;
      $(el).val(matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      }));
  });
});

// Маска ввода почты с помощью JQuery
$(document).ready(function(){   
  $("#contactsForm").inputmask("email");
  $("#contactsForm1").inputmask("email");
});

// Скрипт для всплывающего окна
window.addEventListener("load", () => {
  setTimeout( () => {
    document.getElementById("popup-container").style.opacity = '1';
    document.getElementById("popup-container").style.zIndex = '30';
  }, 5000);
})

function closePopup() {
  document.getElementById("popup-container").style.opacity = '0';
  document.getElementById("popup-container").style.zIndex = '-30';
}

// свайпер
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  simulateTouch: false,
  slidesPerView: 2,
  slidesPerGroup: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});

// Выпадающее меню
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// Карта
ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [35.460670037370896,-97.5655515],
			zoom: 13
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()
		); 
	
		myPlacemark = new ymaps.Placemark([35.460670037370896,-97.5655515], {
			balloonContent: "<div class='ya_map'>We are here!</div>"
		}, {
			preset: "twirl#redDotIcon"
		});
		
		myMap.geoObjects.add(myPlacemark);
		myPlacemark.balloon.open();
		
	};

// карусель
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItemIndex = 0;

function showCurrentItem() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    item.style.zIndex = 0;
    item.style.transform = 'scale(1)';
    if (index === currentItemIndex) {
      item.classList.add('active');
      item.style.zIndex = 1;
      item.style.opacity = 1;
      item.style.transform = 'scale(1.1)';
    }
  });
}

function switchToNextItem() {
  currentItemIndex++;
  if (currentItemIndex >= carouselItems.length) {
    currentItemIndex = 0;
  }
  showCurrentItem();
}

setInterval(switchToNextItem, 2000);

showCurrentItem();

// Прелоадер
window.onload = function() {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  document.body.style.overflowY = 'auto';
};