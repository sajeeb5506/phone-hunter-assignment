const allPhones =()=>{
  document.getElementById('phone-container').innerHTML="";
    const inputValue = document.getElementById('input-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`

fetch(url)
.then(res=>res.json())
.then(data=>showPhoneData(data.data))
    
    // console.log(url);
document.getElementById('input-box').value="";
document.getElementById('phone-detials').innerHTML="";
}
const showPhoneData=(phones)=>{

    for(const phone of phones){

        const parentDiv = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML=`
        
        <div  class="col w-100 ">
         
        <div class="card rounded-3">
          <img  src="${phone.image}" class="card-img-top w-50 mx-auto my-3" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone Model:${phone.phone_name} </h5>
            <h5 class="card-title">Phone Brand: ${phone.brand}</h5>
            
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
  document.getElementById('phone-detials').innerHTML="";
const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
 fetch(url)
 .then(res=>res.json())
 .then(data=>seeDitels(data.data))
// console.log(url);

}
  
const seeDitels =( info)=>{

const parentDiv= document.getElementById('phone-detials');
const div= document.createElement('div');
div.innerHTML=`
<div class="card" style="width: 18rem;">
<img src="${info.image}" class="card-img-top w-50 mx-auto m-3" alt="...">
<div class="card-body">
  <h3>Name:${info.name}</h3>
  <h3>Brand:${info.brand} </h3>
  <h3>Storaged:${info.mainFeatures.storage}</h3>
  <h3>DisplaySize:${info.mainFeatures.displaySize}</h3>
  <h3>ChipSet: ${info.mainFeatures.chipSet}</h3>
  
  <h3>ReleaseDate:${info.releaseDate}</h3>

  <h3>Sensors: <p></p></h3>
  
  
  <p class="card-text">WLAN:${info.others.WLAN}</p>
  <p class="card-text"> Bluetooth:${info.others.Bluetooth}</p>
  <p class="card-text"> GPS:${info.others.GPS}</p>
  <p class="card-text">USB: ${info.others.USB}</p>
  <p class="card-text">READIO: ${info.others.Radio}</p>
 
</div>
</div>
`;
parentDiv.appendChild(div);
  // console.log(info.mainFeatures.memory);
  console.log(info);
}