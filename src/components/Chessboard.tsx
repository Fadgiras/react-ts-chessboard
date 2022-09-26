import {Component, ReactNode} from "react";
function grid(){
  var html='';
  var y;
  for (y=1; y<=8; y++){
    for (var x=1; x<=8; x++) {

      if((x+y)%2==0){
        html+='<div id="'+x+'-'+y+'" class=" bg-neutral-900 text-white h-fit w-fit hover:bg-blue-400 hover:text-black inline-block w-16 h-16 pt-4 text-center align-middle">'+x+'-'+y+'</div> ';
      }else{
        html+='<div id="'+x+'-'+y+'" class="bg-amber-100 h-fit w-fit hover:bg-blue-400 inline-block w-16 h-16 pt-4 text-center align-middle">'+x+'-'+y+'</div> ';
      }
    }
  }
  return html;
}

export default class Chessboard extends Component<any,any>{
    

    render(): ReactNode {
        return <div className='flex justify-center '>
        {/* TODO chessboard component */}
        <div className='grid grid-cols-8 justify-self-center border-8 border-amber-900 h-fit place-items-center ' dangerouslySetInnerHTML={{ __html: grid() }}></div>
      </div>
    }
}