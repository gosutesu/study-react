import React, {Component} from 'react';
// prop-typesのインポート
import PropTypes from 'prop-types';

export default class MyHello extends Component {

}

// 型情報の宣言
MyHello.propTypes ={
    //PropTypes.string = 型
    // isRequired = 必須
    name:PropTypes.string.isRequired
}