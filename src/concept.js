import React,{Component} from 'react';
import ReactDOM from 'react-dom';


//components
import Header from './components/header';
import Footer from './components/footer';

class Concept extends Component{
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
      itemsMenu: [
          {link:"/",label:"Home"},
          {link:"mexican-food-menu.html",label:"Menu & Chefs"},
          {link:"best-authentic-mexican-restaurant-riviera-maya.html",label:"Concept",active:true},
          {link:"restaurants-in-riviera-maya-groups-and-events.html",label:"Group & Events"},
          {link:"gallery-mexican-food.html",label:"Gallery"},
          {link:"trip-advisor-reviews.html",label:"Testimonials"},
          {link:"contact-us.html",label:"Contact Us"},
          {link:"reservations-online.html",label:"Book a Table",bookAction:true}
        ]
    }
    this.onResizeComponent = this.onResizeComponent.bind(this);
    window.addEventListener("resize",this.onResizeComponent);// se agrega un listener que lea el tamaño de la ventana
  }
  onResizeComponent(e){
    let that = this;
    this.setState({window : {
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }});

    // con esto se obtiene el tamaño de la imagen y se renderiza de acuerdo a su ancho actual
    // if(document.documentElement.clientWidth >= 767){
    //     this.setState({heightContent : this.wrapGallery.clientHeight +"px"});
    //     this.setState({heightFinal : this.galleryFinal.clientHeight +"px"});
    // }else{
    //   this.setState({heightContent: "auto"});
    //   this.setState({heightFinal : "auto"});
    // }
  }
  componentDidMount(){
    let that = this;
    setTimeout(function(){
      that.onResizeComponent();
    },100);

  }
  render(){
    return(
      <div className="concept-page" id="app-wrap">
        <Header
          items={this.state.itemsMenu}/>
        <div className="row info">
          <div className="col s12 info-image" ref={r => this.wrapGallery = r }>
            <img src="img/gallery/concept-gallery.jpg" />
          </div>
          <div className="col s12 info-intro">
            <h1>An excellent addition to The Royal Haciendas</h1>
            <h2>Concept</h2>
            <p>
              Art is present throughout Los Murales from the eclectic tableware to the sweeping views of the hacienda gardens, but its crowning feature – and that to which the restaurant owes its name – is the series of six Byzantine mosaic murals.
                They are truly magnificent. Inspired by the paintings of Cuban artist Arturo Montoto, they are the creation of the Perdomo Family, masters of mosaic craftsmanship.
            </p>
          </div>
          <div className="col s12 info-content  row">
            <div className="col s12 m6 info-content-title">
              <h1>The Murals</h1>
            </div>
            <div className="col s12 m6 info-content-subtitle">
              <span>“It was absolutely wonderful.”</span>
            </div>
            <div className="col s12 info-content-description">
              <p>
                The Los Murales mosaics depict staples in the tropical kitchen, superbly represented by Cuban mural painter Arturo Montoto and captured in tesserae by the craftsmen at Venetian Mosaics of Mexico, the Perdomo Family workshop.
              </p>
            </div>
          </div>
          <div className="col s12 info-content-textGallery  row">
            <div className="col s12 m5 gallery">
              <img src="img/gallery/concept-gallery-1.jpg" className="item-1" />
              <img src="img/gallery/concept-gallery-2.jpg" className="item-2" />
              <img src="img/gallery/concept-gallery-3.jpg" className="item-3" />
            </div>
            <div className="col s12 m6 l6 offset-l1 text">
              <h2>
                Arturo Montoto
              </h2>
              <p>
                Born in 1953 in the western province of Pinar del Rio, Arturo Montoto is one of Cuba’s leading artists. His work has been the subject of newspaper articles, books, radio and television programs and he has even been captured on film in short documentaries.<br></br><br></br>
                With over 30 solo exhibitions and more than 80 group exhibitions, his paintings and photographs have found their way into private collections in Mexico, Argentina, Brazil, United States, France and Spain.<br></br><br></br>
              </p>
              <h2>
                The Perdomo Family
              </h2>
              <p>
                In 1949, Elpidio Perdomo founded Mosaicos Venecianos de Mexico in Cuernavaca, the first glass mosaic factory in the Americas. He employed gifted Italian glass makers from Venice who were skilled in Murano glass working and mosaics and willing to share their secret color formulas and techniques with local artisans.<br></br><br></br>

                Elpidio eventually relinquished the management of the workshop to his son Manuel Perdomo who embraced local raw materials and developed his own kilns, cutting tools and production processes to create a new enamel colored glass tesserae or tile called “Mexican smalti.<br></br><br></br>

                In the 1960’s, the Perdomo workshop began to use Byzantine artistic mosaic techniques for scenes and religious portraits, under the watchful eyes of artistic directors Jorge Rodriguez Moreno and Luis Scodeller who taught their employees how to do drawings for mosaics and the art of correct tile placement.<br></br><br></br>

                Today, the Perdomo Family and their craftsmen continue to innovate and inspire, setting new standards in the art of mosaics, and their work is on show throughout the country and the world.<br></br><br></br>
              </p>
              <h2>
                Our Murals Take Shape
              </h2>
              <p>
                Arturo Montoto’s paintings were digitalized and a plotter was printed for the craftsmen at the Perdomo Family workshop. The tesserae were carefully selected and cut, pieced together and then numbered individually.<br></br><br></br>
              </p>
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



ReactDOM.render(<Concept />, document.getElementById('app'));
