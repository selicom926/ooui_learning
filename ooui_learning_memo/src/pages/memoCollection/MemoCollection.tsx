import React from 'react';
import {Memo} from 'models/Memo';

interface IMemoCollectionState {
    filteredMemos: Memo[];
}

interface IMemoCollectionProps {}

export default class MemoCollection extends React.Component<IMemoCollectionProps, IMemoCollectionState> {

    memos: Memo[];

    constructor(props: IMemoCollectionProps) {
        super(props);

        this.memos = [{
            id: 1,
            title: 'test',
            content: 'testcontent'
        },{
            id: 2,
            title: 'test2',
            content: 'testcontent2'
        }];

        this.state = {
            filteredMemos: this.memos
        }

        this.onChangeSearchKey = this.onChangeSearchKey.bind(this);
    }

    onChangeSearchKey(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            filteredMemos: this.memos.filter((memo: Memo) => {
                return memo.title.indexOf(event.target.value) >= 0
            })
        });
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.onChangeSearchKey}></input>
                <ul>
                {
                    this.state.filteredMemos.map((memo: Memo) => {
                        return <li>{memo.title}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}