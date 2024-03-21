function getFirst(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}


let numbers: number[] = [1, 2, 3];
let firstNumber = getFirst(numbers);



let strings: string[] = ["foo", "bar", "baz"];
let firstString = getFirst(strings);


interface Box {
    value: T;
}


let numberBox: Box = { value: 42 };
let stringBox: Box = { value: "hello" };