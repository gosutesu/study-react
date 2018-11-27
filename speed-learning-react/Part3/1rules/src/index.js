/**
 * JSXのルール
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/** １．複数の要素を持つことはできない */
//ReactDOM.render(
//    <p>Reactをはじめよう!</p>
//    <p>JSXの基本</p>,
//    document.getElementById("root");
//);

/**  ２．ルートを一つだけにするため、divで囲む
ReactDOM.render(
    <div>
        <p>Reactをはじめよう!</p>
        <p>JSXの基本</p>
    </div>, 
    document.getElementById('root')
);
*/

/** ３．タグの階層を増やしたくない場合、ダミーの要素（React.Fragment）を利用する。
 *      最終的な出力には含まれない。
 */
ReactDOM.render(
    <React.Fragment>
        <p>Reactをはじめよう!</p>
        <p>JSXの基本</p>
    </React.Fragment>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
