import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyHello from './MyHello';

export class Member{}

export default class MyProp extends Comment {
    render() {
        console.log(this.props);
        return<p>結果をコンソールを確認してください。</p>
    }
}

//型定義
MyProp.propTypes = {
    // 特殊なデータ型の型検証
    prop1 : PropTypes.instanceOf(Member),
    // 列挙値のひとつであることを意味する
    prop2 : PropTypes.oneOf(['男','女','不明']),
}

//既定値の定義
MyHello.defaultProps = {
    name : "名無権兵衛",
}