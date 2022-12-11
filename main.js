let a =100;
console.log(a)
const b = 200;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

let c = '문자'
console.log(a+c)

let arr = [1, 2, 3, 4]
console.log(arr)
arr.push(6)
console.log(arr)

let dic = {
    "key":"value"
}
console.log(dic)
dic.key2 = "value2";
console.log(dic)
dic["key3"] = "value3";
console.log(dic.key2)

function x(num){
    let i=0;
    for(i=0;i<10;i++){
        console.log(i)
    }
    console.log(i)

    return num+i;
}

let y = x(100)
console.log(y)

function pu(num3){
    alert(num3)
}
let puy = pu(100)
console.log(y) 

let str = "웹개발자-사관학교";
let str_arr = str.split("-");
console.log(str_arr)
let str_str = str_arr.join("*");
console.log(str_str)