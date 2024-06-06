import {faEnvelope, faStar, faUser} from "@fortawesome/free-regular-svg-icons";
import { faBell, faHouse,faGear, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const sidebardata=[
    {
        id:1,
        icon:faHouse,
        title:'Home',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:2,
        icon:faBell,
        title:'Notifications',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:3,
        icon:faHeart,
        title:'Shop',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:4,
        icon:faEnvelope,
        title:'Conversation',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:5,
        icon:faWallet,
        title:'Wallet',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:6,
        icon:faStar,
        title:'Subscription',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:7,
        icon:faUser,
        title:'My Profile',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:8,
        icon:faGear,
        title:'Settings',
        path:'.',
        className:'sidebar-item'
    }
];
