import React from "react";
import { Shot, Transition, Character, Heading,Action } from "./ScriptUtils";
import { useState } from "react";
import scriptStyles from "./stylesheets/scriptwriting.module.css"

const Script = ()=>{
    const [currentlyClicked, setCurrentlyClicked] = useState('')
    const handleEleementClicked = (id)=>{
        console.log(id)
        setCurrentlyClicked(id)
      }

      return (
        <div className={scriptStyles['main-container']}>
          <div className={scriptStyles.scene}>
            <div onClick={() => handleEleementClicked("scene1-heading")}>
              <Heading id="scene1-heading" heading="INT. KLA office" isClicked={currentlyClicked === "scene1-heading"} />
            </div>
            <Action
              id="scene1-action"
              text="CLOSE ON JOKER (30's), tears in his eyes from laughing so hard..."
            />
            <div className={scriptStyles.dialogues}>
              <Character
                id="scene1-character1"
                character="John"
                dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
                paranthetical="smiling"
              />
              <Character
                id="scene1-character2"
                character="Brown"
                dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
                paranthetical="smiling"
              />
              <Character
                id="scene1-character3"
                character="John"
                dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
                paranthetical="smiling"
              />
            </div>
            <Action id="scene1-think" text="Jhonny thinks" />
            <Shot id="scene1-shot" shot="Close-up of a mysterious React object..." />
          </div>
          <div className={scriptStyles.scene}>
            <Heading id="scene2-heading" heading="My React Heading" />
            <Action id="scene2-action" text="Performing a React action..." />
            <Character
              id="scene2-character1"
              character="Kid #1"
              dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
              paranthetical="smiling"
            />
            <Character
              id="scene2-character2"
              character="Brown"
              dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
              paranthetical="smiling"
            />
            <Character
              id="scene2-character3"
              character="John"
              dialogue="'So what this basically does is use a combination of Pug Mixins and CSS..."
              paranthetical="smiling"
            />
            <Action id="scene2-think" text="Jhonny thinks" />
            <Shot id="scene2-shot" shot="Close-up of a mysterious React object..." />
          </div>
        </div>
      );
      
}
export default Script