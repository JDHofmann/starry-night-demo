let bkgd = document.querySelector(".background")



const createStars = () => {
    
    for(let i = 0; i < 300; i++ ){
        let top = (Math.random() * 100).toPrecision(4);
        let left = (Math.random() * 100).toPrecision(4);
        let star = document.createElement("span")
        star.classList.add("star")
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        bkgd.append(star)
    }

    
}

createStars();