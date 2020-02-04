const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){ // 입력한 내용 목록에 html li 양식으로 넣어 출력하는 작업
    const li = document.createElement("li");  // html에 요소 생성
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text + " ";
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}


function handleSubmit(event){  // 투두 입력후 제출시
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";  // 작성한 내용 paint작업후 작성칸 초기화
}


function loadToDos(){ //지역적으로 로딩
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){

    } else { // 로딩할 투두가 비어있을때

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();