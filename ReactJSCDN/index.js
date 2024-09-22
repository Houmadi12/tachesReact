
const {useState} = React;
function Hello() {

  const  [nombre, setNombre]= useState(0);

  const plus = () => { setNombre(nombre + 1)}
  const moins = () => { setNombre(nombre - 1)}

  return (
  <div className="container mt-5 d-flex align-items-center">
    <button className="btn btn-info me-5" onClick={moins}><i className="bi bi-dash-circle-dotted fs-5"></i></button>
      <p className="fs-3">{nombre}</p>
    <button className="btn btn-info ms-5" onClick={plus}><i className="bi bi-plus-circle-dotted fs-5"></i></button>
  </div>);
}


ReactDOM.render(<Hello />, document.getElementById("root"));