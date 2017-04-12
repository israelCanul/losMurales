import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
//gallery
import ImageGallery from 'react-image-gallery';

class MenuChef extends  Component{
  constructor(props){
    super(props);
    this.state={
      itemsMenu:[
          {link:"/",label:"Home"},
          {link:"menu_chefs.html",label:"Menu & Chefs",active:true},
          {link:"#",label:"Concept"},
          {link:"#",label:"Group & Events"},
          {link:"gallery.html",label:"Gallery"},
          {link:"testimonials.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations.html",label:"Book a Table",bookAction:true}
        ],
      imagenes_last:[{
           original:'img/gallery/menu-chefs.png'
         }],
    }
  }
  render(){
    return(
      <div id="app-wrap"  className="menuchef-page">
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

        <Menu />

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

ReactDOM.render(<MenuChef />, document.getElementById('app'));
