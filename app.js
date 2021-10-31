const toggleDots = document.querySelector('.dots');
const dropdwn = document.getElementsByClassName('dropdown')[0];

toggleDots.addEventListener('click', () => {
  dropdwn.style.visibility == 'visible'
    ? (dropdwn.style.visibility = 'hidden')
    : (dropdwn.style.visibility = 'visible');
});
