function TextInputWithLabel({ labelText, onChange, value }) {
  return (
    <>
      <label>{labelText}</label>
      <input type="text" id={elementId} value={value} onChange={onChange} />
    </>
  );
}

export default TextInputWithLabel;
