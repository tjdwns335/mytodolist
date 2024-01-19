const FormContent = ({ title, detail, changeTitle, changeDetail, addHandler }) => {
  return (
    <form className="form-style">
      <div>
        <label className="label-style">제목</label>
        <input
          onChange={changeTitle}
          type="text"
          name="title"
          className="input-style"
          value={title}
        />
        <label className="label-style">내용</label>
        <input
          onChange={changeDetail}
          type="text"
          name="detail"
          className="input-style"
          value={detail}
        />
      </div>
      <div>
        <button className="formButton-style" onClick={addHandler}>추가하기</button>
      </div>
    </form>
  )
}

export default FormContent;