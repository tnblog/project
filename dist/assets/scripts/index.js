"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // ==============================================================
  // カルーセル
  // ==============================================================
  {
    // window.onload = 関数
    // load
    window.addEventListener('load', function () {
      //setInterval(() => {}, 1000 * 60 * 60 * 24 ); //1000=1秒 10秒 1分
      setInterval(function () {
        var target = currentIndex + 1; // let target = Math.floor(Math.random() * images.length);

        if (target === images.length) {
          target = 0;
        }

        document.querySelectorAll('.gallery__list--thumb > li')[target].click();
      }, 9000);
    }); //即時関数 以前はvar 現在はlet const
    // (function immediate() {
    //   console.log('即時関数です');
    // })();
    // for (let i = 0; i < 10; i++) {
    //   console.log(Math.floor(Math.random() * 7));
    // }

    var images = ['/assets/images/banner/banner01.jpg', '/assets/images/banner/banner02.jpg', '/assets/images/banner/banner03.jpg', '/assets/images/banner/banner04.jpg', '/assets/images/banner/banner02.jpg', '/assets/images/banner/banner01.jpg'];
    var currentIndex = 0;
    var mainImage = document.getElementById('gallery__main');
    var next = document.getElementById('gallery__next');
    var prev = document.getElementById('gallery__prev');
    mainImage.src = images[currentIndex];
    images.forEach(function (image, index) {
      var img = document.createElement('div');
      img.style.backgroundImage = 'url(' + image + ')';
      img.classList.add('gallery__bg--thumb'); // 生成したimgタグのsrc属性に画像パスを付与
      // img.src = image;
      // <li>要素を生成、

      var li = document.createElement('li');
      li.classList.add('gallery__item--thumb');

      if (index === currentIndex) {
        li.classList.add('current');
      }

      li.addEventListener('click', function () {
        mainImage.src = image;
        mainImage.classList.add('active');
        setTimeout(function () {
          mainImage.classList.remove('active');
        }, 400);
        var thumbnails = document.querySelectorAll('.gallery__list--thumb > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
      });
      li.appendChild(img);
      document.querySelector('.gallery__list--thumb').appendChild(li);
    });
    next.addEventListener('click', function () {
      var target = currentIndex + 1;

      if (target === images.length) {
        target = 0;
      }

      document.querySelectorAll('.gallery__list--thumb > li')[target].click();
    });
    prev.addEventListener('click', function () {
      var target = currentIndex - 1;

      if (target < 0) {
        target = images.length - 1;
      }

      document.querySelectorAll('.gallery__list--thumb > li')[target].click();
    });
  }
});