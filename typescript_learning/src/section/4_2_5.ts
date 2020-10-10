export default function() {
    type TreeNode = {
        value: string;
    }

    type LeafNode = TreeNode & {
        isLeaf: true;
    }

    type InnerNode = TreeNode & {
        children: [TreeNode] | [TreeNode, TreeNode];
    }

    let a: TreeNode = {value: 'a'};
    let b: LeafNode = {value: 'b', isLeaf: true};
    let c: InnerNode = {value: 'c', children: [a, b]};

    let a1 = mapNode(a, _ => _.toUpperCase());
    let b1 = mapNode(b, _ => _.toUpperCase());
    let c1 = mapNode(c, _ => _.toUpperCase());
    let d1 = mapNode({value: 'd'}, _ => _.toUpperCase());
    /**
     * TreeNodeと関係のない引数は無効化できる！
     * 少なくともTreeNodeでないといけない
     */
    // let e1 = mapNode({e: 'e'}, _ => _.toUpperCase());

    function mapNode<T extends TreeNode> (node: T, f: (value: string) => string): T {
        return {
            ...node,
            value: f(node.value) // extends TreeNodeとしているので、安全にvalueが読み取れるし、返却にvalueが設定できる！
        }
    }


    console.log(a1);
    console.log(b1);
    console.log(c1);


    type Strength = {
        str: number
    }

    type Interigence = {
        int: number
    }

    /**
     * 少なくともStrengthとInterigenceのTypeでないといけない...
     * のようにもできる！
     * また、Tではなく名前をつけることでわかりやすくもできるかも？
     * Tに統一してくれた方が好きだけど
     * @param ability 能力
     */
    function areYouAHero<HeroAbility extends Strength & Interigence> (ability: HeroAbility) : boolean{
        return ability.str > 100 && ability.int > 100;
    }

    type MyPower = Strength & Interigence;

    const myPower: MyPower = {
        str: 221,
        int: 1
    }

    console.log(areYouAHero(myPower));


    /**
     * 同じ型の引数が複数必要なファンクション（unknownにすればなんでもいけるようになる）
     * extendsするunknownを配列とすることで、入力の型にバリエーションをつけられる
     * Tを配列としてしまうと、ある一つの型の配列という形になってしまう
     * @param f 
     * @param arg 
     */
    function forceTapleFunction<T extends unknown[], U> (f: (...args: T) => U, ...arg: T): U {
        return f(...arg);
    }

    function createProfile (name: string, age: number): string {
        return `My name is ${name}. ${age} years old.`;
    }

    console.log(forceTapleFunction(createProfile, 'Ken', 30));

    // 失敗作
    function forceTapleFunction2<T extends unknown, U> (f: (...args: T[]) => U, ...arg: T[]): U {
        return f(...arg);
    }

    function createProfile2 (name: string, age: string): string {
        return `My name is ${name}. ${age} years old.`;
    }
    // ↑のやつはこういう意味
    // forceTapleFunction2(createProfile, 'Ken', 30);
    console.log(forceTapleFunction2(createProfile2, 'Ken', '30'));

    // defaultのtypeを設定することも可能！
    type MyType<T = string> = {
        type: T
    }

    // defaultのまま使用する場合、省略可能！
    const name: MyType = {type: 'string'};
    const name2: MyType<number> = {type: 20};
    console.log(name);
}