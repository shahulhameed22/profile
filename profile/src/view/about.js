import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import { Port } from "./port";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faMagic, faPerson } from "@fortawesome/free-solid-svg-icons";

export function About(){
    return(
        <div className="container-fluid">
        <div className="row about">
            <div className="col-lg-12">
                <div className="card text-center">
                    <h2 className="card-header"><FontAwesomeIcon icon={faPerson}/>About me</h2>
                    <h6 className="card-body"> I have done a course on full stack development from KGiSL COLLEGE .HTML,CSS,Bootstrap,JavaScript,React JS,MySQL are the few of the relevent talent I possess .I am a self motivated and realistic person ,keen in learning new things to improve my skills and can able to organise events . My other area of interest was photography.</h6>
                </div>
            </div>
        </div>
        </div>
    );
}