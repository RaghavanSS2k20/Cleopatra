import Script from "@/components/Script";
import { useEffect, useState } from "react";
import jsondata from "../response.json"
import { RenderScenes } from "@/components/RenderScript";

const ScriptPage = ()=>{
    const [data, setData] = useState(jsondata);
    
    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         try{
    //             // const response = await fetch("response.json")
    //             // const jsondata = await response.json()
    //             // console.log("JSON DATA ; ",jsondata)
    //             console.log("DSTATATATTA : ", data)
    //             setData(data)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
    //     fetchData()
    // }, []
    // )
    return(
        
        
        <RenderScenes data={data}/>
        
    )
}
export default ScriptPage