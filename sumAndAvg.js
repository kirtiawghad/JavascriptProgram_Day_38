let sum = 0;
let avg = 0.0;
for (let index = 0; index < 5; index++) {
   
    random = Math.floor(Math.random()*5);
    console.log(random);

    sum = sum + random;

  
}
console.log("sum is :"+ sum);
avg = sum / 5;
console.log("avg is :" + avg);
