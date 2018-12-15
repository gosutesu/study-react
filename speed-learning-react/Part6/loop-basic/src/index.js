import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyArticle from './MyArticle'
import * as serviceWorker from './serviceWorker';

const articles = [
    {
        url:"https://www.atmarkit.co.jp/ait/series/9383/",
        title:'Angular TIPS',
        description:'人気のjavascriptフレームワークAngularの目的別リファレンス',
        isNew : true
    }

]

const list = articles.map((article) => <MyArticle {...article} key={article.url} />);

ReactDOM.render(
    <dl>
        {list}
    </dl>
    , document.getElementById('root')
);


ReactDOM.render(
    <dl>
        {articles.map((aritcle,index) =>
            <MyArticle {...aritcle} key={index}/>
        )}
    </dl>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
