import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
import Footer from './components/footer';
import BookForm from './forms/book_engine.js';

//gallery
import ImageGallery from 'react-image-gallery';

class Reservation extends Component{
  constructor(props){
    super(props)
    this.state={
      imagenes_last:[{
           original:'img/gallery-last.jpg',
           thumbnail:'img/gallery-last.jpg',
         }],
      itemsMenu:[
          {link:"/",label:"Home"},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},
          {link:"gallery-mexican-food.html",label:"Gallery"},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true,active:true}
        ]
    }
  }
  render(){
    return(
      <div className="reservation-page" id="app-wrap"  >
      <Header
        items={this.state.itemsMenu}/>

        <ImageGallery
          ref={i => this._imageGallery = i}
          showThumbnails={false}
          showBullets={true}
          showPlayButton={false}
          showFullscreenButton={false}
          items={this.state.imagenes_last}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
        <BookForm />
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


ReactDOM.render(<Reservation />, document.getElementById('app'));
