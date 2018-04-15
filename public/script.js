// JS version
const jsContainer = document.getElementById("js");
const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;

// React version
const reactContainer = document.getElementById("react");

ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React ",
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
}
setInterval(render, 1000);


// const reactContainer = document.getElementById("react");

// var helloReact = React.createClass({
//   render: function() {
//     var html = React.createElement(
//       "div",
//       { className: "demo" },
//       this.props.text,
//       React.createElement("input"),
//       React.createElement(
//         "p",
//         null,
//         new Date().toString()
//       )
//     )

//     return html;
//   }
// });


// ReactDOM.render(
//   <helloReact text={"Hello React "} />,
//   document.getElementById('react')
// );

// setInterval(render, 1000);
