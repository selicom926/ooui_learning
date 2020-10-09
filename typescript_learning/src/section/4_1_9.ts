import { create } from "domain"
import { StringDecoder } from "string_decoder";

export default function() {
    type CreateElement = {
        (tag: 'a'): HTMLAnchorElement
        (tag: 'canvas'): HTMLCanvasElement
        (tag: 'table'): HTMLTableElement
        (tag: string): HTMLElement
    }

    type StringOrNumber = {
        (arg: string): string
        (arg: number): string
    }

    let stringValue: StringOrNumber = (arg: number | string): string => {
        return `${arg}`;
    }

    type AOrString = {
        (arg: 'a'): string
        (arg: string): string
    }

    let aOrString: AOrString = (arg: string): string => {
        return arg;
    }

    console.log(stringValue(10));

    /**
     * こっちの挙動は納得いくけど、教科書のほうが若干納得いかない
     */
    console.log(aOrString('a'));

    /**
     * 教科書にはいけるってかいてあったけど、無理じゃないかな！？
     * HTMLElementがすべてを包括していれば確かに行けるけど、一部はみ出てる。
     * コメント外すとエラーになります
     * @param tag タグ名
     */
    // let createTElement: CreateElement = (tag: string): HTMLElement => {
    //     return document.createElement(tag);
    // }

    // console.log(createTElement('foo'));

    type WarnUser = {
        (warning: string): string
        wasCalled: boolean
    }

    /**
     * typeを満たすように設定しないとエラーは出すが、
     * どこで設定してもいいらしい（とりあえず関数ブロック内にあればOK？）
     * @param warning 
     */
    const user: WarnUser = function warnUser(warning: string): string {
        if (user.wasCalled) {
            return '';
        }

        user.wasCalled = true;
        return warning;
    }

    console.log(user('user!!'));
    console.log(user('user!!'));
    console.log(user('user!!'));
    console.log(user('user!!'));
    user.wasCalled = false;

    // type と interfaceの違いってなんだ・・・！？
    // 後々わかる？
    // interfaceはプロパティ名の数とかをがっちり固めるやるだったかもしれない


    // const ならいけて letだとだめ
    // 不可解・・・
    // いや、関数オブジェクトの中にあるプロパティが、関数上書きしたら消えるから防止してくれてる？
    // やさしさからの・・・？
    const test: WarnUser = function(warning: string) {
        return 'a'
    }
    test.wasCalled = false;
}