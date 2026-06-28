export {}


let a: unknown = "hello";
// a.trim(); 报错

if (typeof a === "string") {
    a.trim(); // right
}
