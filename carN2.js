let shopping = document.getElementsByClassName('addcart')
let cartcontainer = document.getElementsByClassName('products')[0]
let volm = document.getElementsByClassName('num')
console.log(volm)
let rems = document.getElementsByClassName('remove')
    for (let i=0; i<shopping.length; i++){
        shopping[i].addEventListener('click',Shopping)
    }
    function Shopping(event){
        let btn = event.target

        let itemcontainer = document.createElement('div')
            itemcontainer.classList.add('products')
            //  let btngrandparent = btn.parentElement.parentElement
              let btnparent = btn.parentElement
              let itemsimages = btnparent.children[0].src
            let itemsName  = btnparent.children[1].innerText
            let itemsprice  = btnparent.children[2].innerText
            console.log(itemsprice)
        

            itemcontainer.innerHTML= `
            <img src="${itemsimages}"
            alt=".." width= "150px" class= "image-container">
        <h4 class="item-name">${itemsName}</h4>
        <h4 class="item-price" id = "items">${itemsprice}</h4>
        <input type="number" class="form-control w-50 num" name="num" id="num" value='1'>
        <h4 class= "total-price" id="tmny">${itemsprice}</h4>
        <button class="btn btn-primary remove" type="button">remove</button>
            `
   cartcontainer.append(itemcontainer)

   for(var i=0; i < volm.length;i++){
       volm[i].value = 0;
       volm[i].addEventListener('change',FullPrice)
       console.log(volm[i])

   }
   totamt()

    }

function FullPrice(event){
    let quanty = event.target;
    qaunty_parent = quanty.parentElement.parentElement 
    mnys_field = qaunty_parent.getElementsByClassName('item-price')[0]
      total_field = qaunty_parent.getElementsByClassName('total-price')[0]
     console.log(total_field)
      prices_files = mnys_field.innerText.replace('$','')
       total_field.innerText= "$"+ quanty.value * prices_files
      totamt()
    if (isNaN(quanty.value)||quanty.value<=0){
        quanty.value =1
    }
    
}
 function totamt(){
   let fmant = 0;
   let   grand_fmt = document.getElementsByClassName('grnads')[0]
   let all_grans_total = document.getElementsByClassName('total-price');

   for(let j=0; j< all_grans_total.length; j++){
    all_Pric = Number(all_grans_total[j].innerText.replace("$",''))
 fmant = fmant+ all_Pric
}
   grand_fmt.children[0].innerText = "$" +fmant

   grand_fmt.children[0].style.color = "green"
   console.log(grand_fmt.children[0].innerText)

 }