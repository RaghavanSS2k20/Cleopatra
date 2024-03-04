import React from "react";
import HeroStyles from "./stylesheets/herosection.module.css"
import Dots from "../../assets/Dots.png"
import { JetBrains_Mono } from "next/font/google";
const jetbrainsMono = JetBrains_Mono({weight:'variable', subsets:['latin']})
const heroContentStyles = {
  fontWeight:900,
  fontFamily:"'JetBrains Mono', monospace",
  fontSize:"10vh"
}
export const Herosection = ()=>{
return(
    <div className={HeroStyles.container}>
    <div className={HeroStyles.contentContainer} >
        <div style={heroContentStyles} className={HeroStyles.herotext}>
            Make your First Movie Today
        </div>
        <div style={heroContentStyles} className={HeroStyles.herotext}>
           
        </div>
    </div>


  </div>
)
}