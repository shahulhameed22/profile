import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './skill.css';
import { Port } from "./port";
import html from './html.png';
import css from './css.png';
import boot from './boot.jpeg';
import js from './JavaScript.png';
import react from './react.png';
import sql from './sql.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";

export function Skills(){
    return(
        <>
        <div>&nbsp;</div>
        <div className="skills">
            <div className="container-fluid text-center">
                <h1><FontAwesomeIcon icon={faMinimize}/>SKILLS</h1>
            </div>
            <div>&nbsp;</div>
            <div className="container-fluid">
        <div className="row skills">
        {/* <div className="col-lg-1">&nbsp;</div> */}
            <div className="card col-lg-6">
                <div className="card-header text-center">
                    <img src={html} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
                </div>
            </div>
            <div className="col-lg-1">&nbsp;</div>
            <div className="card col-lg-5">
                <div className="card-header text-center">
                    <img src={css} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
            </div>
        </div>
        <div>&nbsp;</div>
        <div className="row skills">
        {/* <div className="col-lg-1">&nbsp;</div> */}
            <div className="card col-lg-6">
                <div className="card-header text-center">
                    <img src={boot} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Nowadays, the websites are perfect for all browsers and for all sizes of screens.</p>
                </div>
            </div>
            <div className="col-lg-1">&nbsp;</div>
            <div className="card col-lg-5">
                <div className="card-header text-center">
                    <img src={js} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                </div>
            </div>
        </div>
        <div>&nbsp;</div>
        <div className="row skills">
        {/* <div className="col-lg-1">&nbsp;</div> */}
            <div className="card col-lg-6">
                <div className="card-header text-center">
                    <img src={react} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                </div>
            </div>
            <div className="col-lg-1">&nbsp;</div>
            <div className="card col-lg-5">
                <div className="card-header text-center">
                    <img src={sql} className="img-fluid html1"/>
                </div>
                <div className="card-body">
                    <p>MySQL is a relational database management system based on the Structured Query Language, which is the popular language for accessing and managing the records in the database.</p>
                </div>
            </div>
        </div>
        <div>&nbsp;</div>
        </div>
        </div>
        </>
    );
}