'use strict'

// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე//
for (let i = 5; i < 101; i++) {
    console.log(i);
}



// 2. რიცხვები 0-10-მდე
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let el of array1)
    if (el > 1 && el < 10) { console.log(el); }


// 3. თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ 
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let el2 of array2) {
    if (el2 == 5) { console.log("არის"); }
}



// 4.რიცხვების ჯამი
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item of array3) {
    sum += item;
}
console.log(sum);


// 5. საშუალო არითმეტიკული
let array4 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let item of array4) { sum1 += item; }
console.log(sum1);

let average = sum1 / array4.length;
console.log(average);



// 6. დაბეჭდე ყველა, გარდა 7-ისა
let array5 = [1, 2, 3, 7, 6, 9];
for (let j of array5)
    if (j == 7) { continue; }
{ console.log(j); }



// 7. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}

console.log(user.studentstatus);


// 8. დაბეჭდოს ტექსტი "hello user", თუ
let user2 = {
    name: "anna",
    age: 20,
    studentstatus: "active"
}
if (user2.age < 18 && user2.studentstatus == 'active') { console.log('hello user'); }
else if (user2.name === 'levani') { console.log('hello Levani'); }
else if (user2.studentstatus == 'active' || user2.age < 25) { console.log('hello Anna'); }
else { console.log('error'); }



//8. თანამედროვე ჩანაწერი
let user2 = {
    name: "anna",
    age: 20,
    studentstatus: "active"
}
let amocana =
    user2.age < 18 && user2.studentstatus == "active"
        ? "hello user"
        : user2.name === "levani"
            ? "hello Levani"
            : user2.studentstatus == "active" || user2.age < 25
                ? "hello Anna"
                : "error";

console.log(amocana);


// 9. ლუწი რიცხვების დაბეჭდვა

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let practice of array6)
    if (practice % 2 == 0) { console.log(practice); }





//10. გამოვიტანოთ ობიექტი, რომლის სტატუს პროპერტია true
let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
]
for (let item of users)
    if (item.status == true)
        console.log(item.username);



// 11. დაბეჭდოს 5-ის ჯერადი რიცხვები
let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let k of array7) {
    if (typeof k === "number" && k % 5 === 0) {
        console.log(k);
    }
}


// 12.ამოიწეროს მხოლოდ დადებითი რიცხვები
let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24],];
for (let x of array8) {
    for (let y of x) {
        if (y > 0) {
            console.log(y);
        }
    }
}