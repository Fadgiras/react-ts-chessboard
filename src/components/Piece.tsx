import { Component, Fragment, ReactNode } from "react";
import Modal from "./modal";

//if the piece attribution fails
import nope from '../logo.svg';
import React from "react";
//const [showModal, setShowModal] = React.useState(false);

const handleImgClick = (Event: { target: any; }) => {

    console.log(Event.target.id);
    
}

function pieceAttribution(name:string, color:string){
    var pieceBuffer, pieceDesc;
    switch(name){
        case "bishop" : pieceBuffer = "b";
        break;
        case "king" : pieceBuffer = "k";
        break;
        case "knight" : pieceBuffer = "n";
        break;
        case "pawn" : pieceBuffer = "p";
        break;
        case "queen" : pieceBuffer = "q";
        break;
        case "rock" : pieceBuffer = "r";
        break;
        default : pieceBuffer = ""
    }

    switch(name){
        case "bishop" : pieceDesc = "Moves in diagonals as far as wanted";
        break;
        case "king" : pieceDesc = "Moves in every directions but only one tile away";
        break;
        case "knight" : pieceDesc = "Moves in L-shaped movements, can \"jump\" over pieces ";
        break;
        case "pawn" : pieceDesc = "Moves only forward one tile at the time except for its first move which can be two tiles away";
        break;
        case "queen" : pieceDesc = "Moves in all the directions as far as wanted";
        break;
        case "rock" : pieceDesc = "Moves in a + shaped movement, as far as wanted";
        break;
        default : pieceDesc = ""
    }

    switch(color){
        case "light" : pieceBuffer+="l";
        break;
        case "dark" : pieceBuffer+="d";
        break;
    }

    return [pieceBuffer, pieceDesc]
}

interface PieceProps{
    name : string,
    description : string,
    color : string
}

export default class Piece extends Component<any, any>{
    constructor(props : PieceProps){
        super(props);
    }
    piece = nope

    render() {
        var pieceAtt = pieceAttribution(this.props.name, this.props.color);
        return  <div>
                    <img id={this.props.name} src={require(`../pieces/Chess_${pieceAtt[0]}t45.svg`)} onClick ={handleImgClick}/>
                    <p className="relative text-white">{pieceAtt[1]}</p>
                    {/* <Modal name={this.props.name} description={pieceAtt[1]}></Modal>                     */}
                </div>
    }
}