import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
import Footer from './components/footer';



class Events extends Component{
  constructor(props){
    super(props)
    this.state={
      styleTextBG : {
        width : 0,
        height : 0
      },
      paddingFinal: 0,
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
      itemsMenu: [
          {link:"/",label:"Home"},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events",active:true},
          {link:"gallery-mexican-food.html",label:"Gallery"},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true}
        ]
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
    window.addEventListener("load", this.onResizeComponent);
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  onResizeComponent(e){
    console.log('e');
    let that = this;
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});

    // con esto se obtiene el tamaño de la imagen y se renderiza de acuerdo a su ancho actual
    let w = this.sectionText.clientWidth;
    let h = (((w*100)/1014) * 0.01) * 1063;

    this.setState({styleTextBG : { width : w , height : h }});

    if(document.documentElement.clientWidth >= 1200){
        let padding = that.gallery.clientHeight - that.wrapSection.clientHeight;
        that.setState({paddingFinal: padding});
    }else{
      this.setState({paddingFinal: 20});
    }
  }
  render(){

    return(
      <div className="events-page" id="app-wrap">
      <Header
        items={this.state.itemsMenu}/>
      <div className="wrap-image">
        <img src="img/gallery/eventos.png" className="wrap-image-img" />
      </div>
      <div className="row descriptions">
        <div className="col s12 descriptions-title">
          <h2>Special Events</h2>
        </div>
        <div className="col s12 m12 l10 offset-l1 row descriptions-images" ref={r => this.wrapSection = r }>
          <div  className="col s12 m6 descriptions-images-text" ref={r => this.sectionText = r } style={{height:this.state.styleTextBG.height+"px"}}>
            <img src="img/events-bg-text.png" className="bg" />
            <p className="says">“The staff made me feel
              like a princess.”</p>
            <p className="text">
              Whether it’s an anniversary dinner you are celebrating or you are looking for an intimate setting for your wedding, Los Murales is an unforgettable venue for every occasion.<br></br>
              You have a choice of two locations: the main restaurant and  the private dining room and the chef, restaurant staff and the Royal Resorts Special Events team are on hand to help you plan the perfect evening.
            </p>
          </div>
          <div className="col s12 m6 descriptions-images-gallery row" ref={r => this.gallery = r }>
            <img src="img/events-bg-gallery-1.png" className=" col s12 m12 l10 img1"/>
            <img src="img/events-bg-gallery-2.png" className=" col s12 m12 l10 img2"/>
          </div>
        </div>
      </div>
      <div className="final row" style={{paddingTop : this.state.paddingFinal+"px"}} >
        <div className="col s12 m6 offset-m6">
          <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit ame"
          </p>
        </div>
      </div>
      <Footer
        description={
          "Seating capacity:  96 dinners </br>"+
          "Reservations required </br>" +
          "Dress code: Casual elegant </br>" +
          "acruz@royalresorts.com </br>" +
          "Tel.: (998) 881-0100"
        }
        logo="img/logo.png"
        items={this.state.itemsMenu}
        socialLinks={[
          {link:"#",img:"img/facebook-logo-2.png",active:true},
          {link:"#",img:"img/twitter-logo.png"}]}
        rights="&#169; 2017 Los Murales All rights reserved" />
      </div>
    )
  }
}


ReactDOM.render(<Events />, document.getElementById('app'));
