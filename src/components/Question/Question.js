import React from "react";

const Question = () => {
  return (
    <div className="bg-yellow-200 rounded p-6">
      <div className="bg-gray-300  text-left rounded-sm m-2 p-4">
        <h1 className="text-3xl">how Does react work</h1>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an
          open-source, component-based front end library responsible only for
          the view layer of the application. It is maintained by Facebook. React
          uses a declarative paradigm that makes it easier to reason about your
          application and aims to be both efficient and flexible. It designs
          simple views for each state in your application, and React will
          efficiently update and render just the right component when your data
          changes. The declarative view makes your code more predictable and
          easier to debug. A React application is made of multiple components,
          each responsible for rendering a small, reusable piece of HTML.
          Components can be nested within other components to allow complex
          applications to be built out of simple building blocks. A component
          may also maintain an internal state – for example, a TabList component
          may store a variable corresponding to the currently open tab.
        </p>
      </div>
      <div className="bg-teal-200 rounded-sm text-left m-2 p-4">
        <h1 className="text-3xl">Difference Between Props and state</h1>
        <h3>props</h3>
        <p>
          The Data is passed from one component to another.It is Immutable
          (cannot be modified). Props can be used with state and functional
          components.Props are read-only
        </p>

        <h3>State</h3>
        <p>
          The Data is passed within the component only. It is Mutable ( can be
          modified). tate can be used only with the state components/class
          component. State is both read and write.
        </p>
      </div>
      <div className="bg-lime-200 rounded-sm text-left m-2 p-4">
        <h1 className="text-3xl">UseEffect use withoud loading data</h1>
        <p>
          The main advantage of react hooks is the re-usability of stateful
          logic. It can be done with the help of custom hooks. Without changing
          component hierarchy, you can reuse stateful logic and it is easy to
          share custom hooks with other components. In react class component, we
          split our work in different life-cycle methods like componentDidMount,
          componentDidUpdate and componentWillUnmount, but in hooks, we can do
          everything in a single hook called useEffect.In class component, we
          have to use this keyword and also we have to bind event listeners,
          which increases complexity. This is prevented in react functional
          components. React class components don’t minify very well, and they
          make hot reloading flaky and unreliable.
        </p>
      </div>
    </div>
  );
};

export default Question;
