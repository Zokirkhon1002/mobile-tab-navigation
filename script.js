let mavzular = document.querySelectorAll(".content"),
    listItems = document.querySelectorAll("nav ul li");


listItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        hideAllContents();
        hideAllItems();
        item.classList.add('active');
        mavzular[index].classList.add("show");
    })
})

function hideAllContents(){
    mavzular.forEach((mavzu)=> mavzu.classList.remove('show'))
}
function hideAllItems(){
    listItems.forEach((item)=> item.classList.remove('active'))
}