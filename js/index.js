'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const siDiceQueSi = () => {
    alert('💞 sabia que dirias que si 💞');
    location.href = 'https://www.youtube.com/watch?v=2CgESv5CYUw';
  };

  const siDiceQueNo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight/1.1) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth/1.1)+ 'px';
  };
  const siDiceQueNoMovil = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight/1.1) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth/1.3)+ 'px';
  };

  const partner = prompt('🥰coloca tu nombre🥰');
  heroTitle.innerHTML += partner + ' ❤ ?';

  heroButtonSi.addEventListener('click', siDiceQueSi);
  heroButtonNo.addEventListener('mouseover', siDiceQueNo);
  heroButtonNo.addEventListener('click', siDiceQueNoMovil);
};

document.addEventListener('DOMContentLoaded', documentReady);