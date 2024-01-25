const TodoListContent = ({ todoList, setTodoList, isActive }) => {
  const removeButton = (id) => {
    // 확인 메시지를 표시하고 사용자가 확인을 눌렀을 때만 삭제 수행
    const userConfirmed = window.confirm("삭제하시겠습니까?");

    if (userConfirmed) {
      const newTodoList = todoList.filter((todoList) => todoList.id !== id);
      setTodoList(newTodoList);
    }
  };

  const switchClick = (id) => {
    const updatedTodoList = todoList.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    setTodoList(updatedTodoList);
  }

  return (
    <div className="list-content">
      {/* Todo-list */}
      <h2>{(isActive === false) ? "Todo-List" : "Done-List"}</h2>
      <div className="todoList-wrap">
        {
          todoList.filter((item) => { return (item.isDone === isActive) ? true : false })
            .map((item) => {
              return (
                <div className="todoList" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                  <div className="button-group">
                    <button className="delete-button" onClick={() => removeButton(item.id)}>삭제하기</button>
                    <button className={isActive ? "cancel-button" : "done-button"}
                      onClick={() => switchClick(item.id)}>{isActive ? "취소" : "완료"}</button>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default TodoListContent