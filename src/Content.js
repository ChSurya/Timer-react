import './Content.css';
import {useState} from 'react';
const Content = () =>{
    const [count,setCount] = useState(1); //use state for count
    const [minCount,setMinCount] = useState('00'); // use state for minutes 
    const [secCount,setSecCount] = useState('00');// user state for seconds
    const onIncrement = () =>{  // Increment function
        setCount(count+1);
    }
    const onDecrement = () =>{  //Decrement funtion
        setCount(count-1);
    }
    // const StartTiming = () =>{
    //     let mindisp; //we take a variable for displaying minutes
    //     let number = 59;
    //     if(count<10){
    //         mindisp = count-1;
    //         setMinCount('0'+mindisp);
    //         //set interval stars here
    //         let a = setInterval(()=>{
    //             setSecCount(number);
    //             number = number-1;
    //             if(number<10){
    //                 setSecCount('0'+number);
    //             }

                

    //             if(number===0 && mindisp===0){
    //                 clearInterval(a);
    //             }

                
    //         },100)
    //     }
    //     else{
    //         mindisp = count-1;
    //         setMinCount(mindisp);
    //         // setInterval(()=>{
    //         //     setSecCount(num=>{
    //         //         num= number-1;
    //         //         return num;
    //         //     })
    //         // },1000)
    //     }

    //     setCount(1);  // reseting the count 
    // }
    const StartTiming = () => {
        let totalSeconds = count * 60 - 1;
        
        let intervalId = setInterval(() => {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            setMinCount(minutes < 10 ? `0${minutes}` : `${minutes}`);
            setSecCount(seconds < 10 ? `0${seconds}` : `${seconds}`);

            if (totalSeconds === 0) {
                clearInterval(intervalId);
            }

            totalSeconds--;
        }, 1000);

        setCount(1);
        


    }
    return(
        <div>
            <h1>{minCount}:{secCount}</h1>
            <div>
                {count<=1?<button className='minus' onClick={onDecrement} disabled>-</button>
                :<button className='minus' onClick={onDecrement}>-</button>}
            
            
            <p className='rad'>{count}</p>
            {count>=60?<button className='plus' onClick={onIncrement} disabled>+</button>
                :<button className='plus' onClick={onIncrement}>+</button>}
            
            </div>
            <button className='startBtn' onClick={StartTiming}>Start</button>
        </div>
    )
}


export default Content