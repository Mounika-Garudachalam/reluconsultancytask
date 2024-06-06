import React from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function Sidebar(){
    return (
        <div className="sidemenu">
            <Header><h1 className="logo-box">LOGO</h1></Header>
            <SidebarMenu/>
            <div className="logout">
            <Link className="logout-link">
                <FontAwesomeIcon className="icon1" icon={faRightFromBracket}/>
                Logout
            </Link>
            </div>
            <Footer>
                <p>2022@logo name</p>
                <p>Developed by Ivan Infotech</p>
            </Footer>
        </div>
    );
}