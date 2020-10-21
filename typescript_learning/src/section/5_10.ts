// 1. クラスは実装できる　継承できる
// 　　インターフェースは実装ではなく定義のみできる
//　　 継承し、実装を強制させることができる

// 2.
class TestPrivateClass {
    private constructor() {

    }
}

class TestProtectedClass {
    protected constructor() {

    }
}

// protectedの場合、newはできないがextends可能
// new TestPrivateClass();
// new TestProtectedClass();

// class TestExtendsPrivateClass extends TestPrivateClass {}
class TestExtendsProtectedClass extends TestProtectedClass {}

// 3.

type Shoe = {
    purpose: string
}
class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'walking'
}


/**
 * このオーバーロードtypeはどうやって使うの・・・！？
 */
type OverloadShoes = {
    create (type: 'boot'): Boot
    create (type: 'balletflat'): BalletFlat
}

const Shoe: OverloadShoes = {
    create(type: 'boot' | 'balletflat'): Shoe {
        switch(type) {
            case 'boot': return new Boot()
            case 'balletflat': return new BalletFlat()
        }   
    }
}

// 型が同じ（構造が）なので、ふつうにうけとれちゃう
// typescriptは構造が同じであればおなじ型とみなすため
// じゃあどうやってそれぞれをコンパイル時に判定するのか・・・？
// 何だったらclass名までみにいってくれるんだっけ・・・？
// private変数かprotected変数
// でもtypeやinterfaceにその修飾はできないし・・・
// ウーン
// でもこれが正解だった・・・
// なっとくいかない
let boot: BalletFlat = Shoe.create('boot');

// 4.
// type Method = 'POST' | 'GET' | 'PUT' | 'DELETE';
// type ClassConstructor<T> = new (...arg: any[]) => T;

// class CreateHttp {

//     private url: string | null = null;
//     private method: Method | null = null;

//     constructor() {}
    
//     private mixedSender(obj: CreateHttp) {
//         interface Sender extends CreateHttp {
//             send(): void
//         }

//         let sender: Sender = {
//             ...obj,
//             send() {}
//         }

//         return sender;
//     }

//     setUrl(url: string) {
//         this.url = url;
//         return this.mixedSender(this);
//     }

//     setMethod(method: Method) {
//         this.method = method;
//         return this;
//     }
// }

interface BuildableRequest {
    data?: object
    method: 'get' | 'post'
    url: string
}

/**
 * 回答　pickってなんだ？？
 * オブジェクトから一部のみ抜き出した別のオブジェクトを作成する
 */
class Reqbuilder {
    data?: object
    method?: 'get' | 'post'
    url?: string

    setData(data: object): this {
        return this;
    }

    setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
        return Object.assign(this, {method});
    }

    setURL(url: string): this & Pick<BuildableRequest, 'url'> {
        return Object.assign(this, {url});
    }

    build(this: BuildableRequest) {
        return this;
    }
}

interface Data {data?: object}
interface Method {method: 'get' | 'post'}
interface Url {url: string}
interface RequestBundle extends Data, Method, Url {}

class RequestBuilder {
    data?: object
    method?: 'get' | 'post'
    url?: string

    setData(data: object): this & Data {
        return Object.assign(this, {data});
    }

    setUrl(url: string): this & Url {
        return Object.assign(this, {url});
    }

    setMethod(method: 'get' | 'post'): this & Method {
        return Object.assign(this, {method});
    }

    build(this: RequestBundle) {

    }
}

// 
// new RequestBuilder().setMethod('get').build();
new Reqbuilder().setURL('aa').setMethod('get').build();