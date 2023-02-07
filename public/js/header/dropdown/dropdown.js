const dropdown = (() =>{
    const dropdown = document.querySelectorAll('[data-dropdown]')
    const dropdownList = document.querySelector('[data-dropdown-list]')

    dropdown.forEach((ev) =>{
        ev.addEventListener('click', (e) =>{

            const parent = e.target.parentElement
            const list = parent.nextElementSibling
            list.classList.toggle('dropdown--active')
            const click = e.composedPath().includes(dropdownList)

        //    document.addEventListener('click', even =>{
        //     even.stopPropagation();
        //     if(even.target != ev&&dropdownList) {list.classList.remove('dropdown--active')
        // }
        // })
            
        })

    })

})()
