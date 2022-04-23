const wrapper = document.querySelector(".wrapper");
const Selectbtn = document.querySelector(".select-btn");
Options = wrapper.querySelector(".options");
Content =wrapper.querySelector("input");



let countries = ['Afghanistan', 'Aland-islands', 'Albania', 'Algeria', 'American-samoa','Andora',' Argentina',
                 'Aruba','Australia','Bolivia', 'Brazil', 'Cameroon', 'Canada', 'Chad', 
                 'Chile', 'China', 'Colombia', 'Congo', 'Croatia', 'Denmark', 'Eqypt', 'Finland',
                 'France', 'Gabon','Germany', 'Greece','Israel', 'Italy','Malawi','Mexico',
                 'Monaco','Morocco','Nepal','Niger','Nigeria' ];

function addCountry(){

    Options.innerHTML = "";
    
    countries.forEach(country=>{
        let li = `<li onclick= "update(this)" > ${country} </li>`

        Options.insertAdjacentHTML('beforeend',li);   

    });
   
}

addCountry();

function update(selectedLi){
    Content.value = "";
    addCountry();
    wrapper.classList.remove("active");
    Selectbtn.firstElementChild.innerText = selectedLi.innerText;
}



Content.addEventListener("keyup",()=>{
    let ContentVal = Content.value;
    let arr =[];

    arr= countries.filter(data=>{
        return data.toLowerCase().startsWith(ContentVal);   
    }).map(data=> `<li onclick= "update(this )">${data}</li>`
    ).join("");
    
    
    Options.innerHTML= arr ? arr:"<p>Oops! Country not found<P/>";
    
});



Selectbtn.addEventListener("click",()=>{
    wrapper.classList.toggle("active");
    


});