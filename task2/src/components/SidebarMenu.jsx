import React from "react";
import {Sidebar,Menu,MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { sidebardata } from "../helpers/sidebardata";

export default function SidebarMenu(){
    return (
        <Sidebar className="sidebar">
            <Menu className="menu">
                {sidebardata.map(item=>
                    <Link to={item.path} key={item.id} style={{textDecoration:'none'}}>
                        <MenuItem className="menu-item"> 
                            <FontAwesomeIcon className="icon" icon={item.icon}/>
                            {item.title}
                        </MenuItem>
                    </Link>
                )}
                
            </Menu>
        </Sidebar>
    );
}