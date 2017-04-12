import React,{Component} from 'react';
import {maxWidth,MenuMurales} from '../config';
import MenuItem from './menuitem';

class Menu extends Component{
  constructor(props){
    super(props);
    this.state={
      items : MenuMurales,
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
      positionMenu : "0px",
      itemSelected: 0,
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderCats = this.renderCats.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  componentWillMount(){
    this.onResizeComponent();
  }
  onResizeComponent(e){
    let w = document.documentElement.clientWidth;
    if(document.documentElement.clientWidth > maxWidth){
      w = maxWidth;
    }
    this.setState({window : {
      width:w,
      height:document.documentElement.clientHeight
    }});
  }
  setLeftToMenu(id,e){
    var left1 = this.state.window.width * id;
    this.setState({positionMenu : "-"+left1+"px",itemSelected:id});
  }
  renderItems(){
    return this.state.items.map((data,id)=>{
        return <MenuItem key={id} items={data} itemId={id}  width={this.state.window.width} height={this.state.window.height}  />
    });
  }
  renderCats(){
    return this.state.items.map((data,id)=>{
        return <div className="item col s12 m3"  key={id}><a onClick={this.setLeftToMenu.bind(this,id)} className={`btn-cat ${this.state.itemSelected==id?"active":""}`}>{data.cat}</a> <div className="separator"></div></div>
    });
  }
  render(){
    return(
      <div className="menu-component menu">
        <div className="menu-description bg-color-white">
          <h2>Our Menu</h2>
          <p>
            A menu to captivate and savor: the delicate flavors of seafood are paired with a hint of lime and fresh herbs, a touch of chile and the exotic spices of the Far East. Intriguing, exciting, each dish is a voyage of discovery, a feast for the senses.<br></br><br></br>
          </p>

        </div>
        <div className="menu-image">
          <div className="side bg-color-white">

          </div>
          <div className="side bg-color-black">

          </div>
          <div className="wrap-images">
            <img className="imga" src="img/chef-image1.png" />
            <img className="imgb" src="img/chef-image2.png" />
          </div>
        </div>
        <div className="menu-cat">
          <div className="menu-cat-lista row">
            {this.renderCats()}
          </div>
        </div>
        <div className="menu-items">
          <div ref={r => this.menuwrap = r } className="menu-items-wrap" style={{width : this.state.items.length * this.state.window.width+"px",left : this.state.positionMenu }}>
            {this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
