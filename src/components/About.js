import React, {useState} from 'react';

export default function About(props) {

//   const [myStyle, setMyStyle] = useState({
//     color : 'black',
//     backgroundColor : 'white'
//   });

let myStyle = {
    color : props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'rgb(30 34 44)':'white',
}

//   const [btnText, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = ()=>{
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color : 'white',
//             backgroundColor : 'black'
//         });
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setMyStyle({
//             color : 'black',
//             backgroundColor : 'white'
//         });
//         setBtnText("Enable Dark Mode");
//     }
//   };

  return (
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1 className="mx-3 my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count or minutes to required to read the text.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Edge, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf document, essays etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
        </div> */}
    </div>
  )
}
