import React, {Component} from 'react';

class TOC extends Component {
    render(){
        let list = [];
        const data = this.props.data;
        for (let i=0; i<data.length; i++){
            list.push(
                <li key={data[i].id}> 
                    <a href={"/content/" + data[i].id}> {data[i].title} </a>
                </li>
            );
        }

        return (
            <nav>
            <ul>
                {list}
            </ul>
            </nav>
        );
    }
}

//외부사용 허용
export default TOC;