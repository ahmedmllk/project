// start category
let btn=document.getElementById("fleche")
let card=document.getElementsByClassName("card")
let image=document.getElementsByClassName("image")
let teext=document.getElementsByClassName("teext")
let pic=["mariana-medvedeva-inJKK5P-6sE-unsplash_2x-min-5f0336660eb0a","calum-lewis-6w5iBTXMxOM-unsplash_2x-min-5f0312010c035","toa-heftiba-KZwp2IIyXmA-unsplash_2x-min","rebeca-g-sendroiu-7rjcoFTbXJI-unsplash@2x-min-5f0332964d847","How-to-Make-Vanilla-Extract-and-More-Homemade-Extracts-kitchenconfidante.com-2006@2x-min-5f030b9256f4c","alexandra-gorn-LRmwwuBGEOU-unsplash@2x-min-5f03122ea3d73","bread-with-toppings-and-gray-and-green-olives-in-bowl-1437576@2x-min-5f0317888a1e6","Black-truffle-and-mushroom-risotto-3@2x-min-5f030c1b9ea4c","mgg-vitchakorn-zXNC_lBBVGE-unsplash@2x-min-5f03366b37d4a"]
let names=["Artisan Oils","Breakfast Favourites","Baking Needs","Couscous & Pasta","Extracts & Flours","Flours & Meals","French Traditional Sauces","French Truffles","Gourmet Cordiments"]
var i=0
btn.addEventListener("click",function(){
    if (i===6){
        i=-1
    }
    else{
        image[0].src="./image/specialties/"+pic[i+1]+".webp"
        teext[0].textContent= names[i+1]
        image[1].src="./image/specialties/"+pic[i+2]+".webp"
        teext[1].textContent= names[i+2]
        image[2].src="./image/specialties/"+pic[i+3]+".webp"
        teext[2].textContent= names[i+3]
        console.log(i)
        i=i+1
    }  
})
// end category
// start buying
let modal=document.getElementsByClassName("modal")
let button=document.getElementsByClassName("wind")
let closes=document.getElementsByClassName("close")
let bag=document.getElementsByClassName("bag")
let like_button=document.getElementsByClassName("icon")
let total=document.getElementsByClassName("total")
console.log(total)
console.log(total)
let total1=0
let prix=document.getElementsByClassName("prix")
let title=document.getElementsByClassName("title")
let par=document.getElementById("par")
let produit=document.getElementById("produit")
let picture=document.getElementById("produit")
let pictures=["./image/jhjfhf/9339337006081-5f6c97a0ec0ab.webp","./image/jhjfhf/Sushi-Nori-28g-Lowres-61bf1f29dd765.webp","./image/jhjfhf/wild-blueberry-510ml-61ab5c442e727.webp","./image/jhjfhf/image010-60b23863939b3.webp","./image/jhjfhf/CHOC001-61cbf0c7e0e8a.webp","./image/jhjfhf/CHOC001-61cbf0c7e0e8a.webp","./image/jhjfhf/Jasmine-Rice-1kg-624a4b2b4be1b.webp","./image/jhjfhf/9339337007804.webp"]
let titles=["Chef’s Choice Certified Organic Dark Chocolate Couverture Drops – 70% Cacao 300g","Kura Certified Organic Sushi Nori 28g (10 sheets)","Lovin’ Body Certified Organic Wild Blueberry 100% Pure Juice 510mL","Chef’s Choice Certified Organic Spinach 330g","Lovin’ Body Certified Organic Raw Cacao Drinking Hot Chocolate 300g","Chef’s Choice Certified Organic Sauerkraut with Ginger & Turmeric 350g","Chef's Choice Organic Jasmin Rice 1Kg","Chef's Choice Organic Coconut Water 1L"]
let pars=["Chef’s Choice Superfoods Raw Organic Dark Chocolate Drops is made up of 70% cacao and is a wonderfully smooth and intense bittersweet chocolate that can be used for baking as they are for melting or nibbling.","Kura Certified Organic Sushi Nori is of the highest quality you can buy; classifying as Grade A Gold. Its quality is shown in its dark colour, inhibiting a smooth and rich taste; truly reflecting the flavour of authentic Japanese Nori. Perfect for sushi, handrolls and simply eating as-is! Undeniably delicious!","Lovin’ Body Certified Organic Wild Blueberry 100% Pure Juice is jam-packed with the numerous antioxidants extracted from wild blueberries, not loaded with sugar! Enjoy this juice full strength or mix with other juices for enhanced sweetness. Makes an excellent addition to smoothies, ice cream and sauces. Not from concentrate, no preservatives, gently pasteurized, purely and simply made from fresh wild blueberries to preserve its natural goodness, beautifully rich taste and sweet aroma.","Ingredients: Organic Spinach (99%), Sea Salt. May contain traces of milk, egg, soy, gluten, and lupin. No artificial flavours,No artificial colours,No preservatives,100% natural,Ready to eat<br>Perfect for sauces, salads, or as a side dish.","Lovin’ Body Certified Organic Raw Cacao Drinking Hot Chocolate is one of the most pure and enjoyable chocolate experiences you will find. Smooth and delicious, this delicacy finishes with an amazing flavour sure to leave your tastebuds satisfied. Your body will also be grateful for the amazing health benefits of raw and organic cacao. Enjoy this full-flavoured drink on its own or with marshmallows.","Chef’s Choice Certified Organic Sauerkraut with ginger and turmeric is a perfect accompaniment for meat, vegetables and salads. Ingredients: Sauerkraut* (41%), Water, Sauerkraut Juice* (23%), Ginger Juice* (5%), Vinegar*, Sea Salt, Turmeric* (<1%). (*Organic ingredient),No artificial flavours,No artificial colours,No preservatives100% natural,Vegan friendly","Chef’s Choice Certified Organic Jasmine Rice is a fragrant, versatile, long grain rice with a nutty sweet flavour and soft texture. Perfect for rice dishes such as fried rice and pilafs or use as a side dish with soups, stews, casseroles and curries.","Chef’s Choice Certified Organic 100% Pure Coconut Water is made from the fresh juice of coconuts and is a healthy, refreshing and all natural drink."]
let prixs=["22.77 DT","11.25 DT","35.7DT","11.97 DT","20.97 DT","11.97 DT","19.5 DT","13.5 DT"]
let conv=document.getElementsByClassName("conv")
let prixs1=[7.59,3.75,11.90,3.99,6.99,3.99,6.50,4.50]
for (let k=0;k<8;k++){conv[k].textContent=String(prixs1[k]*3) +" DT"}
for (let i=0;i<8;i++){
    like_button[i].addEventListener("click",function(){
        if (like_button[i].style.color==="red"){
            like_button[i].style.color="black"
        }
        else{
            like_button[i].style.color="red"
        }
    })
    button[i].addEventListener("click",function(){
        modal[0].style.display="flex"
        titlea.textContent=titles[i]
        par.textContent=pars[i]
        prix[0].textContent=prixs[i]
        picture.src=pictures[i]
        
    })
    
}

    bag[0].addEventListener("click",function(){
        for (var i=0;i<prixs.length;i++){
            if (prix[0].textContent==prixs[i]){
                modal[0].style.display="none"
                total1+=prixs1[i]*3*Number(quant[0].value)
                total[0].textContent= parseFloat((total1).toFixed(2))+" DT"
                quant[0].value=1
            }
        }
        
    })
    


closes[0].addEventListener("click",function(){
    modal[0].style.display="none"
})
let plus_btn=document.getElementsByClassName("plus")
let minus_btn=document.getElementsByClassName("minus")
let quant=document.getElementsByClassName("quant")

plus_btn[0].addEventListener("click",function(){
    quant[0].value = Number(quant[0].value) + 1
})
minus_btn[0].addEventListener("click",function(){
    if (quant[0].value>1){quant[0].value = Number(quant[0].value) - 1}
})





    


