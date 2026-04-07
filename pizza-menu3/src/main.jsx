// import React from "react" is used to import the React library, which is necessary for building React components and using JSX syntax.
// import ReactDOM from "react-dom/client" is used to import the ReactDOM library, which provides methods for rendering React components to the DOM. It provides the createRoot method, which is used to create a root for rendering the React application.

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// We can make component Pizza and use it in App component. This is called composition. It allows us to build complex UIs from smaller, reusable components. By breaking down the UI into smaller pieces, we can manage and maintain our code more effectively. Each component can be developed and tested independently, making it easier to identify and fix issues. Additionally, composition promotes reusability, as we can use the same component in multiple places throughout our application without having to duplicate code.
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Co.</h1>
    </header>
  );
}

// Styling in React can be done in several ways, including inline styles, CSS stylesheets, CSS modules, and styled-components. Inline styles are defined directly within the component using the style attribute, while CSS stylesheets are separate files that contain CSS rules and are imported into the component. CSS modules allow for scoped styling by creating unique class names for each component, preventing style conflicts. Styled-components is a library that allows you to write actual CSS code within your JavaScript files, providing a more dynamic and modular approach to styling in React applications. Each method has its own advantages and use cases, and developers can choose the one that best fits their needs and preferences.

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* RENDERING LIST OF PIZZAS */}
      {numPizzas > 0 ? (
        // React fragments are a way to group multiple elements without adding an extra node to the DOM. They allow you to return multiple elements from a component without wrapping them in a parent element, such as a div. This can help keep the DOM cleaner and more efficient, especially when rendering lists or multiple components. In the example above, we use a React fragment (<>...</>) to wrap the paragraph and the list of pizzas without adding an unnecessary div around them.
        // <>
        <React.Fragment>
          <p>
            Authentic Italian cuisine.6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              // <Pizza name={pizza.name} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our Menu.Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

// props (short for properties) are a way to pass data from a parent component to a child component in React. They allow you to customize and configure the behavior and appearance of a component by providing it with specific values. In the example above, the Menu component is passing several props (name, ingredients, photoName, and price) to the Pizza component. The Pizza component can then use these props to display the appropriate information about the pizza, such as its name, ingredients, photo, and price. Props are read-only and cannot be modified by the child component, ensuring that data flows in a unidirectional manner from parent to child components.

// Components have to be pure in terms of props and states. This means that a component should not modify its own props or state directly. Instead, it should rely on the parent component to pass down any necessary data through props and use state management techniques (such as useState) to handle any internal state changes. By keeping components pure, we can ensure that they are predictable and easier to debug, as they will always render the same output for the same input. Additionally, pure components can be easily reused and tested in isolation, making them a fundamental building block of React applications.

//Destructuring props in React is a convenient way to extract specific values from the props object and assign them to variables. This can make the code cleaner and more readable. Instead of accessing props using dot notation (e.g., props.name), you can use destructuring to directly extract the desired properties. For example, if you have a component that receives a prop called "pizzaObj", you can destructure it like this: const { name, ingredients, photoName, price } = props.pizzaObj;. This allows you to use the variables name, ingredients, photoName, and price directly in your component without having to reference props.pizzaObj each time. Destructuring can be used for both functional and class components in React, making it a versatile technique for handling props.
function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (pizzaObj.soldOut) {
  //   return null;
  // }

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </div>
  );
}
// function Pizza(props) {
//   // console.log(props);
//   if (props.pizzaObj.soldOut) {
//     return null;
//   }

//   return (
//     <div className="pizza">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price + 3}</span>
//       </div>
//     </div>
//   );
// }
// new Date().toLocaleTimeString() is a JavaScript expression that creates a new Date object representing the current date and time, and then formats it as a localized time string based on the user's locale settings. This means that the output will vary depending on the user's location and language preferences, providing a time format that is familiar and appropriate for their region.

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 8;
  const closeHour = 26;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  // Multiple return statements can be used in a React component to conditionally render different parts of the UI based on certain conditions. For example, in the Footer component, we can use an if statement to check if the restaurant is open or closed based on the current hour. If the restaurant is open, we can return a message inviting customers to visit or order online. If the restaurant is closed, we can return a different message indicating that they are closed and when they will reopen. This allows us to create dynamic and responsive UIs that adapt to different situations and user interactions.

  // if (!isOpen)
  //   return <p>We're closed. We open at {openHour}:00. Come back later :)</p>;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're open today! */}

      {/* Conditional Rendering */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00.Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* Ternary conditional Rendering */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// Extracting JSX into component
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00.Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// / → “Start from home”
// ./ → “Stay where you are”
// ../ → “Go one step back”

const root = ReactDOM.createRoot(document.getElementById("root"));
// React.StrictMode is a wrapper component that helps identify potential problems in an application. It activates additional checks and warnings for its descendants, making it easier to find and fix issues in the code. It does not render any visible UI and does not affect the behavior of the application in production.UI render two times in strict times one for checking errors and one for rendering the actual UI. This is a development-only feature and does not affect the production build of the application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
