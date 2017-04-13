import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {CommentsTripAdvisor} from './config';

//components
import Header from './components/header';
import Footer from './components/footer';
import ShowComments from './components/tripadvisor';

//gallery
import ImageGallery from 'react-image-gallery';

class GeneralInformationMenu extends Component{
  constructor(props){
    super(props)
    this.state={
     imagenes_last:[{
          original:'img/gallery/menu-chefs.png'
        }],
      itemsMenu:   [
          {link:"/",label:"Home"},
          {link:"menu_chefs.html",label:"Menu & Chefs"},
          {link:"#",label:"Concept"},
          {link:"groups-&-events.html",label:"Group & Events"},
          {link:"gallery.html",label:"Gallery"},
          {link:"testimonials.html",label:"Testimonials",active:true},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations.html",label:"Book a Table",bookAction:true}
        ],
        items:CommentsTripAdvisor
    }
  }
  //https://www.tripadvisor.com/UserReviewEdit-g150812-d2159424-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html
  render(){
    return(
      <div className="index-page" id="testimonial-wrap"  >
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
        <div className="row description">
          <div className="col s12 description-title row">
            <div className="col s6 description-title-logo">
              <img src="img/logotrip.png" />
            </div>
            <div className="col s6 description-title-title">
              Testimonials
            </div>
            <div className="col s12  description-title-parraf">
              <p>
                A selection of some of the glowing reviews received from diners who enjoyed their meal and had an unforgettable evening at Los Murales.
              </p>
            </div>
            <div className="col s12 description-title-title comments">
              Our Clients Love Us
            </div>
          </div>
          <div className="col s12 row">
                <ShowComments items={this.state.items} />
          </div>
          <div className="row description-title ">
            <div className="description-title-btn">
              <a target="_blank" href="https://www.tripadvisor.com/UserReviewEdit-g150812-d2159424-Los_Murales-Playa_del_Carmen_Yucatan_Peninsula.html">CLICK TO RATE US</a>
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

ReactDOM.render(<GeneralInformationMenu />, document.getElementById('app'));
