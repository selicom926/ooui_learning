export default function() {
    console.log(Symbol.iterator);


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