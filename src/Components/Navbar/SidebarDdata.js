import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';


export const SidebarDdata=[{
    title:'Home',
    path:'/',
    icon: <AiIcons.AiFillHome/>,
    cName:'nav-text'

},
{
    title:'About us',
    path:'/about',
    icon: <IoIcons.IoMdPeople/>,
    cName:'nav-text'

},
{
    title:'Our Blog',
    path:'/OurBlog',
    icon: <IoIcons.IoIosPaper/>,
    cName:'nav-text'

},
{
    title:'Contact us',
    path:'/contact',
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName:'nav-text'

},
]