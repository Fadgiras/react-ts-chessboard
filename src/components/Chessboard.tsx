import {Component, ReactNode} from "react";
function grid(){
  var html='';
  var y;
  for (y=1; y<=8; y++){
    for (var x=1; x<=8; x++) {

      if((x+y)%2==0){
        html+='<div id="'+x+'-'+y+'" class="bg-gradient-to-tr from-black via-stone-700 to-stone-800 text-white hover:from-teal-600 hover:via-teal-300 hover:to-teal-500 hover:text-black inline-block w-16 h-16 pt-4 text-center align-middle">'+'   '+'</div> ';
      }else{
        html+='<div id="'+x+'-'+y+'" class="bg-gradient-to-tr from-amber-200 via-gray to-amber-100 bg-amber-100 hover:from-teal-600 hover:via-teal-300 hover:to-teal-500 inline-block w-16 h-16 pt-4 text-center align-middle">'+'   '+'</div> ';
      }
    }
  }
  return html;
}

export default class Chessboard extends Component<any,any>{
    

    render(): ReactNode {
        return <div className='flex justify-center '>
        <div className='grid grid-cols-8 justify-self-center border-8 border-amber-900 h-fit place-items-center ' dangerouslySetInnerHTML={{ __html: grid() }}></div>
      </div>
    }
}