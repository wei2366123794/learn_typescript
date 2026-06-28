export{}

// 对于开发者没有指定类型、TypeScript 必须自己推断类型的那些变量，如果无法推断出类型，TypeScript 就会认为该变量的类型是any。

function add(x, y) {
    return x + y; 
}
add(1, [1, 2, 3]); // 这显然是很糟糕的情况