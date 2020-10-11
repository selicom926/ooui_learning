export default function() {
    class A {
        name = 'A'
        age = 50;
    }

    class B {
        name = 'B'
        age = 50;
    }

    function myNameIs(clazz: A): string {
        return clazz.name;
    }

    // 構造が一緒ならエラーにならない！！
    // typescriptは名前ではなく構造で片付けしている
    console.log(myNameIs(new A()));
    console.log(myNameIs(new B()));

    class privateA {
        private name = 'A';
        age = 50;
    }

    class extendsPrivateA extends privateA {
    }

    class privateB {
        private name = 'B';
        age = 50;
    }

    function myAgeIs(clazz: privateA): number {
        return clazz.age;
    }

    // 構造が違うのでエラーとなる！
    // console.log(myNameIs(new privateA()));
    // console.log(myNameIs(new privateB()));
    // privateの場合は、その構造で持っているフィールドがそのクラス（またはサブクラス）のものであるかチェックするため、構造が一緒でもエラーとなる！
    // コメントをとるとエラー
    // console.log(myAgeIs(new A()));
    // console.log(myAgeIs(new B()));
    console.log(myAgeIs(new privateA()));
    console.log(myAgeIs(new extendsPrivateA()));
    // console.log(myAgeIs(new privateB()));

}