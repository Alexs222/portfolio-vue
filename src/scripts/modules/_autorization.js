const aktivization = () => {
    const buttonAutorization = document.getElementById('autorization'),
        flip = document.querySelector('.flip'),
        panelInfo = document.querySelector('.front'),
        panelOrder = document.querySelector('.back'),
        buttonIndex = document.querySelector('.order__form-button_main')

    if (buttonAutorization !== null) {

        buttonAutorization.addEventListener('click', (e) => {
            e.preventDefault();
            buttonAutorization.style.display = 'none';
            flip.classList.add('active')

        });

        buttonIndex.addEventListener('click', (e) => {
            e.preventDefault();
            buttonAutorization.style.display = 'block';
            flip.classList.remove('active')
        });
    };
    console.log("модуль загружен")
};

export default aktivization