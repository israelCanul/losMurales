import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/header';
import Footer from './components/footer';
import Galeria from './components/gallery';

import '../style/app.scss';




class GalleryPage extends Component{
  constructor(props){
    super(props)
    this.state={
      itemsMenu: [
          {link:"/",label:"Home"},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},
          {link:"gallery-mexican-food.html",label:"Gallery",active:true},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true}
        ],
      itemsGallery: [
        'img/gallery/losmurales-1.jpg',
        'img/gallery/losmurales-2.jpg',
        'img/gallery/losmurales-3.jpg',
        'img/gallery/losmurales-4.jpg',
        'img/gallery/losmurales-5.jpg',
        'img/gallery/losmurales-6.jpg',
        'img/gallery/losmurales-7.jpg',
        'img/gallery/losmurales-8.jpg',
        'img/gallery/losmurales-9.jpg',
        'img/gallery/losmurales-10.jpg',
        'img/gallery/losmurales-11.jpg',
        'img/gallery/losmurales-12.jpg',
        'img/gallery/losmurales-13.jpg',
        'img/gallery/losmurales-14.jpg',
        'img/gallery/losmurales-15.jpg',
        'img/gallery/losmurales-16.jpg',
      ]

    }
  }
  render(){
    return(
      <div className="index-page" id="app-wrap"  >
        <Header
          items={this.state.itemsMenu}/>
        <Galeria
          columns="4"
          items={this.state.itemsGallery}
          columns={{
            mov: 1,
            tablet : 3,
            desktop : 4
          }} />
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



ReactDOM.render(<GalleryPage />, document.getElementById('app'));
