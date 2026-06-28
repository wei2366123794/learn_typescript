export {}

/**
 * 为了解决any类型“污染”其他变量的问题，TypeScript 3.0 引入了unknown类型
 * 可以视为严格版的any
 * 赋值给any和unknown以外类型的变量都会报错
 * 不能直接调用unknown类型变量的方法和属性。
 * unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错
 */

let x: unknown = "hello";
x = true;
x = 123;

let y: number;
// y = x; //报错 不能赋值

let v1: unknown = { foo: "hello" }; 
// v1.foo; // 报错

let v2: unknown = "hello";
// v2.trim(); //报错

let v3: unknown = (n: number) => n + 1;
// v3(); // 报错

let v4: unknown = 1;
v4 === 1;
// v4 += 1; //报错