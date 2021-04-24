import React, {Component} from 'react';

class Control extends Component {
    render(){
        return (
            <ul>
                <li> 
                    <a 
                        href="/create"
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("create");
                        }.bind(this)}
                        > Create
                    </a> 
                </li>

                <li> 
                    <a 
                        href="/update"
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("update");
                        }.bind(this)}

                    > Update 
                    </a> 
                </li>

                <li> 
                    <div
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("delete");
                        }.bind(this)}
                    > Delete </div> 
                </li>
            </ul>
        );
    }
}

//외부사용 허용
export default Control;