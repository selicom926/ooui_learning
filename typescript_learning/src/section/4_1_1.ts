export default function (): void {
    function signInDefaultValue(message: string, user = 'not sign in') {
        console.log(message, user);
    }

    function signIn(message: string, user?: string) {
        console.log(message, user);
    }

    // default valueを使えば省略可能な引数となる！
    signIn('hello');
    signInDefaultValue('hello');

    /**
     * user?で宣言する場合、undefinedを明示的に渡せるが、
     * defaultvalueの場合はできない・・・と思ったらできる
     * undefinedを明示的に渡すしても、defaultvalueが優先される
     * 引数を渡さない　＝　未定義　＝　undefinedだからそりゃそうか？
     */
    signIn('hello', undefined);
    signInDefaultValue('hello', undefined);


    /**
     * nullは実行時取得できなかった、とかなんも計算結果帰ってこなかった
     * という特殊な形なので、用途がはっきりと別れてるみたい
     * どちらのパターンもnullは渡せない （コメントをとるとエラーになる）
     */
    // signIn('hello', null);
    // signInDefaultValue('hello', null);
}

