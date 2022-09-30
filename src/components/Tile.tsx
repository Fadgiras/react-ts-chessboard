import { Component,  PropsWithChildren, ReactNode } from "react";

const darkTile = "bg-gradient-to-tr from-black via-stone-700 to-stone-800 text-white hover:from-teal-600 hover:via-teal-300 hover:to-teal-500 hover:text-black inline-block w-16 h-16 text-center align-middle";
const lightTile = "bg-gradient-to-tr from-amber-200 via-gray to-amber-100 bg-amber-100 hover:from-teal-600 hover:via-teal-300 hover:to-teal-500 inline-block w-16 h-16 text-center align-middle";

//Don't forget to Extend PWC : Child breaks otherwise
interface TileProps extends PropsWithChildren{
    color : string,
    pos : string
}

export default class Tile extends Component<TileProps, any>{
    constructor(props : TileProps){
        super(props);
        
    }

    render(): ReactNode {
        let shade;
        switch(this.props.color){
            case "dark":
                shade = darkTile;
            break;
            case "light":
                shade = lightTile
            break;
            default : shade= "bg-red-500" 
        }
        return <div className={shade}>
            {this.props.children}
        </div>
    }
}