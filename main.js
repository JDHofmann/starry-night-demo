let bkgd = document.querySelector(".background");
let quantity = 500;
let blues = 20

const createStars = (quantity) => {
    
    for(let i = 0; i < quantity; i++ ){
        let top = (Math.random() * 100).toPrecision(4);
        let left = (Math.random() * 100).toPrecision(4);
        let size = (Math.random() * 3).toPrecision(3);
        let star = document.createElement("span");
        star.classList.add("star")
        star.classList.add(`${i}`)
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        star.style.height = `${size}px`
        star.style.width = `${size}px`

        if( i % 3 === 0 ){
            star.classList.add("blue")
        } else if ( (i-1)%3 === 0){
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


createStars(quantity);