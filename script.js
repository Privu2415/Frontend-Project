

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

if(name === "" || email === "" || message === ""){
alert("Please fill all fields")
return
}

document.getElementById("successMsg").innerText =
"✅ Message sent successfully!"

this.reset()

})



let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function displayTasks(){

let list = document.getElementById("taskList")

list.innerHTML=""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

li.innerHTML = `${task} 
<button onclick="deleteTask(${index})">X</button>`

list.appendChild(li)

})

}

function addTask(){

let input = document.getElementById("taskInput")

if(input.value==="") return

tasks.push(input.value)

localStorage.setItem("tasks",JSON.stringify(tasks))

input.value=""

displayTasks()

}

function deleteTask(index){

tasks.splice(index,1)

localStorage.setItem("tasks",JSON.stringify(tasks))

displayTasks()

}

displayTasks()




let products = [

{name:"Laptop",price:700},
{name:"Phone",price:400},
{name:"Headphones",price:120},
{name:"Keyboard",price:60},
{name:"Mouse",price:40},
{name:"Tablet",price:350}

]

function displayProducts(data){

let container = document.getElementById("productContainer")

container.innerHTML=""

data.forEach(p=>{

let div = document.createElement("div")

div.className="product-card"

div.innerHTML=`

<h3>${p.name}</h3>
<p>₹${p.price}</p>

`

container.appendChild(div)

})

}

displayProducts(products)



document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase()

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
)

displayProducts(filtered)

})



document.getElementById("sort").addEventListener("change",function(){

let value = this.value

let sorted = [...products]

if(value==="low"){

sorted.sort((a,b)=>a.price-b.price)

}

if(value==="high"){

sorted.sort((a,b)=>b.price-a.price)

}

displayProducts(sorted)

})