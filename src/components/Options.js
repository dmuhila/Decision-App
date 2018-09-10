import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <p>Options component here</p>
            <button onClick={props.handleDeleteOptions}>
                Remove All</button>
            <p>{props.opt.length}</p>
            {
                props.opt.map((num) =>
                    <Option key={num}
                        opttext={num} />
                    //  <li key={num}>{num}</li>;  
                )
            }
        </div>
    )
}

export default Options;