import React, {useEffect,useState} from 'react';
import './style.css';

const ProgressBar = ({active,index,segmentOver}) => {

    console.log(active)

    const [progress,setProgess] = useState(0)

    useEffect(()=>{
        //timer => update the progressbar -> 1,2,3
        if(active===index){
            let sInt = setInterval(()=>{
            
                setProgess(prev=>{
                    if(prev < 100){
                        return prev+10
                    }else if(prev === 100){
                        segmentOver(index)
                        clearInterval(sInt)
                    }
                
                })
                
            },1000)
        }
       

    },[active,index,segmentOver])


    return(
        <div style={{position:'absolute',width:`${progress}%`,background:'#fff',height:'100%'}}>
        
        </div>
    ) 
       
}

export default ProgressBar;