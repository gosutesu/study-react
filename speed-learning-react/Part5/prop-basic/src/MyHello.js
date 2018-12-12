import React, {Componrnt} from 'react';
// prop-typesのインポート
import PropTypes from 'prop-types';

export default class MyHello extends Comment {

}

// 型情報の宣言
MyHello.propTypes ={
    //PropTypes.string = 型
    // isRequired = 必須
    name:PropTypes.string.isRequired
}