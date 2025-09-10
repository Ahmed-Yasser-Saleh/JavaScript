'use strict';
const btn = document.querySelector('.modal');
const ovralay = document.querySelector('.overlay');
let onClick = function () {
    btn.classList.remove('hidden');
    ovralay.classList.remove('hidden');
}

let exit = function () {
    btn.classList.add('hidden');
    ovralay.classList.add('hidden');
}

const btns = document.querySelectorAll('.show-modal');
for (let i = 0; i < btns.length; i++)
    console.log(btns[i].addEventListener('click', onClick))

document.querySelector('.close-modal').addEventListener('click', exit);

ovralay.addEventListener('click', exit);


document.addEventListener('keydown',
    function (e) {
        if (e.key === 'Escape' && !btn.classList.contains('hidden'))
            exit();
    }
);
