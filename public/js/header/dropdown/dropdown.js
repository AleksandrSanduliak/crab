const dropdown = (() =>{
    const dropdown = document.querySelectorAll('[data-dropdown]')
    const dropdownList = document.querySelector('[data-dropdown-list]')
    console.log(dropdown)
    console.log(dropdownList)
    dropdown.forEach((ev) =>{
        ev.addEventListener('click', (e) =>{
            const parent = e.target.parentElement
            const list = parent.nextElementSibling
            list.classList.toggle('dropdown--active')
           const click = e.composedPath().includes(dropdownList)
        })

    })
})()
