const slides = [
    {
        img: "images/image-tanya.jpg",
        cite: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: "Tanya Sinclair",
        job: "UX Engineer"
    },
    {
        img: "images/image-john.jpg",
        cite: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
]


const img = document.querySelector('#img') 
const cite = document.querySelector('#cite') 
const nameW = document.querySelector('#name') 
const job = document.querySelector('#job') 
const controls = document.querySelector('.controls') 

let index = 1
let stop = false
let abc = setInterval(renderSlide,20000)

function incrementIndex() {
    index = (index < slides.length -1 ? index + 1 : 0)
}

function renderSlide() {
    clearInterval(abc)
    incrementIndex()
    img.src = slides[index].img
    cite.textContent = slides[index].cite
    nameW.textContent = slides[index].name
    job.textContent = slides[index].job
    abc = setInterval(renderSlide,20000)
}

controls.addEventListener('click', renderSlide)

