const ContactElem = ({ name, number, delBtn, btnId }) => {
  //   console.log(delBtn);
  return (
    <>
      <li>
        {name}: {number}
      </li>
      <button id={btnId} onClick={delBtn}>
        Delete contact
      </button>
    </>
  );
};

export default ContactElem;
