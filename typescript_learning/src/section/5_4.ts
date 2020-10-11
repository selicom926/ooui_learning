export default function() {

    type A = number;
    type B = A | string;

    /**
     * 型を増やすことはオーバーライド可能だが、
     * 型を変えることはできない
     */
    interface IStatus {
        good(x: number): string
        bad(x: number): string
    }
    interface IStatus {
        verygood(x: number): string
    }
    interface User<Age extends number> {
        age: Age
    }
    // ジェネリックを使用する場合、宣言すべてが同一のジェネリックでないとエラー
    // interface User {
    //     name: string
    // }
    // コメント取るとエラー
    // interface IExtendStatus extends IStatus {
    //     good(x: string | number ): string
    //     bad(x: string): string
    // }
    
    /**
     * こちらは型を変えて宣言すると、イイカンジにマージされる。（オーバーロードされる）
     * bad(x: number) & bad(x: string)となるため、実装側はbad(x: number | string)としないといけない
     * これがミスにつながる可能性があるため、interfaceで実装したほうが安全である
     */
    type TStatus = {
        good(x: number): string
        bad(x: number): string
    }
    /**
     * インターフェースは複数宣言できる（マージされる）
     * が、typeはされない
     * コメントとるとエラー
     */
    // type TStatus = {
    //     verygood(x: number): string
    // }
    type TExtendStatus = TStatus & {
        good(x: number | string): string
        bad(x: string): string
    }


    const status: TExtendStatus = {
        good:(x: number)=> 'a',
        bad:(x: string | number)=> 'a'
    };
    // const status2: IExtendStatus = {
    //     good:(x: number)=> 'a',
    //     bad:(x: number)=> 'a'
    // };
}