import React from 'react';

const SearchList = (props) => {

    let Answered

    if(props.values.is_answered){
        Answered=<div className="answered"><p>Answered</p></div>
    }else{
        Answered=<div className="notanswered"><p>Not Answered</p></div>
    }

    return <div className="resultContainer">
        <div className="textLine"><p className="qTitle">{props.values.title}</p>{Answered}</div>
        <div className="textLine">{props.values.tags.map((d)=> <p key={d}> {d}, </p>)}</div>
    </div>;
}

export default SearchList;