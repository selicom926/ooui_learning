export default function() {
    console.log(Symbol.iterator);


    /**
     * genelatorを使わなくても、
     * GeneratorFunctionを返却するSymbol.iteratorが存在する場合、generatorとなる
     * どっちにしろyieldを使ったものってこと
     */
    let numbers = {
        *[Symbol.iterator]() {
            let n = 0;
            while (true) {
                yield ++n;
            }
        }
    }

    console.log(numbers)
}