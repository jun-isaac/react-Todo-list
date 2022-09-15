import { useState, useEffect } from "react"


// ! 1. App이 실행 된다.
function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // ! 4. setToDo 함수로 toDo 값을 수정한다.
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    // ! 6. if(toDo가 공란이라면) event.preventDefault라는 js 함수를 사용해 Submit을 중단 시킨다.
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    // ! 7. setToDos 함수를 사용해 toDos / []를 값을 바꿔준다. | ((기존 Array) => [새로 입력한 값, ...기존 Array]) 여기서 ...은 다른 Array로 나누는 것이 아니라 같은 Array로 합쳐준다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    // ! 8. setToDo 함수를 사용해 toDo 값을 공란으로 바꿔준다.
    setToDo("");
  };
  console.log(toDos);

  // ! 2. div를 return한다.
  // ! 3. input에 toDo를 작성한다.
  // ! 5. 수정된 toDo값을 button을 눌러서 Submit한다.
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
  );
}

  // ! <목록> {toDos.map / Array안의 값을 바꿔주는 js 함수}(( Array안의 데이터 / 아무 이름 설정 가능 ) => (<li key / 이걸 넣어줘야 오류가 나지 않음 ={number를 넣어줘야 하기에 index로 설정 / .map에 마우스 올릴시 확인 가능}>{Array안의 데이터 / 위에 설정한 이름}</li>))} </목록>
  /*
  <ul>
    {toDos.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
  */

export default App;
