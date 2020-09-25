import React from 'react';
import './App.css';
import {Memo} from 'models/Memo';

interface IMemoCollectionState {

}

interface IMemoCollectionProps {
    handleClick?: (memo: Memo) => void;
}

export default class MemoCollection extends React.Component<IMemoCollectionProps, IMemoCollectionState> {

    constructor(props: IMemoCollectionProps) {
        super(props);


    }

    render() {
        return (
            <div className="App">

            </div>
        );
    }
}