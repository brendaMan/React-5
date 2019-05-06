import  React  from  'react';

const  DisplayQuote = ({ simpsons }) => {
    return (
        <div  className="DisplayQuote">
            <ul className="text">
                <h3> Character: {simpsons.character}</h3>
                <img className="photo" src={simpsons.image}  alt="simpsons"  />
                <h3> Quote : {simpsons.quote}</h3>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;