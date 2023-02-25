
let modal = document.querySelector('.modal');

function closeModal() {
    modal.style.display = 'none';
}

function openModal() {
    modal.style.display = 'flex';
}

function submitModal() {
    const form = document.querySelector('.modal__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let tel = document.querySelector('#tel').value;
        let message = document.querySelector('#message').value;

        console.log(tel);
        console.log(message);
    })

    let alert = document.createElement('div');
    alert.className = 'modal__success';
    alert.append('Спасибо, наш оператор свяжется с вами в ближайшее время!');
    form.append(alert)
    
    setTimeout(() => {
        closeModal();
        alert.remove();
        form.reset();
    }, 5000);
}

function subscribe() {
    const subscribe = document.querySelector('#subscribe');

    subscribe.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.querySelector('#mail').value;

        console.log(email);
    })
    setTimeout(() => {
        subscribe.reset();
    }, 3500); 
}


   