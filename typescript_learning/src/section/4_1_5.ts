export default function() {

    /**
     * function*でGenelatorが定義できるなんて初めて知った！
     * 便利そうで仕様用途が思いつかない・・・
     * なんかに活用できないかなあ
     * 一意のフィールドを作成するのにとか？
     * とにかく、これの返却値Genelatorに型づけできる
     */
    function* createFibonacciGenerator(): Generator<number> {
        let x = 0;
        let y = 0;

        while (true) {
            yield x;
            [x, y] = [y, x + y];
        }
    }

    const generator = createFibonacciGenerator();

    /**
     * yieldで実行が止まる
     * 次回実行でyieldまで動く・・・をnextは繰り返す
     * { value: 1, done: false }
     * { value: undefined, done: true }
     * みたいな感じで帰ってくる
     */
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
}