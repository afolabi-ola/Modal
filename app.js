let all_images = document.querySelectorAll(".images")
let modal = document.querySelector(".modal")
let modal_image = document.querySelector(".modal-img")
let exit = document.querySelector(".exit")



for (let i = 0; i < all_images.length; i++) {
    all_images[i].addEventListener("click", (event) => {
        event.stopPropagation()
        modal_image.src = all_images[i].src
        modal.style.display = "block"
    })
}
modal.addEventListener("click", (e) => {
    e.stopPropagation()
})
exit.addEventListener("click", () => {

    modal_image.src = " "
    modal.style.display = "none"
})

document.body.addEventListener("click", (e) => {
    e.stopPropagation()
    modal_image.src = " "
    modal.style.display = "none"
})



