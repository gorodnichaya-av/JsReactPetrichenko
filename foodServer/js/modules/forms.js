function forms() {
    // FORMS
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Success',
        failure: 'Failure'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMesssage = document.createElement('img');
            statusMesssage.src = message.loading;
            statusMesssage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMesssage);

            const formData = new FormData(form);

            // 1 variant FormData to JSON
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });

            // 2 variant FormData to JSON (newer)
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMesssage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
            
        });
    }

    function showThanksModal(message) {
        const prevModalDilong = document.querySelector('.modal__dialog');

        prevModalDilong.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDilong.classList.add('show');
            prevModalDilong.classList.remove('hide');
            closeModal();
        }, 4000);
    }
}

module.exports = forms;