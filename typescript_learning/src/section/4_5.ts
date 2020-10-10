export default function() {
    // 1. 両方
    // 2. anyとなってしまうので型安全ではない。　レストパラメータ...args: Tを使う
    // 3. 
    type Reservation = {
        from: Date,
        to: Date,
        destination: string
    }

    type Reserve = {
        (from: Date, to: Date, destination: string): Reservation | undefined
        (from: Date, destination: string): Reservation | undefined
        (destination: string): Reservation | undefined
    }

    const reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string): Reservation | undefined => {
        if (typeof fromOrDestination === 'string') {
            return {
                from: new Date(),
                to: new Date(),
                destination: fromOrDestination
            }
        } else if (toOrDestination !== undefined && typeof toOrDestination === 'string') {
            return {
                from: fromOrDestination,
                to: new Date(),
                destination: toOrDestination
            }
        } else if (toOrDestination !== undefined && destination !== undefined) {
            return {
                from: fromOrDestination,
                to: toOrDestination,
                destination: destination
            }
        }
    }

    // 4.
    function callWithString<T extends unknown[], U>(f: (str: string, ...args: T) => U, argStr: string, ...arg: T): U {
        return f(argStr, ...arg);

    }

    function callWithString2<T extends [string, ...unknown[]], U>(f: (...args: T) => U, ...arg: T): U {
        return f(...arg);

    }

    // ↓これが回答かな？
    function callWithString3<T extends [unknown, string, ...unknown[]], U>(f: (...arg: T) => U, ...arg: T): U {
        return f(...arg);

    }

    function test4 (arg1: string, arg2: number) : string{
        return `${arg1}${arg2}`
    }

    function test4_2 (arg1: number, arg2: number) : string{
        return `${arg1}${arg2}`
    }

    function test4_3 (arg1: string, arg2: string, arg3: number) : string{
        return `${arg1}${arg2}${arg3}`
    }

    function test4_4 (arg1: number, arg2: string) : string{
        return `${arg1}${arg2}`
    }

    console.log(callWithString(test4, 'a', 10));
    console.log(callWithString2(test4, 'a', 10));
    // エラーとなる
    // console.log(callWithString3(test4, 'a', 10));

    // エラーとなる
    // console.log(callWithString(test4_2, 'a', 10));
    // console.log(callWithString2(test4_2, 'a', 10));
    // console.log(callWithString3(test4_2, 'a', 10));

    console.log(callWithString(test4_3, 'a', '10', 10));
    console.log(callWithString2(test4_3, 'a', '10', 10));
    console.log(callWithString3(test4_3, 'a', '10', 10));

    // エラーとなる
    // console.log(callWithString(test4_4, 'a', '10'));
    // console.log(callWithString2(test4_4, 'a', '10'));
    console.log(callWithString3(test4_4, 10, '10'));


    // 5.
    function is<T extends unknown>(arg1: T, arg2: T): boolean {
        return arg1 === arg2;
    }

    console.log(is('string', 'otherString'));
    console.log(is(true, false));
    console.log(is(42, 42));

    // エラー
    // console.log(is(10, 'foo'));
    
    // 冗長な処理・・・
    function isMultiple<T extends unknown>(...args: [T, T, ...T[]]): boolean {
        let is: boolean = true;
        for (let index = 1; index < args.length; index++) {
            if (args[index - 1] !== args[index]) {
                is = false;
                break;
            }
        }

        return is;
    }

    // 正解はこっち
    function isMultiple2<T extends unknown>(a: T, ...b: [T, ...T[]]): boolean {
        return b.every(item => item === a);
    }

    console.log(isMultiple(1, 1, 1));
    console.log(isMultiple(1, 2, 3));
    console.log(isMultiple2(1, 2, 3));
}