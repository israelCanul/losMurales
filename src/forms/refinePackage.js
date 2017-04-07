import React,{Component} from 'react';


export default class Refine extends Component{
  constructor(props){
    super(props);
    this.state={
      hotelName : 'Royal Sands',
      roomNum : '',
      roomNumValidatorText : false ,
      ynRefine : false ,
    }
    this.roomNumOnChange = this.roomNumOnChange.bind(this);
    this.hotelNameOnChange = this.hotelNameOnChange.bind(this);
    this.onInputKeyupNumber = this.onInputKeyupNumber.bind(this);
    this.toggleRefine = this.toggleRefine.bind(this);
  }
  onInputKeyupNumber(e){
    e.target.value= e.target.value.replace(/[^0-9]/g, '');
  }
  hotelNameOnChange(e){
    this.setState({hotelName : e.target.value});
  }
  roomNumOnChange(e){
    if(e.target.value != ''){
      this.setState({roomNum : e.target.value ,roomNumValidatorText : true });
    }else{
      this.setState({roomNum : '' ,roomNumValidatorText : false });
    }
  }
  toggleRefine(){
    this.setState({ynRefine : false});
  }
  render(){
    return(
      <div className="Refine">
        <div className="Refine-element">
          <select className="form-control" name="hotelName" value={this.state.hotelName} onChange={this.hotelNameOnChange}>
            <option value="Royal Sands">Royal Sands</option>
            <option value="Royal Cancun">Royal Cancun</option>
            <option value="Royal Caribbean">Royal Caribbean</option>
            <option value="Royal Islander">Royal Islander</option>
            <option value="Royal Haciendas">Royal Haciendas</option>
          </select>
        </div>
        <div className="Refine-element">
          <input type="text"  value={this.state.roomNum} onChange={this.roomNumOnChange} id="roomNum" name="roomNum" placeholder="Room Number"/>
            <label className={`validator ${this.state.roomNumValidatorText? " success" : " error"}`} ref={i=>this.roomNumLabelValidator=i}></label>
        </div>
        <div className="switch">
          <label className="azul-fuerte-diseno">
              Refine Package
              <input type="checkbox" name="ynRefine" onChange={this.toggleRefine} value={this.state.ynRefine} id="ynRefine" />
              <span className="lever"></span>
          </label>
        </div>
        <p className="Refine-parraf">Refine Package only same-day reservations are accepted</p>
      </div>
    );
  }
}
