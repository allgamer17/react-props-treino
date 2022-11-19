class Fotos extends React.Component {
  render() {
      return(
          <div>
            <div class="foto-area">{this.props.foto}</div>
          </div>
          
      )
  }
}


let element = (
  <div>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-1.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-2.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-3.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-4.jpg"/>}></Fotos>
      <Fotos foto={<img class="foto-class" src="./src/img/foto-5.jpg"/>}></Fotos>

  </div>
);
ReactDOM.render(element, document.getElementById('root'))