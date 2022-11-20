import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url)=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchdata = async ()=>{
            const res = await axios.get(url)
            setData(res.data);
            console.log(res.data)
        } 
        fetchdata();
    },[url]);

    if(data!==[]){
        return {data};
    }
}
