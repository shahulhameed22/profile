import { faCapsules, faGraduationCap, faHardHat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './education.css';

export function Education(){
    return(
        <>
        <div>&nbsp;</div>
        <div className="col-lg-12 text-center">
            <h2><FontAwesomeIcon icon={faGraduationCap}/>Education</h2>
        </div>
        <div className="row edu">
        <div className="container1 col-lg-4">
            <h3>B.Sc Computer Science</h3><br/>
            <h5>Hindusthan College of Arts and Science</h5><br/>
            <h5>Percentage:65%</h5><br/>
            <h5>Passed out: 2022</h5>
        </div>
        
        <div className="container1 col-lg-4">
            <h3>Higher Secondary School Leaving Certificate</h3><br/>
            <h5>City Municipal Higher Secondary School</h5><br/>
            <h5>Percentage:50%</h5><br/>
            <h5>Passed out: 2019</h5>
        </div>
        
        <div className="container1 col-lg-4">
            <h3>Secondary School Leaving Certificate</h3><br/>
            <h5>Crescent Matriculation Higher Secondary School</h5><br/>
            <h5>Percentage:51%</h5><br/>
            <h5>Passed out: 2017</h5>
        </div>
        
        </div>
        </>
    );
}