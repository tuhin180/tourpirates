import React from "react";

const Question = () => {
  return (
    <div className="bg-yellow-200 rounded p-6">
      <div className="bg-gray-300 rounded-sm m-2">
        <h1>how Does react work</h1>
      </div>
      <div className="bg-teal-200 rounded-sm text-left m-2">
        <h1>Difference Between Props and state</h1>
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
      <div className="bg-lime-200 rounded-sm text-left m-2">
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
