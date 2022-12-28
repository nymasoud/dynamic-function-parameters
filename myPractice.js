// my 1st practice - Pal-indrome - array

function isPal(arr){
    for(let left=0; left < arr.length/2; left++){
        let right = arr.length-1-left;
            if(arr[left] != arr[right]){
                return " is NOT Pal-indrome";
            }
    return " is Pal-indrome";
    }
}
let result1 = isPal([1,1,2,2,3,2,2,1,1]);
let result2 = isPal([2,3,5,6,7,8,9,1]);

console.log(result1);
console.log(result2);



// my 1st practice - Pal-indrome - string

function isPal(str){
    for(let left=0; left < str.length/2; left++){
        let right = str.length-1-left;
            if(str[left] != str[right]){
                return " is NOT Pal-indrome";
            }
    }
    return " it is Pal-indrome";
}

let result3 = isPal("MohammadammadoM");
console.log(result3);

let result4 = isPal("Masoud");
console.log(result4);


//my 2nd practice - array with all odds integers between 1 and 255(inclusive)

function oddsArray (){
    let newArr = []
    for(let i=1; i <=255; i++){
        if(i % 2 !== 0){
            newArr.push(i);
        }
    } console.log(newArr);
}
oddsArray();




























