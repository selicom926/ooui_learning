import { Memo } from 'models/Memo';
import React from 'react';
import './App.css';

interface IMemoDetailState {

}

interface IMemoDetailProps {
    memo: Memo;
}

export default class MemoDetail extends React.Component<IMemoDetailProps, IMemoDetailState> {

    constructor(props: IMemoDetailProps) {
        super(props);


    }

    render() {
        return (
            <div className="App">
                <h1>{this.props.memo.title}</h1>
                <h1>{this.props.memo.content}</h1>
            </div>
        );
    }
}