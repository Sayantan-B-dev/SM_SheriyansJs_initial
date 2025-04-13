console.log("Theres a array with the name of 'words' and 'mixedArray',try stuff")

const words = [
    "apple", "banana", "chocolate", "developer", "elephant", "fantasy", "guitar", "horizon", "internet", "jungle",
    "keyboard", "laptop", "mountain", "nebula", "ocean", "pencil", "quantum", "robot", "satellite", "tornado",
    "universe", "volcano", "whisper", "xylophone", "yellow", "zeppelin", "astronaut", "blueprint", "comet", "dynamic"
];
const mixedArray = [
    42,                          // Number
    3.14,                        // Number (float)
    "Hello, world!",             // String
    true,                        // Boolean (true)
    false,                       // Boolean (false)
    null,                        // Null
    undefined,                   // Undefined
    Symbol("unique"),            // Symbol
    BigInt(9007199254740991n),   // BigInt
    { name: "Alice", age: 25 },  // Object
    [1, 2, 3, 4],                // Array (Object type)
    function greet() { return "Hi!"; }, // Function
    new Date(),                  // Date object
    new Set([1, 2, 3]),          // Set
    new Map([[1, "one"], [2, "two"]]), // Map
    NaN,                         // Not-a-Number
    /abc/,                       // Regular expression (RegExp)
    new Error("Something went wrong"), // Error object
    class Person { constructor(name) { this.name = name; } }, // Class (Function type)
    new WeakMap(),               // WeakMap
    new WeakSet(),               // WeakSet
    Infinity,                    // Infinity
    -Infinity,                   // -Infinity
    globalThis,                  // global object reference
    new ArrayBuffer(16),         // ArrayBuffer (binary data)
    new Uint8Array([1, 2, 3]),   // Typed Array
    new Promise((resolve) => resolve("Done")), // Promise
    async function asyncFunc() { return "Async"; }, // Async function
    (() => "Arrow function")()  // Arrow function (IIFE)
];


console.log("theres two objects, 'person' amd 'company' have fun in this console")

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
let company = {
    name: "TechCorp",
    location: {
        city: "San Francisco",
        country: "USA"
    },
    employees: [
        { name: "John", role: "Developer" },
        { name: "Sarah", role: "Designer" }
    ],
    getEmployeeCount: function() {
        return this.employees.length;
    }
};
