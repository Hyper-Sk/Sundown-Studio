function headerSection() {
    const aside = document.querySelector('.aside')
    const open = document.querySelector(".header-mobile .mobile__open")
    const close = document.querySelector('.aside .close')


    open.addEventListener('click', () => {
        gsap.to(aside, {
            y:'0'
        })
    })
    close.addEventListener('click', () => {
        gsap.to(aside, {
            y:'-100%'
        })
    })



    
}

headerSection()