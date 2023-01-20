const createRandomColor = () => {
    return Math.floor(Math.random() * 255)
}

document.body.addEventListener("click", (e) => {

    const balloon = document.createElement("div")
    balloon.classList.add("balloon")
    balloon.style.top = `${e.clientY -150}px`
    balloon.style.right = `${e.clientX}px`
    balloon.style.left = `${e.clientX - 150}px`

    balloon.style.backgroundColor= `rgb(${createRandomColor()}, ${createRandomColor()}, ${createRandomColor()})`

    const container = document.querySelector(".container")
    
    container.appendChild(balloon)

    console.log("e.clientX", e.clientX)
    console.log("e.clientY", e.clientY)

    const song = document.getElementById("audio");
    song.play();
})

// audio
