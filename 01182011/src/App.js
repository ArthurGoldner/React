import React , { Component } from "react"
import Label from "./Label.js";

export default class App extends Component {

  render(){
    return (
      <>
        <h1> Hello Word! </h1>
        <h2> Olá Mundo! </h2>
        <Label nome ="Arthur"/>
        <Label nome="DALE"/>
      </>
    );
  }

}