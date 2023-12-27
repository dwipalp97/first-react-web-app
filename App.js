

const parent = React.createElement("div", { id: "parent" },
     [
        React.createElement("div", { id: "child" },
     [ React.createElement("h1", { id: "heading" }, "Hello World from Child1 h1 tag"), 
     React.createElement("h2", { id: "heading2" }, "Hello World from Child1 h2 tag")]),
     React.createElement("div", { id: "child" },
     [ React.createElement("h1", { id: "heading" }, "Hello World from Child2 h1 tag"), 
     React.createElement("h2", { id: "heading2" }, "Hello World from Child2 h2 tag")])
     ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);