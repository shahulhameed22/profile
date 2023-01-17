import React from "react";
import javascript from './coursera1.jpg';
import git from './coursera.jpg';
import solo from './sololearn.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export function Certificate(){
    return(
        <>
        <div className="col-lg-12 text-center">
            <h3><FontAwesomeIcon icon={faCertificate}/>My Certification</h3>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <img src={javascript} className="img-fluid"/>
            </div>
            <div className="col-lg-4">
                <img src={git} className="img-fluid"/>
            </div>
            <div className="col-lg-4">
                <img src={solo} className="img-fluid"/>
            </div>
        </div>
        </>
    );
}