import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

//components
import Header from './components/header';
import Footer from './components/footer';




const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: '#db742f',
    height: 20, width: 100, top: -20, left: -30,padding:"5px 10px"
  }}>
    <img src="img/logo.png" style={{width:100+"%"}} />
  </div>
);


class ContactUs extends  Component{
  constructor(props){
    super(props);
    this.state={
      center: {lat: 20.6563, lng: -87.0425},
      zoom: 17,
      heightContent : 0,
      heightFinal: 0,
      window : {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      },
      itemsMenu:[
          {link:"/",label:"Home"},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},
          {link:"gallery-mexican-food.html",label:"Gallery"},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us",active:true},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true}
        ]
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
    window.addEventListener("load", this.onResizeComponent);
  }
  onResizeComponent(e){
    let that = this;
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});

    // con esto se obtiene el tamaño de la imagen y se renderiza de acuerdo a su ancho actual
    if(document.documentElement.clientWidth >= 767){
        this.setState({heightContent : this.wrapGallery.clientHeight +"px"});
        this.setState({heightFinal : this.galleryFinal.clientHeight +"px"});
    }else{
      this.setState({heightContent: "auto"});
      this.setState({heightFinal : "auto"});
    }
  }
  componentDidMount(){

  }
  render(){
    return(
      <div id="app-wrap"  className="contactus-page">
        <Header
          items={this.state.itemsMenu}/>
        <div className="content">
          <div className="content-map">
              <GoogleMapReact
                options={{
                  gestureHandling: 'greedy'
                }}
                ref={r=> this.mapa = r}
                bootstrapURLKeys={{key: "AIzaSyB4e8nTaz9OyFFa6UBFz-8wMyBGTlBbS3k",language: 'in',gestureHandling: 'cooperative'}}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}>
                <AnyReactComponent
                  lat={this.state.center.lat}
                  lng={this.state.center.lng}
                  text={'Kreyser Avrora'}/>
              </GoogleMapReact>
          </div>
          <div className="row info">
            <div className="col s12 m8 info-image" ref={r => this.wrapGallery = r }>
              <img src="img/gallery/contactus-gallery.jpg" />
            </div>
            <div className="content-contact col s12 m4 info-description" style={{height: this.state.heightContent}}>
              <div className="info-description-content" ref={r => this.wrapContent = r }  >
                <img src="img/gallery/contactus-gallery-bg.jpg" />
                <h2>Contact us</h2>
                <p>Open daily: 5:00 - 10:00 p.m.<br></br>
                  Phone: (998) 881-0100
                </p>
                <h2>Address</h2>
                <p>
                  Mza. 70 Lt. 2 Carretera Chetumal-Puerto Juárez Km289+10, Centro Playa del Carmen, Solidaridad Q. Roo. 77710
                </p>
              </div>
            </div>
          </div>
          <div className="content-brothers row">
              <h2>Meet our sister Restaurants</h2>
              <div className="col s12 m4 item"><img src="img/gallery/sisal-brother.jpg"/></div>
              <div className="col s12 m4 item"><img src="img/gallery/captains-brother.png"/></div>
              <div className="col s12 m4 item"><img src="img/gallery/conquistador-brother.png"/></div>
          </div>
          <div className="content-final row">
            <div className="col s12 m6 item" ref={r => this.galleryFinal = r }><img src="img/gallery/camionetas.jpg"/></div>
            <div className="col s12 m6 item content" style={{height: this.state.heightFinal}}>
              <img src="img/logo-naranja.png" />
              <p>Looking for the best and safest way to reach your hotel or back to the airport</p>
              <a href="#">We are here to help!</a>
            </div>
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
    );
  }
}


ReactDOM.render(<ContactUs />, document.getElementById('app'));
