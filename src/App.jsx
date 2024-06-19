import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feadback/Feadback";
import Option from "./components/Options/Options";
export default function App() {
  const [rev, setRev] = useState(() => {
    const reviewsObj = JSON.parse(localStorage.getItem("reviews"));
    if (reviewsObj.length === 0) {
      return { good: 0, neutral: 0, bad: 0 };
    } else {
      return {
        good: reviewsObj.good,
        neutral: reviewsObj.neutral,
        bad: reviewsObj.bad,
      };
    }
  });
  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setRev({
          ...rev,
          good: rev.good + 1,
        });
        break;
      case "neutral":
        setRev({
          ...rev,
          neutral: rev.neutral + 1,
        });
        break;
      case "bad":
        setRev({
          ...rev,
          bad: rev.bad + 1,
        });
        break;
      case "reset":
        setRev({
          ...rev,
          good: (rev.good = 0),
          neutral: (rev.neutral = 0),
          bad: (rev.bad = 0),
        });
    }
  };
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(rev));
  }, [rev]);
  const totalFeedback = rev.good + rev.neutral + rev.bad;
  let isPress = totalFeedback > 0 ? true : false;
  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} totalFeadback={isPress} />
      {isPress ? (
        <Feedback
          good={rev.good}
          neutral={rev.neutral}
          bad={rev.bad}
          total={totalFeedback}
          positive={Math.round((rev.good / totalFeedback) * 100)}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
