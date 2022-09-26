import { Component, ReactNode } from "react";
import { ReactComponent as bd } from './pieces/Chess_bdt45.svg';

function svgNameProcess(name:string, description:string, color:string){

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

    render(): ReactNode {
        return <img src={"http://s.cdpn.io/3/kiwi.svg"}/>
    }
}