class Fotos extends React.Component {
  render() {
      return(
          <div class="foto-area">{this.props.foto}</div>
      )
  }
}


let element = (
  <div>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-1.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-2.png"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-3.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-4.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-5.jpg"/>}></Fotos>

  </div>
);
ReactDOM.render(element, document.getElementById('root'))