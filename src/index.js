import React from 'react';
import ReactDOM from 'react-dom';
import {  } from './styles.js';
import { StyledBody } from './global-style.js';
//import { dataset } from './data.js'
// import {Star} from './star.js'
// import numeral from 'numeral'

export default class Wrapper extends React.Component{


  render(){

    return (

    )
  }
}


ReactDOM.render(
  <Wrapper data={dataset} />,
  document.getElementById('app')
);

module.hot.accept();
