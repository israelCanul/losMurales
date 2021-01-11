import React, { Component } from "react";
import Refine from "./refinePackage";
import Select from "react-select";
import { DatePicker, DateField } from "react-date-picker";
import moment from "moment";
import axios from "axios";

//configs
import { Murales, ROOT_URL_PRUE, ROOT_URL_PROD } from "../config.js";

import "rc-time-picker/assets/index.css";

var options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];
var optionsC = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];
export default class BookEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rest: 3,
      numAdult: "",
      numChildren: "0",
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      datesDisabled: [],
      timeRanges: [],
      time: "",
      phone: "",
      message: "",

      ynRRGuest: false,
      emailValidatorText: false,
      timeValidator: false,
      phoneValidatorText: false,
      messageValidatorText: false,
      adultValidatorText: false,
      childrenValidatorText: true,
      firstNameValidatorText: false,
      lastNameValidatorText: false,
      requesting: false,
      result: [],
      withoutErrors: false,
      url: ROOT_URL_PROD,
    };
    this.toggleStayingAtRoyal = this.toggleStayingAtRoyal.bind(this);
    this.setRest = this.setRest.bind(this);
    this.adultOnChange = this.adultOnChange.bind(this);
    this.childrenOnChange = this.childrenOnChange.bind(this);
    this.firstNameOnChange = this.firstNameOnChange.bind(this);
    this.lastNameOnChange = this.lastNameOnChange.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.onInputKeyupEmail = this.onInputKeyupEmail.bind(this);
    this.datefieldOut = this.datefieldOut.bind(this);
    this.timeOnChange = this.timeOnChange.bind(this);
    this.setTimeRange = this.setTimeRange.bind(this);
    this.validador = this.validador.bind(this);
    this.phoneOnChange = this.phoneOnChange.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);
    this.formOnSubmit = this.formOnSubmit.bind(this);
    this.prCodeOnChange = this.prCodeOnChange.bind(this);
  }
  componentWillMount() {
    var fecha = moment();
    this.setState({
      date: fecha.format("YYYY-MM-DD"),
      dateValidatorText: true,
      timeValidator: false,
    });
  }
  componentDidMount() {
    this.setTimeRange(Murales);
  }
  toggleStayingAtRoyal(e) {
    this.setState({ ynRRGuest: !this.state.ynRRGuest });
  }
  setRest(e) {
    this.setState({ rest: e.target.value, time: "" });

    this.setTimeRange(Murales);
    this.setState({ datesDisabled: [] });

    var that = this;
    setTimeout(function () {
      that.validador();
    }, 100);
  }
  adultOnChange(val) {
    if (val != null) {
      this.setState({ numAdult: val.value, adultValidatorText: true });
    } else {
      this.setState({ numAdult: "", adultValidatorText: false });
    }
  }
  childrenOnChange(val) {
    if (val != null) {
      this.setState({ numChildren: val.value, childrenValidatorText: true });
    } else {
      this.setState({ numChildren: "", childrenValidatorText: false });
    }
  }
  firstNameOnChange(e) {
    if (e.target.value != "") {
      this.setState({
        firstName: e.target.value,
        firstNameValidatorText: true,
      });
    } else {
      this.setState({ firstName: "", firstNameValidatorText: false });
    }
  }
  lastNameOnChange(e) {
    if (e.target.value != "") {
      this.setState({ lastName: e.target.value, lastNameValidatorText: true });
    } else {
      this.setState({ lastName: "", lastNameValidatorText: false });
    }
  }
  emailOnChange(e) {
    this.setState({ email: e.target.value });
  }
  datefieldOut(date) {
    var fecha = moment(date, "YYYY-MM-DD");
    var today = moment();

    if (today.format("YYYY-MM-DD") == fecha.format("YYYY-MM-DD")) {
      if (parseInt(today.format("HH")) >= 15) {
        this.setState({
          result: "Same-day reservations must be made before 3 p.m.",
          withoutErrors: false,
        });
        alert("Same-day reservations must be made before 3 p.m.");
      } else {
        this.setState({
          date: fecha.format("YYYY-MM-DD"),
          dateValidatorText: true,
          result: "",
          withoutErrors: true,
        });
      }
    } else {
      this.setState({
        date: fecha.format("YYYY-MM-DD"),
        dateValidatorText: true,
        result: "",
        withoutErrors: true,
      });
    }
    this.setState({
      date: fecha.format("YYYY-MM-DD"),
      dateValidatorText: true,
      result: "",
      withoutErrors: true,
    });
  }
  timeOnChange(val) {
    if (val != null) {
      this.setState({ time: val.value });
    } else {
      this.setState({ time: "" });
    }
    this.validador();
  }
  phoneOnChange(e) {
    if (e.target.value != "") {
      this.setState({ phone: e.target.value, phoneValidatorText: true });
    } else {
      this.setState({ phone: "", phoneValidatorText: false });
    }
  }
  messageOnChange(e) {
    if (e.target.value != "") {
      this.setState({ messageValidatorText: true, message: e.target.value });
    } else {
      this.setState({ messageValidatorText: false, message: "" });
    }
  }
  validador() {
    var that = this;
    setTimeout(function () {
      /* Inicio de todas las validaciones con that */

      if (that.state.time != "") {
        that.setState({ timeValidator: true });
      } else {
        that.setState({ timeValidator: false });
      }
      if (that.state.numAdult != "") {
        that.setState({ adultValidatorText: true });
      } else {
        that.setState({ adultValidatorText: false });
      }
      if (that.state.numChildren != "") {
        that.setState({ childrenValidatorText: true });
      } else {
        that.setState({ childrenValidatorText: false });
      }
      if (that.state.email != "") {
        that.setState({ emailValidatorText: true });
      } else {
        that.setState({ emailValidatorText: false });
      }
      if (that.state.firstName != "") {
        that.setState({ firstNameValidatorText: true });
      } else {
        that.setState({ firstNameValidatorText: false });
      }
      if (that.state.lastName != "") {
        that.setState({ lastNameValidatorText: true });
      } else {
        that.setState({ firstNameValidatorText: false });
      }
      if (that.state.phone != "") {
        that.setState({ phoneValidatorText: true });
      } else {
        that.setState({ phoneValidatorText: false });
      }
      if (that.state.message != "") {
        that.setState({ messageValidatorText: true });
      } else {
        that.setState({ messageValidatorText: false });
      }
      if (that.state.prCode != "") {
        that.setState({ prCodeValidatorText: true });
      } else {
        that.setState({ prCodeValidatorText: false });
      }
      /* Final de todas las validaciones con that */
    }, 100);
  }
  setTimeRange(obj) {
    // funcion que genera el rango de tiempo de acuerdo a la configuracion pasada por las variables de cada restaurant
    var ranObj = obj;
    var options = [];
    for (var i = 0; i < 24; i++) {
      var h = i.toString();
      if (i < 10) {
        h = "0" + i.toString();
      }
      for (var y = 0; y < 60; ) {
        var m = y.toString();
        if (y < 10) {
          m = "0" + y.toString();
        }
        var imprime = false;
        ranObj.range.map(function (rango) {
          var h1 = rango[0].split(":");
          var h2 = rango[1].split(":");
          if (i >= parseInt(h1[0]) && i <= parseInt(h2[0])) {
            imprime = true;
            if (parseInt(h1[1]) > 0 && parseInt(h1[0]) == i) {
              if (y < parseInt(h1[1])) {
                imprime = false;
              }
            }

            if (parseInt(h2[0]) == i) {
              if (y > parseInt(h2[1])) {
                imprime = false;
              }
            }
          }
        });
        console.log(imprime);
        if (imprime) {
          var abrev = "hrs";
          if (h >= 12) {
            abrev = "hrs";
          }
          options.push({
            value: h + ":" + m,
            label: h + ":" + m + " " + abrev,
          });
          //console.log(h+":"+m);
        }
        y = y + ranObj.interval;
      }
    }
    this.setState({ timeRanges: options });
  }
  prCodeOnChange(e) {
    if (e.target.value != "") {
      this.setState({ prCode: e.target.value, prCodeValidatorText: true });
    } else {
      this.setState({ prCode: "", prCodeValidatorText: false });
    }
  }
  render() {
    var refineWindow;
    if (this.state.ynRRGuest) {
      refineWindow = <Refine ref={(ref) => (this.refineWindow = ref)} />;
    }
    var btn;
    if (
      this.state.emailValidatorText &&
      this.state.timeValidator &&
      this.state.phoneValidatorText &&
      this.state.messageValidatorText &&
      this.state.adultValidatorText &&
      this.state.childrenValidatorText &&
      this.state.firstNameValidatorText &&
      this.state.lastNameValidatorText &&
      !this.state.requesting
    ) {
      btn = <button type="submit">MAKE YOUR RESERVATION</button>;
    }

    return (
      <div className="row" id="BookEngine">
        <h1 className="BookEngine-title col s12">Online Reservations</h1>
        <div className="col s12 m5 gallery">
          <img src="img/gallery/concept-gallery-1.jpg" className="item-1" />
          <img src="img/gallery/concept-gallery-2.jpg" className="item-2" />
          <img src="img/gallery/concept-gallery-3.jpg" className="item-3" />
        </div>
        <div className="col s12 m7 l6 offset-l1 BookEngine">
          <form className="BookEngine-form" onSubmit={this.formOnSubmit}>
            <h2
              className="BookEngine-form-title"
              style={{ marginBottom: "5px" }}
            >
              Book your table
            </h2>
            <div className="BookEngine-form-element">
              <select
                name="rest"
                id="restaurante-reserva"
                onChange={this.setRest}
                value={this.state.rest}
              >
                <option value={Murales.id}>Los Murales</option>
              </select>
            </div>
            <div className="BookEngine-form-element">
              <div>
                <DateField
                  forceValidDate
                  dateFormat={"YYYY-MM-DD"}
                  showClock={false}
                  updateOnDateClick={true}
                  collapseOnDateClick={true}
                  value={this.state.date}
                  footer={false}
                  minDate={moment()}
                  maxDate={moment().add(7, "days")}
                  ref={(i) => (this.selectedDate = i)}
                >
                  <DatePicker
                    onChange={this.datefieldOut}
                    style={{ padding: 10 }}
                    ref="checkinDate"
                    navigation={true}
                    locale="en"
                    forceValidDate={true}
                    highlightWeekends={true}
                    highlightToday={false}
                    weekNumbers={true}
                    weekStartDay={0}
                    weekNumbers={false}
                    dayDisable={this.state.datesDisabled}
                  />
                </DateField>
              </div>
            </div>
            <div className="BookEngine-form-element">
              <Select
                onChange={this.timeOnChange}
                placeholder="Schedule"
                searchable={false}
                options={this.state.timeRanges}
                value={this.state.time}
              />
              <label
                className={`validator ${
                  this.state.timeValidator ? "success" : "error"
                }`}
                ref={(i) => (this.timeLabelValidator = i)}
              >
                {" "}
                {`${this.state.timeValidator ? "" : "Time is required"}`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <Select
                onChange={this.adultOnChange}
                placeholder="Adults Number"
                searchable={false}
                options={options}
                value={this.state.numAdult}
              />
              <label
                className={`validator ${
                  this.state.adultValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.adultLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.adultValidatorText
                    ? ""
                    : "Adults number required or must be higher that 0"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <Select
                onChange={this.childrenOnChange}
                searchable={false}
                placeholder="Children Number"
                options={optionsC}
                value={this.state.numChildren}
              />
              <label
                className={`validator ${
                  this.state.childrenValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.childrenLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.childrenValidatorText
                    ? ""
                    : "Children number required or must be higher that 0"
                }`}{" "}
              </label>
            </div>
            <h2 className="BookEngine-form-title">Contact Details</h2>
            <div className="BookEngine-form-element">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={this.firstNameOnChange}
                value={this.state.firstName}
                className="text reservation_name required"
              />
              <label
                className={`validator ${
                  this.state.firstNameValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.firsNameLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.firstNameValidatorText
                    ? ""
                    : "First Name is required"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={this.lastNameOnChange}
                className="text reservation_name required"
              />
              <label
                className={`validator ${
                  this.state.lastNameValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.lastNameValidator = i)}
              >
                {" "}
                {`${
                  this.state.lastNameValidatorText
                    ? ""
                    : "Last Name is required"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <input
                type="email"
                id="reservation_email"
                name="email"
                onBlur={this.onInputKeyupEmail}
                onKeyUp={this.onInputKeyupEmail}
                onChange={this.emailOnChange}
                value={this.state.email}
                className="tex email required"
                placeholder="Email"
              />
              <label
                className={`validator ${
                  this.state.emailValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.emailLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.emailValidatorText ? "" : "Email Format Incorrect"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <input
                type="text"
                id="reservation_phone"
                name="reservation_phone"
                placeholder="Phone"
                onChange={this.phoneOnChange}
                value={this.state.phone}
                className=""
              />
              <label
                className={`validator ${
                  this.state.phoneValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.phoneLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.phoneValidatorText ? "" : "Phone is required"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">
              <div className="switch">
                <label>
                  Will you be staying at Royal Resorts?
                  <input
                    onChange={this.toggleStayingAtRoyal}
                    type="checkbox"
                    id="members-member"
                    name="ynRRGuest"
                  />
                  <span className="lever"></span>
                </label>
              </div>
            </div>
            <div className="BookEngine-form-refine">{refineWindow}</div>
            <div className="BookEngine-form-element">
              <textarea
                id="reservation_message"
                onChange={this.messageOnChange}
                value={this.state.message}
                name="note"
                placeholder="Message"
                rows="6"
                aria-required="true"
              />
              <label
                className={`validator ${
                  this.state.messageValidatorText ? "success" : "error"
                }`}
                ref={(i) => (this.phoneLabelValidator = i)}
              >
                {" "}
                {`${
                  this.state.messageValidatorText ? "" : "Message is required"
                }`}{" "}
              </label>
            </div>
            <div className="BookEngine-form-element">{btn}</div>
            <div className="BookEngine-form-element">
              <p
                className={`result ${
                  this.state.withoutErrors ? " success" : " error"
                }`}
              >
                {this.state.result}
              </p>
            </div>
          </form>
        </div>
        <div className="Modal">
          <div
            className={`Modal-wrap ${this.state.requesting ? "active" : ""}`}
          >
            <div className="Modal-wrap-content">
              <div className="loader">
                <div className="line-spin-fade-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  formOnSubmit(e) {
    e.preventDefault();
    var url = "";
    var request = "";
    var that = this;
    if (
      this.state.emailValidatorText &&
      this.state.timeValidator &&
      this.state.phoneValidatorText &&
      this.state.messageValidatorText &&
      this.state.adultValidatorText &&
      this.state.childrenValidatorText &&
      this.state.firstNameValidatorText &&
      this.state.lastNameValidatorText &&
      this.refineWindow
    ) {
      url = `${this.state.url}?rest=${encodeURIComponent(
        this.state.rest
      )}&firstName=${encodeURIComponent(
        this.state.firstName
      )}&lastName=${encodeURIComponent(
        this.state.lastName
      )}&date=${encodeURIComponent(
        this.state.date
      )}&time_submit=${encodeURIComponent(
        this.state.time
      )}&numAdult=${encodeURIComponent(
        this.state.numAdult
      )}&numChildren=${encodeURIComponent(this.state.numChildren)}&${
        this.state.ynRRGuest ? "ynRRGuest=on&" : ""
      }hotelName=${encodeURIComponent(
        this.refineWindow.state.hotelName
      )}&roomNum=${encodeURIComponent(this.refineWindow.state.roomNum)}&${
        this.refineWindow.state.ynRefine ? "ynRefine=on&" : ""
      }&reservation_phone=${encodeURIComponent(
        this.state.phone
      )}&email=${encodeURIComponent(
        this.state.email
      )}&note=${encodeURIComponent(this.state.message)} `;
    } else if (
      this.state.emailValidatorText &&
      this.state.timeValidator &&
      this.state.phoneValidatorText &&
      this.state.messageValidatorText &&
      this.state.adultValidatorText &&
      this.state.childrenValidatorText &&
      this.state.firstNameValidatorText &&
      this.state.lastNameValidatorText
    ) {
      url = `${this.state.url}?rest=${encodeURIComponent(
        this.state.rest
      )}&firstName=${encodeURIComponent(
        this.state.firstName
      )}&lastName=${encodeURIComponent(
        this.state.lastName
      )}&date=${encodeURIComponent(
        this.state.date
      )}&time_submit=${encodeURIComponent(
        this.state.time
      )}&numAdult=${encodeURIComponent(
        this.state.numAdult
      )}&numChildren=${encodeURIComponent(this.state.numChildren)}&${
        this.state.ynRRGuest ? "ynRRGuest=on&" : ""
      }reservation_phone=${encodeURIComponent(
        this.state.phone
      )}&email=${encodeURIComponent(
        this.state.email
      )}&note=${encodeURIComponent(this.state.message)} `;
    }
    if (url != "" && !this.state.requesting) {
      this.setState({ requesting: true });
      request = axios
        .get(url)
        .then(function (response) {
          console.log(response);
          that.setState({ requesting: false });
          if (response.data.code == 0) {
            that.setState({
              result: response.data.result[0],
              withoutErrors: false,
            });
          } else {
            that.setState({
              result: "Your Reservation Code : " + response.data.result[0],
              withoutErrors: true,
            });
          }
        })
        .catch(function (error) {
          that.setState({ requesting: false });
        });
    } else {
      console.log("no valido");
      this.validador();
    }
  }
  disabledMinutes(h) {
    switch (h) {
      case 1:
        return generateOptions(60, [30]);
      case 2:
        return generateOptions(60, [0]);
      default:
        return generateOptions(60, [0, 30]);
    }
  }

  onInputKeyupNumber(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }
  onInputKeyupEmail(e) {
    var str = e.target.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(str)) {
      this.setState({ emailValidatorText: false });
    } else {
      this.setState({ emailValidatorText: true });
    }
    //return re.test(str);
  }
}
