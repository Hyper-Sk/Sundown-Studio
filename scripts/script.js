let listItems = document.querySelectorAll('.work__single')

// console.log(listItems)


listItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        gsap.to(item.querySelector('img'), {
            display: 'inline',
            opacity: 1,
            scale:1,
            duration:0.2,
        })
    })
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('img'), {
            display: 'none',
            scale:0.9,
            opacity:0,
        })
    })
})