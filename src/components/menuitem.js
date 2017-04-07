import React,{Component} from 'react';

class MenuItem extends Component{
  constructor(props){
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }
  renderItems(){
    return this.props.items.items.map((item,id)=>{
      return(
        <div key={id} className="col s12 m6 l6 list-items-item">
          <h2>
            {item.title}
          </h2>
          <p>
          {item.subtitle}
          </p>
        </div>
      );
    })
  }
  render(){
    let leftAling = this.props.itemId * this.props.width;
    return(
      <div
      style={{width : this.props.width+"px"}}
      className="menu-items-item row" >
        <div className="title col s12" >
          <span className="title-span">{this.props.items.cat}</span>
        </div>

        <div className="col s12 row list-items">
                {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default MenuItem;
