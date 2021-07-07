import React, {useEffect,useState} from 'react';
import './style.css';

const ProgressBar = () => {

    const [progress,setProgess] = useState(0)

    useEffect(()=>{
        //timer => update the progressbar -> 1,2,3
        setInterval(()=>{
            
            setProgess(prev=>{
                if(prev < 100){
                    return prev+1
                }
            
            })
            
        },100)

    },[])


    return(
        <div style={{position:'absolute',width:`${progress}%`,background:'#fff',height:'100%'}}>
        
        </div>
    ) 
       
}

export default ProgressBar;