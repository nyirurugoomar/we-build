import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Nav =styled.nav`
  background:#F97316 ;
  height:90px;
  display:flex;
  justify-content: space-between;
  padding:0.9rem calc((120vw - 1000px) / 2);
  z-index:10;
`
export const NavLink = styled(Link)`
       
  color: black;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding:0 2rem;
  height: 100%; 
  cursor:pointer;
  font-weight:500;

  &.active{
    
    border-radius:4px;
        background: black;
        padding:10px 22px;
        color:white;
        border:none;
        outline:none;
        cursor:pointer;
        transition: all 0.2s ease-in-out;
        text-decoration:none;
  }

`

export const Bars = styled(FaBars)`
     
    display:none;
    color: #fff;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:30px;
        right:20px;
        transform: translate(-100% 75%);
        font-size:2.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.div`
    
       display:flex; 
       margin-left: 40px;
       
    
       

       @media screen and (max-width:768px){
        display:none;
       }
`

export const NavBtn = styled.nav`
       display:flex;
       align-items: center;
       margin-right:24px;

       @media screen and (max-width:768px){
        display:none;

       }
`

export const NavBtnLink = styled(Link)`

        border-radius:4px;
        background: #000;
        padding:10px 22px;
        color:#fff;
        border:none;
        outline:none;
        cursor:pointer;
        transition: all 0.2s ease-in-out;
        text-decoration:none;


        


        &:hover{
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
`

