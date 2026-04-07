import { useState } from "react";
const messages = ["Learn React *", "Apply for jobs", "Invest your new income"];

// state is memory of component and it is used to store data that can change over time. It is an object that holds the data that can be used to render the component. When the state changes, the component re-renders and updates the UI to reflect the new state. We can use the useState hook to create state in a functional component. The useState hook takes an initial value as an argument and returns an array with two values: the current state and a function that allows us to update the state.

export default function App() {
  // const step = 2;
  // const arr = useState(1);
  // console.log(arr);

  // useState returns an array with two values, the first value is the current state and the second value is a function that allows us to update the state. We can use array destructuring to assign these values to variables.
  //it is React hook  and it should be at top level of the component and it should not be called inside loops, conditions or nested functions.

  const [step, setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //  const [test,setTest] = useState({name:"Jonas"});

  function handlePrevious() {
    // alert("Previous");
    if (step > 1)
      // setstep(step - 1);
      setstep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    // alert("Next");
    if (step < 3) setstep((currentStep) => currentStep + 1);
    // setstep((currentStep) => currentStep + 1);
    //     setstep(step + 1);
    // setstep(step + 1);

    // here we are trying to update the state using the current state value but it will not work because the state update is asynchronous and it will not update the state immediately. So, when we try to update the state using the current state value, it will always use the initial state value and it will not reflect the updated state value. To fix this issue, we can use the functional form of the state update which takes a function as an argument and this function receives the previous state value as an argument and returns the new state value. So, we can use this functional form to update the state based on the previous state value.

    // setTest({name:"Fred"});
  }

  // if i dont use div then it will give error because we can only return one element from a component and if we want to return multiple elements then we need to wrap them in a div or a fragment.
  return (
    // <div>
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
            {/* {test.name} */}
          </p>

          {/* Event listener  */}
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
    // here use react fragment because i want both button and if statement to be rendered without wrapping them in a div and it will not add any extra element to the DOM.
  );
}
