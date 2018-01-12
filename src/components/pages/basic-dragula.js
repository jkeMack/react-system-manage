import React, {Component} from 'react';
import Dragula from 'react-dragula';

export class BasicDragula extends Component {

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    };

    render () {
        const data = [1,2,3,4,5,6,7];
        const listItems = data.map(item=>
            <div style={{border:"1px solid black",padding:"20px",marginBottom:"20px"}}>列表{item}</div>
        );

        return <div ref={this.dragulaDecorator}>
            {listItems}
        </div>;
    }

}