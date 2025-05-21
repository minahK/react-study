import './Basic01.css';

function Basic01(){

    let msg = "안녕~";
    let state = "배가고프다";
    let flag = true;

    let hi = "";
    for(let i=0; i<5; i++){
        hi += "hi~";
    }

    return (
            <div className="App">
                <h1>리액트 Basic01</h1>
                <p className="font-red">아무거나 글씨</p>
            <p id="pid">p태그 글자</p>
            {

                //삼향연산자
                flag == true ? <h3>{msg}</h3> : <h3>{state}</h3>
                
            }

            {
                //&&연산자
                flag && <h3>{msg}</h3>
            }
            {
                !flag == false && <h3>{state}</h3>
            }
                <h4 style={ { color:'green' , fontStyle:'italic'} }>{hi}</h4>
            </div>
        );

    
    //리엑트 컴포넌트에서 return은 최상위 1개 요소로 리턴 
    if(flag){

        return (
            <div classname="App">
                <h1>리액트 Basic01</h1>
                <p className="font-red">아무거나 글씨</p>
            <p id="pid">p태그 글자</p>

                <h3>{msg}</h3>
                <h4 style={{ color:'green' , fontStyle:'italic'}}>{hi}</h4>
            </div>
        );
        
    }else {
        return (
            <div className="APP">
                <h1>{state}</h1>
            </div>
        )
    }
}
export default Basic01