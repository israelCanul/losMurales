import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/header';
import Footer from './components/footer';

//gallery
import ImageGallery from 'react-image-gallery';

class GeneralInformationMenu extends Component{
  constructor(props){
    super(props)
    this.state={
     imagenes_last:[{
          original:'img/gallery-last.jpg',
          thumbnail:'img/gallery-last.jpg',
        }],
      itemsMenu:   [
          {link:"/",label:"Home"},
          {link:"menu_chefs.html",label:"Menu & Chefs"},
          {link:"#",label:"Concept"},
          {link:"#",label:"Group & Events"},
          {link:"gallery.html",label:"Gallery"},
          {link:"testimonials.html",label:"Testimonials",active:true},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations.html",label:"Book a Table",bookAction:true}
        ]
    }
  }
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
        <div className="row">
        <div id="TA_selfserveprop330" className="col s12 m6 l5">
        <ul id="YPZw13VWwdre" className="TA_links dV1yEVH">
        <li id="SnZcNF6zzC" className="Pnc3FANP">
        <a target="_blank" href="http://www.tripadvisor.com/"><img src="http://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png" alt="TripAdvisor"/></a>
        </li>
        </ul>
        </div>

        <div id="TA_ssnarrowcollectreview228" class="col s12 m6 l5 offset-l2">
        
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
