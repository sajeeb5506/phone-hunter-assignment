const allPhones =()=>{
    const inputValue = document.getElementById('input-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`

fetch(url)
.then(res=>res.json())
.then(data=>showPhoneData(data.data))
    
    // console.log(url);

}
const showPhoneData=(phones)=>{

    for(const phone of phones){

        const parentDiv = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML=`
        
        <div  class="col">
         
        <div class="card rounded-3">
          <img  src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone Model:${phone.phone_name} </h5>
            <h5 class="card-title">Phone Brand: ${phone.brand}</h5>
            <p class="card-text"> Discription: ${phone.slug}</p>
            <button onclick="phoneDitels('${phone.slug}')"class="btn btn-primary">Diteals</button>
          </div>
        </div>

      </div>
                             
        `
        parentDiv.appendChild(div);

        // console.log(phone);
    }
    
}
const phoneDitels =(id)=>{
const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
 fetch(url)
 .then(res=>res.json())
 .then(data=>seeDitels(data.data))
// console.log(url);

}
  
const seeDitels =( info)=>{


  // console.log(info.mainFeatures.memory);
}