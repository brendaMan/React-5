import  React  from  'react';

const  GenerateQuote = ({ selectSimpsons }) => {
    return (
        <div  className="GenerateQuote">
            <button  onClick={selectSimpsons}>next</button>
        </div>
    );
};

export  default  GenerateQuote;