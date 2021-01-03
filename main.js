let bkgd = document.querySelector(".background")



const createStars = () => {
    
    for(let i = 0; i < 200; i++ ){
        let top = (Math.random() * 100).toPrecision(4);
        let left = (Math.random() * 100).toPrecision(4);
        let size = (Math.random() * 3).toPrecision(3);
        let star = document.createElement("span")
        star.classList.add("star")
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        star.style.height = `${size}px`
        star.style.width = `${size}px`

        bkgd.append(star)
    }

    
}

createStars();