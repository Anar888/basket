let addBtns=document.querySelectorAll(".btn-primary");
function createBasketStorage(){
    if(!localStorage.getItem("basket")){
        localStorage.setItem("basket",JSON.stringify([]));
    }
}
createBasketStorage();
function basketProductCount(){
    document.querySelector("sup").innerText=JSON.parse(localStorage.getItem("basket")).length;
}
basketProductCount();



addBtns.forEach(btn=> {
    btn.addEventListener("click",function(ev){
        ev.preventDefault();
        let Id=this.parentElement.parentElement.getAttribute("data-id"),
        Price=this.previousElementSibling.innerText,
        Title=this.parentElement.firstElementChild.innerText,
        Image=this.parentElement.previousElementSibling.src;

        createBasketStorage();

        let basket=getBasket(Id,Price,Title,Image);

        localStorage.setItem("basket",JSON.stringify(basket));

        basketProductCount();
   




    })
} )
function getBasket(Id,Price,Title,Image){
    let basket=JSON.parse(localStorage.getItem("basket"));
    let existProduct=basket.find(item=>item.id==Id);

        if (existProduct==undefined) {
            basket.push({
                id:Id,
                price:Price,
                title:Title,
                image:Image,
                count:1




            })
        }
        else{
            existProduct.count++;
        }
        return basket;
}


function addCart(){
    let cartitems=localStorage.getItem("basket")
    cartitems=JSON.parse(cartitems)
    console.log(cartitems)
    if (cartitems) {
       Object.values(cartitems).map(item=>{
        let table = document.getElementsByTagName("tbody")[0];
        let row = document.createElement("tr");

        let title1 = document.createElement("td");
        title1.innerText=item.title
        let image1=document.createElement("td")

        let img=document.createElement("img")
        img.style.height="50px"
        img.style.width="100px"
        img.src=item.image

        let price1=document.createElement("td");
        price1.innerText=item.price
        let count1=document.createElement("td")
        count1.innerText=item.count
        let btn=document.createElement("td")
        let button1=document.createElement("button")
        button1.className=".rembut"
        button1.innerText="X"
        table.appendChild(row);
        row.appendChild(title1);
        row.appendChild(image1)
        image1.appendChild(img)
        row.appendChild(price1)
        row.appendChild(count1)
        row.appendChild(btn)
        btn.appendChild(button1)


       })


    }




}
addCart();


let removeButton=document.querySelectorAll("button")[0];
removeButton.addEventListener("click",function(ev){
    ev.preventDefault();
    console.log("hello")
})


