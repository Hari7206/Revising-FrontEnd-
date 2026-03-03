let container = document.getElementById('container')

let h1 = React.createElement("h1", null, "Hello from separate JS file 🚀");
let h2 = React.createElement("h1", null, "this is the first pilot of the js ");
let div = React.createElement("div"  , {id: 'main'}  , [h1  , h2])

const root = ReactDOM.createRoot(container);
root.render(div)