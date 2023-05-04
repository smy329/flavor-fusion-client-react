import React from 'react';

const Blog = () => {
  return (
    <div className="text-lg">
      <div className="border-4 border-gray-300 rounded-lg p-3 mb-8 ">
        <h1 className="font-semibold mb-3">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <ul className=" list-disc list-inside p-5">
          <li>
            Uncontrolled components are inputs that manage their state
            internally, without any help from React. This means that the value
            of the input is stored in the DOM instead of in React's state. When
            the user interacts with the input, the input updates its own value
            in the DOM, and the React component can read that value using a ref.
          </li>
          <li>
            Controlled components, on the other hand, are inputs that are fully
            controlled by React. This means that the value of the input is
            stored in React's state, and the component's render method provides
            the current value to the input as a prop. When the user interacts
            with the input, an event handler updates the state, which causes the
            component to re-render with the new value.
          </li>
        </ul>
      </div>
      <div className="border-4 border-gray-300 rounded-lg p-3 mb-8 ">
        <h1 className="font-semibold mb-3">
          2. How to validate React props using PropTypes?
        </h1>
        <p>
          PropTypes is a built-in library in React that allows us to declare the
          types of the props that your components expect to receive. This helps
          us to catch bugs and errors earlier, and makes your code more
          maintainable and understandable. To validate React props using
          PropTypes, we first need to import PropTypes from the 'prop-types'
          package. Then, we can declare the types of our props by adding a
          propTypes object to your component:{' '}
          <i>myProp: PropTypes.string.isRequired</i>
        </p>
      </div>
      <div className="border-4 border-gray-300 rounded-lg p-3 mb-8 ">
        <h1 className="font-semibold mb-3">
          3. Tell us the difference between nodejs and express js.
        </h1>
        <ul className="list-disc list-inside p-5">
          <li>
            Purpose: Node.js provides a runtime environment for executing
            JavaScript code outside of the browser, while Express.js is a web
            application framework built on top of Node.js that provides a set of
            tools and abstractions for building web applications.
          </li>
          <li>
            Core features: Node.js provides low-level functionality for handling
            I/O operations, such as file system access, network communication,
            and process management. Express.js provides higher-level
            abstractions for building web applications, such as routing,
            middleware, and templating.
          </li>
          <li>
            Modularity: Node.js provides a core set of modules for handling I/O
            operations, but most additional functionality must be installed as
            separate packages using the npm package manager. Express.js is built
            as a modular framework, with many optional features available as
            separate middleware packages.
          </li>
          <li>
            Routing: Node.js does not provide a built-in routing mechanism,
            while Express.js provides a powerful and flexible routing system for
            mapping incoming requests to the appropriate code.
          </li>
        </ul>
      </div>
      <div className="border-4 border-gray-300 rounded-lg p-3 mb-8 ">
        <h1 className="font-semibold mb-3">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p>
          In React, a custom hook is a JavaScript function that uses one or more
          of the built-in React hooks (useState, useEffect, useContext, etc.) to
          encapsulate and reuse some behavior or stateful logic across multiple
          components. Custom hooks are a way to share functionality between
          components without having to resort to higher-order components or
          render props. Custom hooks can be created for a variety of reasons,
          such as:
          <ul className="list-disc list-inside p-3">
            <li>
              Reusability: If you find yourself writing the same code or using
              the same logic across multiple components, you can extract that
              logic into a custom hook and reuse it across those components.
            </li>
            <li>
              Encapsulation: Custom hooks can encapsulate complex behavior or
              stateful logic, making it easier to reason about and test.
            </li>
            <li>
              Abstraction: Custom hooks can abstract away implementation details
              and expose a simpler, higher-level API for other components to
              use.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
