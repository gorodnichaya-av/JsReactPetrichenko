function modal() {
    // MODAL
    const modalBtn = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    modalBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    }); 

    function openModal() {
        // modal.classList.toggle('show');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId); // if user opens modal himself don't open modal in few seconds 
    }

    function closeModal() {
        // modal.classList.toggle('show');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    //SHOW MODAL in few seconds
    const modalTimerId = setTimeout(openModal, 100000);

    // SCROLL to down of page
    function showModalByScroll() {
        if (Math.round(window.pageYOffset) + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;