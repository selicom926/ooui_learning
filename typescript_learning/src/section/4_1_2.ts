export default function() : void{

    function sumVariadic(): number {
        return Array
            .from(arguments)
            .reduce((total, n) => total + n, 0);
    }

    /**
     * 注意したいのが、Array<number>で型づけしてもnumber[]と同じということ
     * @param numbers 
     */
    function sumVariadicSafe(...numbers: Array<number>): number {
        return numbers.reduce((total, n) => total + n, 0);
    }

    function sumVariadicWithType(a: {x: number}, b: {x: number}, c: {x: number}): number {
        return Array
            .from(arguments)
            .reduce((total, n) => {
                console.log(total, n)
                return Math.max(
                    total.x, n.x
                )
            });
    }

    /**
     * typescriptではaugumentsが機能しない！（むしろいつ使うんだ？）
     * sumVariadicに引数を設定すれば行けると思うが、危険すぎる
     */
    // console.log(sumVariadic(1, 2, 3));

    /**
     * このようにすると使えるが、argumentsのtypeはIArguments
     * 中身が全部anyになってる！！
     * typscriptの意味なし
     */
    console.log(sumVariadicWithType({x: 1}, {x: 2}, {x: 3}));
    console.log(sumVariadicSafe(1, 2, 3));



}