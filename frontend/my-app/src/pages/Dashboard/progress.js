import React, {useEffect,useState} from 'react';
import './style.css';

const ProgressBar = ({active,index,segmentOver,playState}) => {

    console.log(active)

    const [progress,setProgess] = useState(0)

    useEffect(()=>{
        //timer => update the progressbar -> 1,2,3
        let sInt
        function clear(){
            clearInterval(sInt);
        }

        function increment(Int){
            setProgess(prev=>{
                if(prev < 100 && playState !== 'pause'){
                    return prev+10
                }else if(prev === 100){
                    segmentOver(index)
                    clear()
                }
            
            })
        }
        if(active===index){
            sInt = setInterval(increment(sInt),1000)
            return () => clear()
        }
       

    },[active,index,segmentOver,playState])


    return(
        <div style={{position:'absolute',width:`${progress}%`,background:'#fff',height:'100%'}}>
        
        </div>
    ) 
       
}

export default ProgressBar;