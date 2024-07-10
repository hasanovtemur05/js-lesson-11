// 1 - masala
// function fn(son) {
//     son = son.toString();
//     console.log(+son);
//     console.log(son.length, "xonali son");
// }
// fn(12345)



// 2 - masala
// function fn(...n) {
//    let result = n.toString("").split("").join("");
//    let count = 0
//    for(let i = 0; i < result.length; i++){
//     if (result[i] >= "0" && result[i] <= "9") {
//         count ++
      
//     }
    
//    }
//    console.log(count, "ta son bor");
// }
// fn("salom123")



// 3 - masala
// function fn(...n) {
//    let result = n.toString("").split("").join("");
//    let count = 0
//    for(let i = 0; i < result.length; i++){
//     if (result[i] === "a") {
//         count ++
//     }
//    }
//    console.log(count, "ta a harfi bor");
// }
// fn("a harfi nechtaligini hisoblash")



// 4 - masala
// let misol = "men dasturlash kursida uqiyman";
// let natija = maxWord(misol);
// function maxWord(str) {
//     let sozlar = str.split(' ');
//     let max_word = sozlar[0];
//     let min_word = sozlar[0];
//     for (let i = 1; i < sozlar.length; i++) {
//         if (sozlar[i].length > max_word.length) {
//             max_word = sozlar[i];
//         }
//         if (sozlar[i].length < min_word.length) {
//             min_word = sozlar[i];
//         }
//     }

//     return {
//         engUzun: max_word,
//         engKalta: min_word
//     };
// }

// console.log("Eng uzun so'z:", natija.engUzun); 
// console.log("Eng kalta so'z:", natija.engKalta); 



// 5 - masala
// let str = ["text", "world", "laptop"] 
// const object = () =>{
//     let obj = {}
//     for(let i = 0; i < str.length; i++){
//         obj[str[i]] = str[i].length
//     }
//     console.log(obj);
// }
// object()




// 6 - masala
// let son = 4
// function fn(n) {
//    for (let i = 1; i <= son; i++){
//     let result = 2 ** i
//     console.log(result);
//    }
// }
// fn()




// 7 - masala
// const arfmetik = () => {
//     let arr = [1,2,3,4,5]
//     let result = arr.reduce((a,b)=> a + b, 0)
//     result /= arr.length 
//     console.log(result);
// }
// arfmetik()
