import React from "react";
import utilStyles from "./stylesheets/scriptutils.module.css"
import { useState } from "react";

export const Heading = ({id, heading, isClicked }) => {
  console.log("From Heading...am i been clicked ? ",isClicked)
    const [isTextarea, setIsTextarea] = useState(isClicked)
    const [headingContent, setHeadingContent] = useState(heading);
    const handleHeadingChange = (e)=>{
      console.log("this will be updated in backend for Heading : ",id," and conten tupdated is ",headingContent )
      setHeadingContent(e.target.value);
    }
    console.log(isTextarea)
    const toggleIsCliked = ()=>{
      if (isTextarea){
        setIsTextarea(false)
      }else{
        setIsTextarea(true)
      }
    }
    const handleBlur = () => {
      // Update the backend when the user stops typing or clicks outside the textarea
     isClicked = false
     console.log("----------------------------------------------------")
  
     console.log(isClicked)
    };
    return(
      <>
   { isTextarea?
     (
      <textarea
        
        value={headingContent} onBlur={toggleIsCliked} className={utilStyles["textarea-style"]} onChange={handleHeadingChange} />
     ):(
      <div className={utilStyles.heading} onClick={toggleIsCliked}>
        <h2>{heading}</h2>
      </div>
  
      )
      }
      </>
    )
  };

  
export const Action = ({id, text, isClicked }) => {
  console.log("From action...am i been clicked ? ",isClicked)
  const [isActionTextarea, setIsActionTextarea] = useState(isClicked)
  const [actionContent, setActionContent] = useState(text);
  const handleHeadingChange = (e)=>{
    console.log("this will be updated in backend for Heading : ",id," and conten tupdated is ",headingContent )
    setActionContent(e.target.value);
  }
  console.log("Action area va pa ? ",isActionTextarea)
  const toggleIsCliked = ()=>{
    if (isActionTextarea){
      setIsActionTextarea(false)
    }else{
      setIsActionTextarea(true)
    }
  }
  const handleBlur = () => {
    // Update the backend when the user stops typing or clicks outside the textarea
   isClicked = false
   console.log("----------------------------------------------------")

   console.log(isClicked)
  };
  return(
    // <div className={utilStyles.action}>
    //   <p>{text}</p>
    // </div>
    <>
    { isActionTextarea?
      (
       <textarea
         
         value={text} onBlur={toggleIsCliked} className={utilStyles["textarea-style"]} onChange={handleHeadingChange} />
      ):(
        <div className={utilStyles.action}>
           <p>{text}</p>
        </div>
   
       )
       }
       </>
  )
};
  export  const Character = ({ character, dialogue, paranthetical }) => (
    <div className={utilStyles.character}>
      <h3>{character}</h3>
      {paranthetical && <p className={utilStyles.paranthetical}>{paranthetical}</p>}
      <p className={utilStyles.dialogue}>{dialogue}</p>
    </div>
  );


  export const Transition = ({ transition }) => (
    <div className={utilStyles.transition}>
      <p>{transition}</p>
    </div>
  );

  export const Shot = ({ shot }) => (
    <div className={utilStyles.shot}>
      <p>{shot}</p>
    </div>
  );