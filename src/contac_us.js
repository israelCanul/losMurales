import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

//components
import Header from './components/header';
import Footer from './components/footer';

//gallery
import ImageGallery from 'react-image-gallery';

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
      itemsMenu:[
          {link:"/",label:"Home"},
          {link:"menu_chefs.html",label:"Menu & Chefs"},
          {link:"#",label:"Concept"},
          {link:"#",label:"Group & Events"},
          {link:"gallery.html",label:"Gallery"},
          {link:"testimonials.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us",active:true},
          {link:"reservations.html",label:"Book a Table",bookAction:true}
        ],
      imagenes_last:[{
           original:'img/gallery-last.jpg',
           thumbnail:'img/gallery-last.jpg',
         }],
    }
  }
  //<iframe style={{width:"600px", height:"450px",border:"0"}} frameBorder="0"  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAZN05BVdTo8RPAWALZ3k4F4&key=AIzaSyB4e8nTaz9OyFFa6UBFz-8wMyBGTlBbS3k" allowFullScreen ></iframe>
  componentDidMount(){
    console.log(this.mapa);
  }
  render(){
    return(
      <div id="app-wrap"  className="contactus-page">
        <Header
          items={this.state.itemsMenu}/>
        <ImageGallery
          showThumbnails={false}
          showBullets={true}
          showPlayButton={false}
          showFullscreenButton={false}
          items={this.state.imagenes_last}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
          <div className="content">
            <div className="row">
              <div className="content-contact col s12 m6">
                <h2>Contact us</h2>
                <p>
                Open Daily, 5:00 – 10:00 p.m.<br></br>
                Tel.: (998) 881-0100
                </p>
              </div>
              <div className="content-address col s12 m6">
                <h2>Address</h2>
                <p>
                  Mza. 70 Lt. 2 Carretera Chetumal-Puerto Juárez Km289+10, Centro Playa del Carmen Solidaridad Q. Roo. 77710
                </p>
              </div>
            </div>
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
            <div className="content-address">
              <h2>Meet our sister Restaurants</h2>
              <p>

              <a href="http://www.haciendasisal.com" target="_blank">Hacienda Sisal</a> Traditional Mexican Cuisine for the 21st century in a typical Mexican setting. Try the margaritas.<br></br>

              <a href="http://captainscoverestaurant.com/" target="_blank">Captain's Cove</a> Romantic dinner by the lagoon. Best sunset landscape in town. Our octopus pizza has no pair.<br></br>

              <a href="http://elconquistadorcancun.com/" target="_blank">El Conquistador</a> Royal Resorts' crown jewel now open to the public. Romantic setting and delicious meals.<br></br>

              <a href="https://elconquistadorcancun.com/" target="_blank">Los Murales</a> Top notch seafood in a beautiful environment made as a tribute for Mexican muralists.<br></br>

              <a href="https://tmttransfers.com/" target="_blank">TMTTransfers</a> Looking for the best and safest way to reach your hotel or back to the airport? We are here to help.<br></br>


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
    );
  }
}


ReactDOM.render(<ContactUs />, document.getElementById('app'));
