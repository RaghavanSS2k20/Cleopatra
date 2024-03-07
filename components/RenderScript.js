import React from "react";
import { useState } from "react";
import { Shot, Transition, Character, Heading, Action } from "./ScriptUtils";
import scriptStyles from "./stylesheets/scriptwriting.module.css"
const RenderScene = (scene)=>{
    console.log("scene from renderScene ", scene)
    const [currentlyClicked, setCurrentlyClicked] = useState('')
    const handleEleementClicked = (id)=>{
        console.log(id)
        setCurrentlyClicked(id)
      }
    return scene.map((sceneItem, index)=>{
        switch(sceneItem.type){
            case "Heading":
                return (<div onClick={() => handleEleementClicked(sceneItem.objId)}>
                    <Heading  
                    key = {index} 
                    id={sceneItem.objId}
                    heading={sceneItem.content}
                    isClicked={currentlyClicked === sceneItem.objId}/>
                </div>)

            case "Action":
                return (<div onClick={() => handleEleementClicked(sceneItem.objId)}>
                <Action 
                key = {index} 
                id={sceneItem.objId}
                text={sceneItem.content}
                isClicked={currentlyClicked === sceneItem.objId}/>
            </div>)

           case "Dialogues":
                return (
                    <div className={scriptStyles.dialogues}>
                   { sceneItem.content.map((dItem, dIndex)=>(
                    <Character
                        key={dIndex}
                        character={dItem.charecter}
                        dialogue={dItem.Dialogue}
                        paranthetical={dItem.paranthetical}

                    />
                ))}
                </div>
                )

                case "Shot":
                    return (<div onClick={() => handleEleementClicked(sceneItem.objId)}>
                    <Shot
                    key = {index} 
                    id={sceneItem.objId}
                    text={sceneItem.content}
                    isClicked={currentlyClicked === sceneItem.objId}/>
                </div>)
                default:
                    return null;
        }
    })
    
}
export const RenderScenes = ({data})=>{
    console.log("DATA ",data)
    return(
        <div className={scriptStyles['main-container']}>
            {
                data.map((scene,sceneIndex)=>(
                    <div className={scriptStyles.scene} key={scene.sceneId}>
                            {console.log("SCENE", scene.scene)}
                            {scene.scene && RenderScene(scene.scene)}
                    </div>
                ))
            }
        </div>
    )
}

