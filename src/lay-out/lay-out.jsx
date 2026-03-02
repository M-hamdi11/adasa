import React from "react";
import MyNavbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
export default function LayOut(){
    return(
        <>
        <MyNavbar/>
        
        <Outlet/>
        
        <Footer/>
        </>
    )

   
    

}