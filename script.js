document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);

  document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    document.querySelector('.background-img').style.transform = 'scale(' + (1 + scrollPosition * 0.001) + ')';
    document.querySelector('.centered-text').style.opacity = 1 - scrollPosition / 800;

    if (scrollPosition > 800) {
      document.querySelector('.centered-text').style.opacity = 0;
    }
  });

  var planets = document.querySelectorAll('.planet');

  planets.forEach(function (planet) {
    planet.addEventListener('click', function () {
      var planetName = planet.querySelector('.planet-info p').textContent;
      var planetImageSrc = planet.querySelector('img').src;
      var planetDescription = planet.getAttribute('data-description');
      var planetGallery = planet.getAttribute('data-gallery');

      displayModal(planetName, planetImageSrc, planetDescription, planetGallery);
    });
  });

  function displayModal(name, imageSrc, description, gallery) {
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';

    var planetImg = document.createElement('img');
    planetImg.src = imageSrc;
    planetImg.alt = name;

    var planetNameElement = document.createElement('p');
    planetNameElement.textContent = name;

    var planetDescriptionElement = document.createElement('p');
    planetDescriptionElement.textContent = description;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(planetImg);
    modalContent.appendChild(planetNameElement);
    modalContent.appendChild(planetDescriptionElement);

    if (gallery) {
      var planetGallery = document.createElement('img');
      planetGallery.src = gallery;
      planetGallery.alt = name + ' Gallery';
      modalContent.appendChild(planetGallery);
    }

    modalContainer.appendChild(modalContent);

    document.body.appendChild(modalContainer);

    closeBtn.addEventListener('click', function () {
      document.body.removeChild(modalContainer);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function (event) {
          // Обработка клика на пункте меню
          var targetPage = menuItem.getAttribute('href');

          // Задержка перед переходом, чтобы позволить подменю отобразиться
          setTimeout(function () {
              // Переход на другую страницу
              window.location.href = targetPage;
          }, 100);
      });
  });

  var submenuTriggers = document.querySelectorAll('.submenu-trigger');

  submenuTriggers.forEach(function (trigger) {
      trigger.addEventListener('mouseenter', function () {
          var submenu = trigger.querySelector('.submenu');
          toggleSubmenu(submenu, true);
      });

      trigger.addEventListener('mouseleave', function () {
          var submenu = trigger.querySelector('.submenu');
          toggleSubmenu(submenu, false);
      });
  });

  function toggleSubmenu(submenu, show) {
      submenu.style.display = show ? 'flex' : 'none';
  }
});

$(document).ready(function () {
  $('.submenu-trigger').click(function (event) {
      event.preventDefault();
      $('.submenu').toggle();
  });

  // Обработчик для элементов подменю
  $('.submenu-item').click(function (event) {
      // Закрываем подменю
      $('.submenu').hide();
      
      // Получаем ссылку из элемента подменю и переходим по ней
      var href = $(this).attr('href');
      window.location.href = href;
  });
});

