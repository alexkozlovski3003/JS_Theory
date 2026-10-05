// ==========================================
// 1. Function Declaration (Объявление функции)
// ==========================================
function add(a, b) { 
    return a + b; 
} 

function greet(str) { 
    return `Hello, ${str}`; 
} 

// ИСПРАВЛЕНО: убран лишний стрелочный синтаксис внутри и избыточный тернарный оператор
function isEven(num) { 
    return num % 2 === 0; 
}

console.log("--- Блок 1 ---");
console.log(add(5, 3));       // 8
console.log(greet("Alice"));  // Hello, Alice
console.log(isEven(4));       // true


// ==========================================
// 2. Function Expression (Функциональное выражение)
// ==========================================
const subtract = function (a, b) { 
    return a - b; 
}; 

const calculateArea = function (length, width) { 
    return length * width; 
}; 

// ИСПРАВЛЕНО: добавлены круглые скобки () для вызова метода .toUpperCase()
const toUpperCase = function (str) { 
    return str.toUpperCase(); 
}; 

console.log("\n--- Блок 2 ---");
console.log(subtract(10, 4));        // 6
console.log(calculateArea(5, 10));   // 50
console.log(toUpperCase("hello"));   // HELLO


// ==========================================
// 3. Arrow Functions (Стрелочные функции)
// ==========================================
// Код изначально был верным
const multiply = (a, b) => a * b; 
const getPositiveNumbers = (arr) => arr.filter((el) => el > 0); 
const getStringLength = (str) => str.length;

console.log("\n--- Блок 3 ---");
console.log(multiply(4, 3));                 // 12
console.log(getPositiveNumbers([-2, 5, 0, 9])); // [5, 9]
console.log(getStringLength("JS"));          // 2


// ==========================================
// 4. IIFE и Callback-функции
// ==========================================
console.log("\n--- Блок 4 (IIFE) ---");
(function() { 
    console.log("App is launched"); 
})(); 

(function() { 
    const currentYear = new Date().getFullYear(); 
    console.log(`Current year: ${currentYear}`); 
})(); 

console.log("\n--- Блок 4 (Callbacks) ---");
function calculate(a, b, operation) { 
    return operation(a, b); 
} 

// ИСПРАВЛЕНО: Избегаем конфликта имён с блоком 1 и 2. 
// Передаем в calculate функцию add из 1-го блока и subtract из 2-го блока.
console.log(calculate(4, 5, add));       // 9  (4 + 5)
console.log(calculate(4, 5, subtract));  // -1 (4 - 5)


// ==========================================
// 5. Scope (Области видимости)
// Пример, соответствующий вашему комментарию: "local and then global"
// ==========================================
console.log("\n--- Блок 5 ---");
let scopeScope = "global";

function testScope() {
    let scopeScope = "local";
    console.log(scopeScope); // Выведет: local
}

testScope();
console.log(scopeScope); // Выведет: global


// ==========================================
// 6. Hoisting (Всплытие переменных)
// Пример, соответствующий вашему комментарию: "undefined and 10"
// ==========================================
console.log("\n--- Блок 6 ---");
function testHoisting() {
    console.log(x); // Выведет: undefined (так как var х объявлена ниже, но всплыла без значения)
    var x = 10;
    console.log(x); // Выведет: 10
}

testHoisting();
