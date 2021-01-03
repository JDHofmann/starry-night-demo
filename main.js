let bkgd = document.querySelector(".background");
let quantity = 800;

const createStars = (quantity) => {
    
    for(let i = 0; i < quantity; i++ ){
        let top = (Math.random() * 100).toPrecision(4);
        let left = (Math.random() * 100).toPrecision(4);
        let size = (Math.random() * 2.5).toPrecision(3);
        let star = document.createElement("span");
        star.classList.add("star")
        star.classList.add(`${i}`)
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        star.style.height = `${size}px`
        star.style.width = `${size}px`

        if ( i % 3 === 0 ){
            star.classList.add("blue")
        } else if ( (i-1) % 3 === 0){
            top = top * .7
            star.style.top = `${top}%`
        } else if ( i % 7 === 0){
            star.classList.add("red")
        } else if ( i % 5 === 0){
            star.classList.add("yellow")
        } else if ( i % 2 === 0){
            size = size * .7
            star.style.height = `${size}px`
            star.style.width = `${size}px`
        }

        bkgd.append(star)
    }
}

// variables: quantity, max-size, height, top-offest, width, left-offset

const createNebula = () => {
    for(let i = 0; i < 200; i++ ){
        let top = ((Math.random() * 40) + 17).toPrecision(4);
        let left = ((Math.random() * 43) + 21).toPrecision(4) ;
        let size = (Math.random() * 2).toPrecision(3);
        let star = document.createElement("span");
        star.classList.add("star")
        star.classList.add(`${i}`)
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        star.style.height = `${size}px`
        star.style.width = `${size}px`
        if ( i % 3 === 0 ){
            star.classList.add("blue")
        } else if ( (i-1) % 3 === 0){
            top = top * .7
            star.style.top = `${top}%`
        } else if ( i % 7 === 0){
            star.classList.add("red")
        } else if ( i % 5 === 0){
            star.classList.add("yellow")
        } 
    bkgd.append(star)
    }
}
createNebula()
createStars(quantity);