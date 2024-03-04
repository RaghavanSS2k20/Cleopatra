import React from "react";
import { useState } from "react";
import nvStyles from "./stylesheets/navbar.module.css"
import Image from "next/image";
import CleoLogo from "../assets/icons/navbarIcon.svg"
import { Epilogue } from "next/font/google";

const epliogue = Epilogue({
    weight:"800",
    subsets:["latin"]
})

export default function Navbar(){
    return(
        <div className={nvStyles.navbarcontainer}>
        <ul style={{display:'flex', flexDirection:'row', justifyContent:"space-between", alignItems:'center', width:'100%'}}>
                <li><a  href="#home">
                    <div className={nvStyles.imagecontainer}>
                       <Image src={CleoLogo} alt="Cleopatra"/>

                    </div>
                </a></li>
  
                <li style={{width:"fit-content", margin:'2%'}}>
                   
                    <div className={nvStyles.joinUs} 
                     style={{
                        fontFamily: "Epilogue, sans-serif",
                        fontWeight: 800,
                        /* Add any other styles you need */
                      }}
                    >
                        Join us
                    </div>
        

                </li>
        </ul>
        </div>
      
    )
}