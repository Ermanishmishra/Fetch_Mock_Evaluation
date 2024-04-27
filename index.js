let products = document.getElementById("products")

let displayData = document.getElementById("displayData")

let filterClothes = document.getElementById("cloth")

let select = document.getElementById("select")




filterClothes.addEventListener("change", filterData)

console.log(filterClothes.value);
function filterData(store){
    
    console.log(store[0].category);

    // console.log(filterClothes.value);

        if(filterClothes.value == store[0].category){
            // showProducts(store)
            // showProducts(data)
            // console.log(ele);
            console.log(true);
        }

    // })
    
    // console.log(filterClothes.value);

}


products.addEventListener("click", fetchProducts)


async function fetchProducts(){
     let res = await fetch("https://fakestoreapi.com/products")

     let data = await res.json()

    //  console.log(data[0]);

     showProducts(data)
     
    filterData(data)
    // console.log(data[0].category);
    

}


function showProducts(data){
    displayData.innerHTML = ""
    data.forEach((element,i) => {
        displayData.innerHTML += `
        <div class= "user_class">
        <img src="${element.image}" alt="">
        <h3 class="Title">${element.title}</h3>
        <h4 class="price">price: $ ${element.price}</h4>
        </div>
        ` 
        // filterData(i)
        
    });

}