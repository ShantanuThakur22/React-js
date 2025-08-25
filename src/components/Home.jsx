import React, { useEffect,useState } from "react";
import getAllMeme from "../Api/meme";
import CardInfo from "./CardInfo";

function Home() {

    const [data,setData]= useState([])
  useEffect(() => {
    getAllMeme().then((meme) => setData(meme.data.memes));
  }, []);
  return (
    <div className="flex flex-wrap gap-5">
      {
        data.map((item)=> <CardInfo img={item.url} title={item.name}/>)
      }
    </div>
  );
}

export default Home;
