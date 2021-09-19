const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('#nav-ul')

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show')
})

const menuItems = document.querySelectorAll('.nav-ul a[href^="#"]')
    // console.log(menuItems)
menuItems.forEach(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        const element = e.target
        const id = element.getAttribute('href')
        const section = document.querySelector(id).offsetTop

        window.scroll({
            top: section,
            behavior: "smooth"
        })
    })
})