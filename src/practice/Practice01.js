import { useState } from "react";
function Practice01(){

    let [cnt , cnt2] = useState(0);

    return (
        <div className='App'>
            <button onClick={()=>{
                cnt2(cnt + 2);  
            console.log('cnt:  ' + cnt);
            }}>짝수출력</button><span style={ { color:'red' }}>{cnt}</span> 
        </div>
    );
}

export default Practice01;