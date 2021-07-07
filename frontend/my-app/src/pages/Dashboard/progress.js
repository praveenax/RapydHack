import React, {useEffect,useState} from 'react';
import './style.css';

const ProgressBar = ({active,index,segmentOver,playState}) => {

    console.log(active)

    const [progress,setProgess] = useState(0)
    // const [disabled,setDisabled] = useState(false)

    useEffect(()=>{
        //timer => update the progressbar -> 1,2,3
        let sInt
        function clear(){
            clearInterval(sInt);
        }

        
        if(active===index){
            sInt = setInterval(()=>{

                // if(!disabled){
                    setProgess(prev=>{
                        if(prev < 100 && playState !== 'pause'){
                            return prev+0.1
                        }else if(prev >= 100){
                            segmentOver(index)
                            clear()
                            // setDisabled(false)
                        }else{
                            clear()
                            return 100
                            
                        }
                    
                    })
                // }
               

            },10)
            return () => clear()
        }
       

    },[active,index,segmentOver,playState])


    return(
        <div style={{position:'absolute',width:`${progress}%`,background:'#fff',height:'100%'}}>
        
        </div>
    ) 
       
}

export default ProgressBar;