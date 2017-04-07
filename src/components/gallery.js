import React,{Component} from 'react';
import {maxWidth} from '../config';

var keys = {37: 1, 38: 1, 39: 1, 40: 1};// values of keyboard events


class Galeria extends Component{
  constructor(props){
    super(props);
    this.state={
      openLightBox : false,
      items: this.props.columns,
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
      cube:{
        width:0,
        height: 0
      },
      imageSelected:0,
    }
    this.renderImages = this.renderImages.bind(this);
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    //this.renderImageLightBox = this.renderImageLightBox.bind(this);
    this.toggleLightBox = this.toggleLightBox.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  componentWillMount(){
    this.onResizeComponent();
  }
  onResizeComponent(e){
    let w=0,h=0;
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});
    if(document.documentElement.clientWidth > maxWidth){
      w = (maxWidth / parseInt(this.state.items.desktop));
    }else if(document.documentElement.clientWidth > 1400){
      w = (document.documentElement.clientWidth / parseInt(this.state.items.desktop));
    }else if(document.documentElement.clientWidth > 600){
      w = (document.documentElement.clientWidth / parseInt(this.state.items.tablet));
    }else {
      w = (document.documentElement.clientWidth / parseInt(this.state.items.mov));
    }
    h= (w * 66.666)/100;
    this.setState({cube : {width : w,height : h} });
  }
  handleMouseEnter(e){
    e.target.className="image active";
  }
  handleMouseLeave(e){
    e.target.className="image";
  }
  renderImages(){
    var that = this;
    return this.props.items.map((image,id)=>{
      return(
        <div key={id} className="item-gallery" style={{width:that.state.cube.width +"px",height: that.state.cube.height+"px"}}>
          <img className="image"
          Item={id}
          src={image}
          onClick={this.renderImageLightBox.bind(this,id)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
           />
        </div>
      );
    })
  }
  renderImageLightBox(img,e){
    this.setState({imageSelected : img});
    this.setState({openLightBox : !this.state.openLightBox});
    disableScroll();
  }
  toggleLightBox(e){
    this.setState({openLightBox : !this.state.openLightBox});
    enableScroll();
  }
  changeImage(img,e){

    var id = img;
    if(id < 0 ){
      id = this.props.items.length - 1;
    }
    if(id >= this.props.items.length){
      id = 0;
    }
    this.setState({imageSelected : id});
  }
  render(){
    return(
      <div className="gallery-component-narilearsi">
        <div className="wrap-items">
          {
            this.renderImages()
          }
        </div>
        <div className={`modal-gallery ${this.state.openLightBox?"active":""}`} >
          <div className="wrap-menu">
            <div className="cerrar">
                <img onClick={this.toggleLightBox} src="img/error.png" alt="Cerrar" />
            </div>
          </div>
          <div className="control control-left" onClick={this.changeImage.bind(this,this.state.imageSelected - 1)}>
            <img src="img/back.png" alt=""   />
          </div>
          <div className="content-img" >
            <img src={this.props.items[this.state.imageSelected]} ref={r=>this.imageModal = r} alt="" />
          </div>
          <div className="control control-right " onClick={this.changeImage.bind(this,this.state.imageSelected + 1)}>
            <img src="img/next.png" alt=""  />
          </div>

        </div>
      </div>
    )
  }
}


function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}


function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll(){
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}









export default Galeria;
