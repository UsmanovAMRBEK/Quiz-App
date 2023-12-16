import correctImage from "/images/icon-correct.svg";
import incorrectImage from "/images/icon-incorrect.svg";

function Option({ option, dispatch, question, answer }) {
  const hasAnswered = answer !== null;

  return (
    <button
      className={`option flex items-center justify-between gap-[5px] ${
        hasAnswered && "cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white" 
      }`}
      onClick={() => dispatch({ type: "newAnswer", payload: option })}
      disabled={hasAnswered}
    >
      <h3>{option}</h3>

      {answer && (
        <img
          src={question.answer === option ? correctImage : incorrectImage}
          alt=""
          className="w-[20px]"
        />
      )}
    </button>
  );
}

export default Option;
