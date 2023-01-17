import React from "react";
import { Port } from "./port";
import 'bootstrap/dist/css/bootstrap.min.css'
import sha from './mine.jpeg';
import './home.css'
import { About } from "./about";
import { Skills } from "./skills";
import { Education } from "../education";
import { Certificate } from "./certificate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

 export function Home(){
    return(
        <>
        <div className="container-fluid main1">
            <div className=" row">
                <Port/>
                <div className="col-lg-6 text-center">
                    <img src={sha} className='img-fluid h-50 self mt-5'/>
                </div>
            <div className="col-lg-6 text-center mt-5">
                <h5 className="txtnm1"><FontAwesomeIcon icon={faFeatherPointed}/>Full Stack developer</h5>
                <p className="txtnm2">I am Shahul Hameed<br/>Bachelor of Computer Science</p>
                <p className="txtnm3">To work in a demanding environment while showcasing my abilities in a sincere manner and putting out sincere, diligent effort for the development of your valued company.</p>
                <button className="btn1 text-light">Contact me !</button>
            </div>
            </div>
        </div>
        <About/>
        <Education/>
        <Skills/>
        <Certificate/>
        </>
    );
}