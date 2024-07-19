import './home.css';
import Header from "../../components/Header/Header..jsx";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu.jsx";
import {useState} from "react";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/appDownload/AppDownload.jsx";

export default function Home(){
    const [category, setCategory] = useState("All");
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
 }