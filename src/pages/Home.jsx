import React,{useState,useEffect} from "react";

const Home = () => {
    const [data,setData] = useState(0);
    const increment = () => {
        setData(data+1)
    }
    return(
        <>
        <h1>Hi Welcome To Fake Prodect Store Using to React and Vite!!!</h1>
        <p>Data = {data}</p>
        <button onClick={increment}>Change Data</button>
        </>
    );
}

export default Home;