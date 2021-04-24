import React, {Component} from 'react';
import './App.css';
import Subject from './Components/Subject'
import TOC from './Components/TOC'
import Content from './Components/Content'


class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
