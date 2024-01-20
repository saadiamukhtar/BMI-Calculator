let height= document.getElementById("height");
let weight= document.getElementById("weight");
document.getElementById("btn").addEventListener("click",()=>{
    console.log("helloo");
    let bmi= (weight.value/(height.value*height.value))*10000;
    document.getElementById("answer").value=bmi;
    if(bmi<=18.5){
        document.getElementById("demo").innerText="Your weight condition is underweight";
        document.getElementById("demo").style.color="red";
    } else if(bmi>18.5 && bmi<=24.9){
        document.getElementById("demo").innerText="Your weight condition is normal";
    } else if(bmi>25 && bmi<= 29.9){
        document.getElementById("demo").innerText="Your weight condition is overweight";
    } else{
        document.getElementById("demo").innerText="Your weight condition is obese";
    }

})