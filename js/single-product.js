let single_product_container = document.getElementById("singleproductbg")

function addToCartFunction() {

    alert("Product added to cart")

}

function buyNowFunction() {

    alert("Order Placed Successfully")

}

function card_container(product) {

    let div = document.createElement("div")

    single_product_container.appendChild(div)


    /* PRODUCT IMAGE */

    let image = document.createElement("img")

    div.appendChild(image)

    image.src = product.image


    /* PRODUCT TITLE */
    
    let titles = document.createElement("h1")

    div.appendChild(titles)

    titles.innerText = product.title


    /* PRODUCT DESCRIPTION */

    let description = document.createElement("p")

    div.appendChild(description)

    description.textContent = product.description


    /* PRODUCT PRICE */

    let price = document.createElement("h3")

    div.appendChild(price)

    price.textContent = `Price $${product.price}`

    
    /* ADD TO CART */

    let AddToCart = document.createElement("button")

    div.appendChild(AddToCart)

    AddToCart.textContent = "Add To Cart"

    AddToCart.addEventListener("click", addToCartFunction)


    /* BUY NOW */

    let BuyNow = document.createElement("button")

    div.appendChild(BuyNow)

    BuyNow.textContent = "Buy Now"

    BuyNow.addEventListener("click", buyNowFunction)

}

/* FETCH SINGLE PRODUCT */

let fetchData = async () => {

    try {

        let ID = localStorage.getItem("productId")

        let response = await fetch(`https://fakestoreapi.com/products/${ID}`)

        let json_response = await response.json()

        card_container(json_response)

    }

    catch (error) {

        console.log(error)

    }

}

fetchData()