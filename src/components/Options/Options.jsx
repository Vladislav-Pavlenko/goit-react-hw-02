import css from "./Options.module.css";
export default function Option({ updateFeedback, hasFeadback }) {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => {
            updateFeedback("good");
          }}
          type="button"
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback("neutral");
          }}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            updateFeedback("bad");
          }}
          type="button"
        >
          Bad
        </button>
      </li>

      {hasFeadback && (
        <li>
          <button
            onClick={() => {
              updateFeedback("reset");
            }}
            type="button"
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
