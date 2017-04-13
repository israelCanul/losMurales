import React,{Component} from 'react';

const Item = ({data})=>{
  return(
    <div className="commentscomponent-wrap-item col s12 m6">
      <div className="testimonial-comment">
        <div className="user-comment">{data.comment}</div>
        <div className="user"><a target="_blank" href={data.link}>{data.name}</a></div>
      </div>
      <div className="testimonial-meta">
          <div className="image" ><img src={data.image} /></div>
      </div>
    </div>
  );
}

class ShowComments extends Component{
  constructor(props){
    super(props);
      this.renderItems = this.renderItems.bind(this);
  }
  renderItems(){
    return this.props.items.map((item,id)=>{
      return (
        <Item  key={id} data={item} />
    );
    });
  }
  render(){
    return(
      <div className="commentscomponent ">
          <div className="commentscomponent-wrap row">
              {this.renderItems()}
          </div>
      </div>
    );
  }
}
export default ShowComments;
