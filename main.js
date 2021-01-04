let bkgd = document.querySelector(".background");
let quantity = 800;

const createStars = (quantity, maxSize, height, topOffest, width, leftOffset) => {
    
    for(let i = 0; i < quantity; i++ ){
        let top = ((Math.random() * height) + topOffest).toPrecision(4);
        let left = ((Math.random() * width) + leftOffset).toPrecision(4);
        let size = (Math.random() * maxSize).toPrecision(3);
        let star = document.createElement("span");
        star.classList.add("star")
        star.classList.add(`${i}`)
        star.style.left = `${left}%`
        star.style.top = `${top}%`
        star.style.height = `${size}px`
        star.style.width = `${size}px`

        if ( i % 3 === 0 ){
            star.classList.add("blue")
        } else if ( i % 5 === 0){
            star.classList.add("yellow")
        } else if ( ( i -1 ) & 5 === 0){
            star.classList.add("purple")
        } else if ( i % 7 === 0){
            star.classList.add("red")
        } 

        bkgd.append(star)
    }
}

const stopBlink = (stars) => {
    for(let i = 0; i < stars.length; i++){
        stars[i].classList.remove("blink")
    }
}

const blinkingStars = () => {
    let index = Math.ceil(Math.random() * 100)
    let stars = document.getElementsByClassName(`${index.toString()}`)
    for(let i = 0; i < stars.length; i++){
        stars[i].classList.add("blink")
    }
    setTimeout(function(){stopBlink(stars)}, 1200);
}

createStars(700, 2.75, 100, 0, 100, 0);
createStars(100, 2.5, 40, 17, 40, 17);
createStars(100, 2, 30, 37, 20, 21);
createStars(100, 2, 30, 0, 30, 61);
createStars(100, 2, 20, 15, 60, 7);
createStars(100, 3, 25, 0, 40, 0);
createStars(100, 3, 50, 5, 35, 70);
createStars(100, 2.5, 20, 0, 60, 20);
const blink = setInterval(blinkingStars, 6000)
setTimeout( function(){setInterval(blinkingStars, 6000)}, 1500);
setTimeout( function(){setInterval(blinkingStars, 6000)}, 3000);
setTimeout( function(){setInterval(blinkingStars, 6000)}, 4500);
