import Header from './components/Header';
import Welcome from './components/Welcome';
import Popular from './components/Popular';
import Brands from './components/Brands';
import NewTools from './components/NewTools';
import './App.css';
import { useState } from 'react';
import notliked from "./imgs/like.png";
import liked from "./imgs/liked.png";
import figma from "./imgs/figma.svg";
import sketch from "./imgs/logos_sketch.svg";
import vscode from "./imgs/vscode.svg";
import notion from "./imgs/notion.png";
import slack from "./imgs/slack.svg";
import invision from "./imgs/invision.svg";
import zeplin from "./imgs/zeplin.png";
import phpstorm from "./imgs/phpstorm.png";
import toolbox from "./imgs/toolbox.png";
import procreate from "./imgs/procreate.png";


function App() {
  const [favourites, SetFavourites] = useState([])
  const [data, SetData] = useState([{
    logo : figma,
    title : "FIGMA",
    price : "Free",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : sketch,
    title : "Sketch",
    price : "Trial & Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : vscode,
    title : "Visual Studio Code",
    price : "Free",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : notion,
    title : "Notion",
    price : "Free & Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : slack,
    title : "Slack",
    price : "Free & Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : invision,
    title : "Invision",
    price : "Free & Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : zeplin,
    title : "Zeplin",
    price : "Free & Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : phpstorm,
    title : "PHPStorm",
    price : "Free",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : toolbox,
    title : "Toolbox",
    price : "Free",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  },
  {
    logo : procreate,
    title : "Procreate",
    price : "Paid",
    paragraph : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    liked : notliked,
    isliked : false,
    href : "#!"
  }])

  return (
    <>
    <Header/>
    <Welcome/>
    <Popular data={data} AddFavourite={AddFavourite}/> 
    <Brands/>   
    <NewTools data={data} AddFavourite={AddFavourite}/>
    </>
  );

  function AddFavourite (appCard) {
    if (appCard.isliked === false) {
      SetFavourites([...favourites, appCard]) 
      let object = data[data.indexOf(appCard)]
      object.liked = liked
      object.isliked = true
      let new_data = data
      data[data.indexOf(appCard)] = object
      SetData(new_data)           
    }     
    else if (appCard.isliked === true) {
      const new_favourites = favourites.filter((card) => {return card !== appCard});      
      SetFavourites(new_favourites)      
      let object = data[data.indexOf(appCard)]
      object.liked = notliked
      object.isliked = false
      let new_data = data
      data[data.indexOf(appCard)] = object
      SetData(new_data)  
    }               
  } 
}

export default App;
