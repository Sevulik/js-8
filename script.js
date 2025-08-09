// js 8.1

// let calculator = prompt('Enter any symbol to calculate: * / + -')
// let res = [121, 10]
// try {
//     if (calculator == '*'){
//         console.log(res.reduce((acc,cur) => acc * cur));
//     } else if(calculator == "/"){
//         console.log(res.reduce((acc,cur) => acc / cur));
//     } else if ( calculator == "+"){
//         console.log(res.reduce((acc,cur) => acc + cur));
//     } else if (calculator == "-"){
//         console.log(res.reduce((acc,cur) => acc - cur));
//     } else{
//         console.log('Operatsiya notogri berildi');
//     }
// } catch (error) {
//     console.error('Xato:', error.message);
// }

// js 8.2

// let name = prompt('Enter ur name: ')
// let email = prompt("Enter your email: ")
// let age = +prompt('Your age: ')

// let user = {
//     name,
//     email,
//     age
// }

// try {
//     if (user.name.length < 3 || age < 7 || !email.includes('@') || !email.includes('.')) {
//         throw new Error('Malumotlarda xatolik')
//     } 

//     console.log(user);

// } catch (error) {
//     console.log(error.message);
// }

// 

// js 8.3

// function tip(item) {
//     console.log(typeof item);
// }
// tip(2)

// js 8.4

const user = {
    name: 'Ali',
    age: 25,
    email: 'aligmail@.com',
    isStudent: true
}

try {
    if (typeof user.name !== 'string') {
        throw new Error("Name string bolishi kerak");
    }
    if (user.name.length < 3) {
        throw new Error("Kamida 3ta harf bolishi kerak");
    }

    if (typeof user.age !== 'number') {
        throw new Error("Age number bolishi kerak");
    }
    if (user.age < 7) {
        throw new Error("7 yoshdan katta bolishiz kerak");
    }

    if (typeof user.email !== 'string') {
        throw new Error("Email string bolishi kerak");
    }
    if (!user.email.includes('@') || !user.email.includes('.')) {
        throw new Error("@ va . belgilar bolishi kerak");
    }    
    console.log("Barcha malumotlar tori");

} catch (error) {
    console.error('Hato:', error.message);
}
