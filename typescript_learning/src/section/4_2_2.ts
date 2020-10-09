import { StringDecoder } from "string_decoder";

export default function() {
    function map<T, U> (array: T[], f: (item: T) => U): U[] {
        let result: U[] = [];
        array.forEach(item => {
            result.push(f(item));
        })
        
        return result;
    }

    /**
     * ジェネリック最高！
     */
    console.log(map([1,2,3,4,5], (num: number) => {
        return {item: num}
    }))

    /**
     * ちゃんと呼び出す前に型を教えるべきか、否か・・・
     * ある方がわかりやすいけどね
     */
    console.log(map<number, {item: number}>([1,2,3,4,5], (num: number) => {
        return {item: num}
    }))
}
