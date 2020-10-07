export default function() {

    /**
     * まず、関数の中でただ単にthisを参照することはできない
     * また、アロー関数の場合すでにthisがbindされているため、参照できない
     * どうするの！？
     */
    // const narrowTheRangeOfThisArrowFunction = (this: {x: number}) => {
    //     console.log(this);
    // }
    // const narrowTheRangeOfThisArrowFunction = () => {

    //     this.age = 26;

    //     const allowFunction = () => {
    //         console.log(this);
    //     }
    // }

    // new narrowTheRangeOfThisArrowFunction();

    const narrowTheRangeOfThisFuncion = function(this: {x: string}, number: number) {
        console.log(this, number);
    }
    
    narrowTheRangeOfThisFuncion.call({x: '4'}, 5);


}