import React,{Component} from 'react';

const Item = ({data})=>{
  return(
    <div className="commentscomponent-wrap-item">
      <div className="testimonial-comment">
        {data.comment}
      </div>
      <div className="testimonial-meta">
        <div className="testimonial-meta-wrapArrow"><div className="arrow"></div></div>
        <div className="testimonial-meta-wrapUser">
          <div className="image" ><img src={data.image} /></div>
          <div className="user"><a target="_blank" href={data.link}>{data.name}</a></div>
        </div>
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
      return <Item  key={id} data={item} />
    });
  }
  render(){
    return(
      <div className="commentscomponent ">
        <h2>Reviews</h2>
          <div className="commentscomponent-wrap">

              {this.renderItems()}

          </div>
      </div>
    );
  }
}
export default ShowComments;
