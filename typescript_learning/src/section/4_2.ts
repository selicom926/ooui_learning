export default function() {
    type ToArray<T> = (arg: T) => T[];
    type ToArrayBindAfter = <T>(arg: T) => T[];

    const stringToArray: ToArray<string> = (arg: string) => {
        return [arg];
    }

    const numberToArray: ToArray<number> = (arg: number) => {
        return [arg];
    }

    /**
     * typeを後でつければ呼び出し時にTが決定する。
     * から結構便利ではあるが、ちょっと汎用的すぎて使いにくいか？
     * 宣言時に型決定してくれていたほうが正直読みやすい。
     * が、やっぱり配列なら中身はなんでもいい、みたいなものの汎用が欲しければありかも
     * 使いどころによる
     * @param arg 
     */
    let toArray: ToArrayBindAfter = arg => {
        return [arg];
    }

    console.log(stringToArray('aaa'));
    console.log(numberToArray(8));
    console.log(toArray(8));
}