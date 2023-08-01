document.querySelector('.header__burger').addEventListener('click', function(event) {
    event.currentTarget.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
})