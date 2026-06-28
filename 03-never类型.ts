export {}


// 该类型为空，不包含任何值
// 不可能赋给它任何值，否则都会报错。
// 如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于never类型。
// never类型的一个重要特点是，可以赋值给任意其他类型。



let x: never;

function fn(x: number | string) {
    if (typeof x === "number") {
        // .... 
    } else if (typeof x === "string") {
        // ....
    } else {
        // typeof x === "never"
    }
}

function err(): never {
    // 返回never的方式
    throw new Error("error");
    // while(true) {}
}


let a: number = err();
let b: string = err();
let c: boolean = err();
