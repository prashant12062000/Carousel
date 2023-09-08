const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
    }
)

const goNext = () => {
    counter++
    // alert()
    slideImage()
}

const goPrev = () => {
    counter--
    slideImage()
}

 const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
 }
   
