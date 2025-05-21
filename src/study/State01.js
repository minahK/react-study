import { useState } from "react";

function State01(){

    //

    //일반 js 변수
    let cnt = 0;

    //Stete 변수
    //React Hooks
    //  화면이 리렌더링이 되는 상황에서도 상태변수 데이터가 유지됨
    //  set함수를 통해서 state변수값이 변경이 되면 -> 화면 리렌더링 발생

    //  comstㅣlet [변수명, set함수명] = useState(초기값);

    let [cnt2, setCnt2] = useState(0);

    return (
        <div className='App'>
            <h1>State01</h1>
            <p>{cnt}</p>
            {/*<button onClick={cntPlus}>cnt증가버튼</button>*/}
            {/*<button onClick={()=>{cntPlus()}}>cnt증가버튼</button>*/}
            <button onClick={()=>{
                //버튼 눌렀을 때 실행할 코드
                cnt++
                console.log('cnt:  ' + cnt);
            }}>cnt증가버튼</button>

            <p>{cnt2}</p>
            <button onClick={()=>{
                //cnt2++; //state변수 값을 그냥 변경, 재렌더링xx
                //재렌더링 조건 -> set함수를 통해서 state변수값 변경
                setCnt2(cnt2 + 1);   // cnt2 = cnt2 + 1;
                // setCnt(매개변수)
                // this.cnt2 = 매개변수;
                console.log('cnt2:  ' + cnt2);
            }}>cnt2증가버튼(State변수)</button>

        </div>
    );


    function cntPlus(){
        cnt++;
        console.log(cnt);
    }

}

export default State01;