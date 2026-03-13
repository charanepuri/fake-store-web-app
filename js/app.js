let card_container_bg = document.getElementById("card_container-bg")

let search = document.getElementById("search")

let productsData = []

/* ---------------- CREATE PRODUCT CARDS ---------------- */

function cards_container(products){

    for(let product of products){

        /* CREATE LINK */

        let a = document.createElement("a")

        a.href = "./pages/single-product.html"

        /* SAVE PRODUCT ID */

        a.onclick = ()=>{
            localStorage.setItem("productId", product.id)
        }

        card_container_bg.appendChild(a)


        /* CARD CONTAINER */

        let div = document.createElement("div")

        a.appendChild(div)


        /* PRODUCT IMAGE */

        let image = document.createElement("img")

        image.src = product.image

        div.appendChild(image)


        /* PRODUCT TITLE */

        let titles = document.createElement("h1")

        titles.innerText = product.title

        div.appendChild(titles)


        /* PRODUCT DESCRIPTION */

        let description = document.createElement("p")

        description.textContent = product.description

        div.appendChild(description)


        /* PRODUCT PRICE */

        let price = document.createElement("h3")

        price.textContent = `Price $${product.price}`

        div.appendChild(price)

    }

}


/* ---------------- LOADING FUNCTION ---------------- */

function Loading(){

    card_container_bg.innerHTML = ""

    let load = document.createElement("h2")

    load.textContent = "Loading Products..."

    load.style.textAlign = "center"

    card_container_bg.appendChild(load)

}


/* ---------------- FETCH PRODUCTS ---------------- */

async function fetchData(){

    try{

        Loading()

        let response = await fetch("https://fakestoreapi.com/products")

        let json_response = await response.json()

        productsData = json_response

        card_container_bg.innerHTML = ""

        cards_container(productsData)

    }

    catch(error){

        console.log("Error fetching products:", error)

    }

}

fetchData()


/* ---------------- SEARCH FUNCTION ---------------- */

search.onkeyup = (event)=>{

    let value = event.target.value.toLowerCase()

    let filteredData = productsData.filter((product)=>{

        return product.title.toLowerCase().includes(value)

    })

    card_container_bg.innerHTML = ""

    if(filteredData.length === 0){

        let noData = document.createElement("h3")

        noData.textContent = "No Items Found"

        noData.style.textAlign = "center"

        card_container_bg.appendChild(noData)

    }

    else{

        cards_container(filteredData)

    }

}