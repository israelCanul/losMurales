import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/header';
import Footer from './components/footer';
//gallery
import ImageGallery from 'react-image-gallery';

import '../style/app.scss';
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

class GeneralInformationMenu extends Component{
  constructor(props){
    super(props)
    this.state={
      showlista : false,
      imagenes:[{
           original:'img/gallery_1.png',
           thumbnail:'img/gallery_1.png',
         }],
     imagenes_last:[{
          original:'img/gallery-last.jpg',
          thumbnail:'img/gallery-last.jpg',
        }],
      itemsMenu:   [
          {link:"/",label:"Home",active:true},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept"},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},
          {link:"gallery-mexican-food.html",label:"Gallery"},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true}
        ]
    }
  }
  render(){
    return(
      <div className="index-page" id="app-wrap"  >
        <Header
          items={this.state.itemsMenu}/>
          <ImageGallery
            ref={i => this._imageGallery = i}
            showThumbnails={false}
            items={this.state.imagenes}
            slideInterval={2000}
            onImageLoad={this.handleImageLoad}/>
          <div className="FirstSection">
            <h1 className="FirstSection-title">Seafood Restaurant & Bar</h1>
            <p className="FirstSection-description">Discover Los Murales, a place where a love of fine art and food comes together, where you will find artistry everywhere you look, from the murals on the walls to the exquisitely presented food on your plate.
              The Los Murales menu is a true marriage of flavors. The finest fish and seafood are blended with fruit, vegetables and spices from all over the world to create  dishes that are a delight for the senses: taste, smell and sight.
              Every bite is a sensation, an experience that you will want to repeat over and over again.
            </p>
          </div>
          <div className="SecondSection row">
            <div className="SecondSection-left side col s12 m12 l6 row">
              <div className="SecondSection-left-img col s12 m6 l12">
                <img src="img/img-section2.jpg" className="img"/>
              </div>
              <div className="SecondSection-left-item side-item col s12 m6 l12">
                <h2 className="side-item-title">
                  Our Chefs
                </h2>
                <p className="side-item-description">
                    Our gastronomic concept has been a labor of love and the culmination of a long and successful career for Royal Resorts Executive Chef Enrique Garcia and he has created an exquisite menu with the talented chefs at The Royal Haciendas, Juan Manuel Fuentes and Daniel Che Chimal. With their unstinting attention to detail and hospitality.
                </p>
              </div>
            </div>
            <div className="SecondSection-right side col s12 m12 l6">
              <div className="side-item col s12 ">
                <h2 className="side-item-title">
                  Our Menu
                </h2>
                <p className="side-item-description">
                    A menu to captivate and savor: the delicate flavors of seafood are paired with a hint of lime and fresh herbs, a touch of chile and the exotic spices of the Far East.<br></br><br></br>
                  Intriguing, exciting, each dish is a voyage of  discovery, a feast for the senses. <br></br><br></br>
                  The finest and freshest fish, shrimp, lobster, scallops and other fruits de mer from the Caribbean, Gulf and Pacific coasts of Mexico occupy pride of place on our thoughtful menu along with cold-water favorites such as salmon, sole and Chilean sea bass.
                  <br></br><br></br>
                  Meat lovers will enjoy our hearty prime steaks, pork and poultry, and there is a delightful selection of starters, soups and salads for a lighter meal.
                  <br></br><br></br>
                  Ask your waiter to recommend a wine to go with your menu choices.
                  <br></br><br></br>
                  Each wine in our cellar was lovingly selected to bring out the full flavors of our dishes. To Set the Mood Here are some of our chef’s recommendations to tempt your taste buds
                </p>
                <a className="side-item-button">
                  see our menu
                </a>
              </div>
            </div>
          </div>
          <div className="thirdSection row">
            <div className="col s12 m6 l6 thirdSection-item">
              <h1 className="thirdSection-item-title">Concept</h1>
              <p className="thirdSection-item-description">
                “An excellent addition to The Royal Haciendas.”
                  Art is present throughout Los Murales from the eclectic tableware to the sweeping views of the hacienda
                  gardens, but its crowning feature – and that to which the restaurant owes its name – is the series of six
                  Byzantine mosaic murals.
              </p>
            </div>
            <div className="col s12 m6 l6 thirdSection-img offset-m6 offset-l6">
              <img src="img/bg-third.jpg" />
            </div>
          </div>
          <ImageGallery
            ref={i => this._imageGallery = i}
            showThumbnails={false}
            showBullets={true}
            showPlayButton={false}
            showFullscreenButton={false}
            items={this.state.imagenes_last}
            slideInterval={2000}
            onImageLoad={this.handleImageLoad}/>
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
  componentWillMount(){

  }
}

ReactDOM.render(<GeneralInformationMenu />, document.getElementById('app'));
