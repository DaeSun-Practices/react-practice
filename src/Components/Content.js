import React, {Component} from 'react';

class Content extends Component {
    render(){
      return (
        <article>
          <h2> {this.props.title} </h2>
          {this.props.content}
        </article>
      );
    }
}

//외부사용 허용
export default Content;