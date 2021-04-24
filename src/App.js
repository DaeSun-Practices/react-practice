import React, {Component} from 'react';
import './App.css';
import Subject from './Components/Subject'
import TOC from './Components/TOC'
import Content from './Components/Content'

//constructor라는 함수가 먼저 실행되어 초기화를 한다
// 상위 component의 값을 하위 componenet에게 전달할 때는 state를 사용한다.

//props나 state의 값이 바뀌면 render함수가 다시 호출된다.
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: "welcome",

      subject: {title:"React", sub:"For UI"},

      contents: [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ],

      welcome: {title:"Welcome", desc:"Hello React!"},

    }
  }

  render(){
    let appTitle, appDesc = null;

    if (this.state.mode === "welcome"){
      appTitle = this.state.welcome.title;
      appDesc = this.state.welcome.desc;
    }
    else if (this.state.mode === "read"){
      appTitle = this.state.contents[0].title;
      appDesc = this.state.contents[0].desc;
    }



    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>

        <TOC data = {this.state.contents}></TOC>

        <Content title={appTitle} content={appDesc}> </Content>
      </div>
    );
  }
}

export default App;
