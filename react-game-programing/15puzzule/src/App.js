import React, { Component } from 'react';
import './App.css';

// このゲームで使用される数値一覧

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

/**
 * テーブル部品
 * 
 */
class Table extends Component {

  // array : このゲームで使う数値の一覧
  // games : このゲームで表示される配列
  // イベントをバインド？よくわかんない
  constructor(props) {
    super(props);
    this.state = {
      array : ["",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      games : [],
    }
    this.onClick = this.onClick.bind(this);
  }

  // 初期化処理
  // ランダムの二次元配列を生成
  componentWillMount() {
    let arr = this.state.array;
    let a = arr.length;
    //　シャッフルアルゴリズム
    while(a) {
      var j = Math.floor(Math.random() * a);
      var t = arr[--a];
      arr[a] = arr[j];
      arr[j] = t;
    }

    // ゲーム中の一覧
    const temp = [[arr[0],arr[1],arr[2],arr[3]]
                  ,[arr[4],arr[5],arr[6],arr[7]]
                  ,[arr[8],arr[9],arr[10],arr[11]]
                  ,[arr[12],arr[13],arr[14],arr[15]]];
    
    this.setState({games : temp})
  }

  // クリックハンドラ
  onClick(e) {
    let tmp = this.state.games;
    //tr の番号を取得
    let i = Number(e.target.parentNode.rowIndex);
    //td の番号を取得
    let j = Number(e.target.cellIndex);

    // 上
    // -1だと配列の添え字としてエラーになる。
    // undefaindは配列外へのアクセス対策
    // ゴリゴリ書きすぎ、、、やりすぎた
    if(!((i -1) === -1 ) && !(typeof tmp[i-1][j] === "undefined") && tmp[i-1][j] === "" ) {
      const t = tmp[i][j];
      tmp[i][j] = "";
      tmp[i-1][j] = t;
    } else if(!((j -1) === -1 ) && !(typeof tmp[i][j-1] === "undefined") && tmp[i][j-1] === "" ) {
      // 左
      const t = tmp[i][j];
      tmp[i][j] = "";
      tmp[i][j-1] = t;
    } else if(!(typeof tmp[i+1][j] === "undefined") && tmp[i+1][j] === "" ) {
      // 下
      const t = tmp[i][j];
      tmp[i][j] = "";
      tmp[i+1][j] = t;
    } else if(!(typeof tmp[i][j+1] === "undefined") && tmp[i][j+1] === "" ) {
      // 右
      const t = tmp[i][j];
      tmp[i][j] = "";
      tmp[i][j+1] = t;
    }

    this.setState({games:tmp});
  }

  render() {
    let list = [];
    for(let i = 0; i < 4; i++) {
      let element = [];
      for(let j = 0; j < 4; j++) {
        element.push(<td className="tile" onClick={this.onClick}>{this.state.games[i][j]}</td>);
      }
      list.push(<tr>{element}</tr>);
    }

    return (
      <table>
        {list}
      </table>
    );
  }
}

export default App;
