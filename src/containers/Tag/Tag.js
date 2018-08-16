import React from 'react';

const Tag = (props) => {

    const tag = props.location.state

    //check if sentiment item is not empty
    let negative = tag.sentiment.negative ? tag.sentiment.negative : 0
    let neutral = tag.sentiment.neutral ? tag.sentiment.neutral : 0
    let positive = tag.sentiment.positive ? tag.sentiment.positive : 0

    const totalSentiment = negative + neutral + positive

    return (
        <div className="tag-wrap">
            <p>label -              <span className="bold">{tag.label}</span> </p>
            <hr/>
            <p>total sentiment -    <span className="bold">{totalSentiment}</span> </p>
            <p>negative -           <span className="bold">{negative}</span> </p>
            <p>neutral -            <span className="bold">{neutral}</span> </p>
            <p>positive -           <span className="bold">{positive}</span> </p>
 
            <hr/>
            <p className="bold">pageType: </p>

            {Object.entries(tag.pageType).map(([name, num], i) => (
                 <p key={i} className="city-details"> 
                    <span>{name}:</span> 
                    <span className="bold"> {num}</span> 
                </p>
            ))}

        </div>
    );
}

export default Tag;