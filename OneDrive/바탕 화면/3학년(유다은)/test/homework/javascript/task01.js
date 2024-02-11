document.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되었을 때 실행될 코드

  // 할일 추가 버튼과 할일 목록 요소를 선택합니다.
  const addButton = document.querySelector(".btn");
  const taskList = document.getElementById("taskList");

  // 할일 추가 버튼에 클릭 이벤트 리스너를 추가합니다.
  addButton.addEventListener("click", function () {
    // 사용자로부터 할일 내용을 입력받습니다.
    const task = prompt("할일을 입력하세요.");

    // 입력이 없거나 취소되었을 경우 경고창을 표시하고 함수를 종료합니다.
    if (task === "" || task === null) {
      alert("할일을 입력하지 않았습니다.");
      return;
    }

    // 할일 목록에 추가되었다는 메시지를 표시합니다.
    alert("할일 목록에 추가되었습니다: " + task);

    // 입력받은 할일을 목록에 추가하는 함수를 호출합니다.
    addTaskToList(task);
  });

  // 할일을 목록에 추가하는 함수입니다.
  function addTaskToList(taskContent) {
    // 새로운 할일 항목을 생성합니다.
    const listItem = document.createElement("li");
    // 체크박스 요소를 생성합니다.
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // 입력 타입을 체크박스로 설정합니다.
    // 할일 내용을 표시할 span 요소를 생성합니다.
    const taskText = document.createElement("span");
    taskText.textContent = taskContent; // 할일 내용을 설정합니다.
    // 삭제 버튼을 생성합니다.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제"; // 버튼 텍스트를 설정합니다.
    // 삭제 버튼을 클릭했을 때 실행될 함수를 추가합니다.
    deleteButton.addEventListener("click", function () {
      listItem.remove(); // 해당 항목을 삭제합니다.
    });
    // 체크박스의 변경 이벤트를 감지하여 배경색을 변경하는 함수를 추가합니다.
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        listItem.style.backgroundColor = "lightgreen"; // 체크됐을 때 배경색을 변경합니다.
      } else {
        listItem.style.backgroundColor = ""; // 체크가 해제됐을 때 배경색을 원래대로 돌립니다.
      }
    });
    // 각 요소를 할일 항목에 추가합니다.
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    // 새로 생성한 할일 항목을 목록에 추가합니다.
    taskList.appendChild(listItem);
  }
});
