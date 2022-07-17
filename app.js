const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSects = document.querySelector('.main-content');

function pageTransitions() {
    //Button click active class
    sectBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    });

    //Sections active class
    allSects.addEventListener('click', e => {
        const id = e.target.dataset.id;
        if(id) {
            // sectBtn.forEach( btn => {
            //     btn.classList.remove('active');
            // })
            // e.target.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

pageTransitions();