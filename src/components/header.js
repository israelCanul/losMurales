import React,{Component} from 'react';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      openMenu : false,
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    this.renderMenuMovil = this.renderMenuMovil.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.renderItems = this.renderItems.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  onResizeComponent(e){
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});
    if(document.documentElement.clientWidth<= 1199){
      this.setState({openMenu : false});
    }
  }
  openMenu(e){
    e.preventDefault();
    this.setState({openMenu : !this.state.openMenu});
  }
  renderMenuMovil(){
    if(this.state.window.width <= 1199){
      return(
        <div className="wrap-menuMovil">
          <div onClick={this.openMenu} className={`icon burger  ${this.state.openMenu ? "open":""}`} >
              <div className="square bg-color-white item1"></div>
              <div className="square bg-color-white item2"></div>
              <div className="square bg-color-white item3"></div>
          </div>
        </div>
      )
    }
  }
  renderItems(){
    return this.props.items.map((item,id)=>{
      return <li key={id} className={`option ${item.active?"active":""} ${item.bookAction?"book-action":""}`}><a href={item.link}>{item.label}</a></li>;
    });
  }
  render(){
    return(
      <header className="header-component">
        <nav className="nav">
          <div className="nav-wrap-logo">
            <div className="wrap-logo"><img src="img/logo.png" className="logo" /></div>
            {this.renderMenuMovil()}
          </div>
          <div className={`nav-wrap-options ${this.state.openMenu ? "open":""}`}>
            <ul className="options">
              {this.renderItems()}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
export default Header;
