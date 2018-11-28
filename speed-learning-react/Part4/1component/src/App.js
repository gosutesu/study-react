import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Reactのコンポーネントは二つに分類される。
 * 
 * ・関数コンポーネント（関数構文で定義）
 * ・クラスコンポーネント（クラス構文で定義）
 * 
 */

 //クラスコンポーネント
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//関数コンポーネント
//引数としてプロパティ情報（props）を受け取り、描画内容を返すだけ
function App2(props) {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/**
 * 関数コンポーネントの条件
 * ・propsを引数に受け取る
 * ・Reactの要素を戻り値に設定する
 */
/**
 * 関数コンポーネントの制限
 * ・State（状態）の管理
 * ・ライフサイクルメソッドの定義
 */
export default App;
