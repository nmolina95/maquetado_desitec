window.addEventListener('load', function() {
    let menu = document.querySelector('.menu-toggle');
    let navbar = document.querySelector('.navbar');


    /*====== Mobile menu ======*/
    menu.addEventListener('click', e => {
        navbar.classList.toggle('navbar')
        navbar.classList.toggle('navbar-on')
    })
    /*====== /Mobile menu ======*/

    
    let identifier = document.querySelectorAll('#identifier');
    let cards = document.querySelectorAll('#card');
    let select = document.querySelector('#filter-list');
    let options = document.querySelectorAll('#filter-option');

    /*====== Filter ======*/
    select.addEventListener('change', e => {

        let option_value ;

        options.forEach(e => {
            console.log(typeof(e))
            /* e.forEach(e=> { e.addEventListener('change', e => {
                console.log(e);
            }) }) */
        })

        /* console.log(option_value) */
            identifier.forEach(e => {
                console.log(e.value)
                if (parseInt(e.innerHTML) > 25) {
                    let evalue = e.innerHTML;
                    Object.values(cards).forEach(i => {
                        if (i.classList.contains(evalue.toString())) {
                            i.classList.add('noDisplay');
                        }
                    })
                }
            })
    })
    /*====== /Filter ======*/
})