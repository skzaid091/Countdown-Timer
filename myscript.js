let End_Date = "12 July 2024 07:00 PM"

const clock = () => {
    let endDate = new Date(End_Date)
    let currDate = new Date()

    let diff = (endDate - currDate) / 1000

    let days = Math.floor((diff / 3600) / 24)

    let hours = Math.floor((diff / 3600) %  24)

    let minutes = Math.floor(diff / 60) % 60

    let seconds = Math.floor(diff % 60) 

    let inputs = document.querySelectorAll('input')

    inputs[0].value = days
    inputs[1].value = hours
    inputs[2].value = minutes
    inputs[3].value = seconds
}

clock()

setInterval(() =>{
    clock()
}, 1000)

const container_inp_val = document.getElementById('container-inp')
container_inp_val.value = End_Date

let container = document.querySelector('.update-container');
let heading = document.getElementById('heading-h1')

heading.addEventListener('click', () =>{
    if (container.style.display === "none"){
        container.style.display = "flex"
    }
    else{
        container.style.display = "none"
    }
})

const container_btn = document.getElementById('container-btn')
container_btn.addEventListener('click', () =>{
    End_Date = container_inp_val.value

    container.style.display = 'none'
})