import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import ImgMediaCard from '../image'
import {getBooks} from "../api"
import Latest from "./Latest";
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid, Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const Footer = ({latest}) => {

   
    console.log(latest);
    const useStyles = makeStyles({
        root: {
          root: {
            maxWidth: 400,
           
          },
          media: {
            height: 140,
          },
        },
      });
      


    return ( 
        <div  >
       <footer className="footer">Copyright&copy; <b> Book.LK SL&hearts;</b> 
       2020-{(new Date().getFullYear())} </footer>
        </div>

       
     );
}
 
export default Footer;