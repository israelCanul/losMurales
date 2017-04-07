import React,{Component} from 'react';

class Footer extends Component{
  constructor(props){
    super(props);

    this.renderSocial = this.renderSocial.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }
  renderMenu(){
    return  this.props.items.map((item, id)=>{
      return (
        <div key={id} className="col s12 m6 l6 footer-items-item">
          <a className={`${item.active?"active":""}`} href={item.link}>{item.label}</a>
        </div>);
    });
  }
  renderSocial(){
    return  this.props.socialLinks.map((social, id)=>{
      return <img key={id} src={social.img} />;
    });
  }
  render(){
    return(
      <div className="footer row">
        <div className="col s12 m3 l4 footer-description">
          <img src={this.props.logo} />
          <p dangerouslySetInnerHTML={{__html: this.props.description}} />
        </div>
        <div className="col s12 m6 l4 row footer-items">
          {this.renderMenu()}
        </div>
        <div className="col s12 m3 l4 footer-social">
          <h2 className="footer-social-title">
            Follow Us
          </h2>
          <div className="footer-social-links">
          {this.renderSocial()}
          </div>
        </div>
        <div className="col s12 footer-last">
        {
          this.props.rights
        }
        </div>

      </div>
    );
  }
}

export default Footer;
