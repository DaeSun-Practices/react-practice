import React, {Component} from 'react';
import './App.css';
import Subject from './Components/Subject'
import TOC from './Components/TOC'
import Content from './Components/Content'

//constructor라는 함수가 먼저 실행되어 초기화를 한다
// 상위 component의 값을 하위 componenet에게 전달할 때는 state를 사용한다.
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject: {title:"React", sub:"For UI"}
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
