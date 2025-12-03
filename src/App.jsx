import React, { useEffect,useState } from "react"
import axios from "axios";
import { ACCESS_KEY } from "./config/constants";

function App(){
    const [imageList,setImageList] = userState([])
    useEffect(()=>{
        axios
        .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=30`)
        .then((response)=>setImageList(response.data))
    },[])
    return(
        <div>
            <div>
                {imageList.map((image)=>{
                    return <div>
                        <img src={image.urls.regular}></img>
                    </div>
                })}
            </div>
        </div>
    )
}

export default App;
