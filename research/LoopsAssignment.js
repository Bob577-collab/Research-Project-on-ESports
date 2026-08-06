const males = ["Joe","John","Jonathan","Jake"];
const females = ["Suzie","Susan","Suki","Samantha"];


function arrayMean(arr){
    let sum = 0;
    let maxNumber = 0;
    for (let i = 0; i< arr.length;i++){
        sum+= arr[i]
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return sum/arr.length;
}

function maxNumber(arr){
    let maxNumber = 0;
    for (let i = 0; i< arr.length;i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }

    }
    return maxNumber;
}
console.log("The mean of the array is: " + arrayMean([1,2,3,4,5,6,7,8,9,10]));
console.log("The maximum number in the array is: " + maxNumber([1,2,3,4,5,6,7,8,9,10]));


function pairUp(arr,arr2){
    let pair = [];
    let paired = [];
    let int = 0;
    for(let i = 0; i < arr.length;i++){
        int = Math.floor(Math.random() * arr2.length)
        pair = arr[i] + " " + arr2[int]
        arr2.splice(int,1)
        paired.push(pair);
    }
    
    return paired;

}
console.log(pairUp(males,females))


function countElements(arr,element){
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            counter++;
        }
    }
    return counter;
}
let arrFood = [];
let arrChoices = ["banana","apple","peach","orange","chicken","beef"]
let arrInt = 0;
for (let i = 0; i <= 100;i++){ 
    arrInt = Math.floor(Math.random()*arrChoices.length);
    arrFood.push(arrChoices[arrInt]);
}
console.log(arrFood);
console.log(` There is ${countElements(arrFood,arrChoices[arrInt])} ${arrChoices[arrInt]}s`)

