//My Button definition
export default function MyButton({clickHandler, buttonText}) {
    return (
      <button onClick={clickHandler}>{buttonText}</button>
    );
  }
