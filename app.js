const counter = document.querySelector('#count');

let count = 0;
count = localStorage.getItem('counter', count);
counter.textContent = count;


const btns = document.querySelectorAll('.btn');

btns.forEach((items) => {
    items.addEventListener('click', (e) => {
        btnGet = e.target.classList;
        if(btnGet.contains('increase')){
                count++;
        }else if(btnGet.contains('decrease')){
                count--;
        }else if(btnGet.contains('reset')){
                count = 0;
        }
        localStorage.setItem('counter', count)
        counter.textContent = count;
    });
    
    
});
