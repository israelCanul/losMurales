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
        return <li className="item col s6 m3 l2"  key={id}><a onClick={this.setLeftToMenu.bind(this,id)} className={`btn-cat ${this.state.itemSelected==id?"active":""}`}>{data.cat}</a></li>
    });
  }
  render(){
    return(
      <div className="menu-component menu">
        <div className="menu-description">
          <h2>Our Chefs</h2>
          <p>
            Our gastronomic concept has been a labor of love and the culmination of a long and successful career for Royal Resorts Executive Chef Enrique Garcia and he has created an exquisite menu with the talented chefs at The Royal Haciendas, Juan Manuel Fuentes and Daniel Che Chimal.
            With their unstinting attention to detail and hospitality.
          </p>          
          <h2>Our Menu</h2>
          <p>
            A menu to captivate and savor: the delicate flavors of seafood are paired with a hint of lime and fresh herbs, a touch of chile and the exotic spices of the Far East. Intriguing, exciting, each dish is a voyage of discovery, a feast for the senses.
            <br></br>
            The finest and freshest fish, shrimp, lobster, scallops and other fruits de mer from the Caribbean, Gulf and Pacific coasts of Mexico occupy pride of place on our thoughtful menu along with cold-water favorites such as salmon, sole and Chilean sea bass. <br></br>
            Meat lovers will enjoy our hearty prime steaks, pork and poultry, and there is a delightful selection of starters, soups and salads for a lighter meal.
            Ask your waiter to recommend a wine to go with your menu choices. <br></br>
            Each wine in our cellar was lovingly selected to bring out the full flavors of our dishes.
            To Set the Mood Here are some of our chef’s recommendations to tempt your taste buds <br></br><br></br>

          </p>

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
