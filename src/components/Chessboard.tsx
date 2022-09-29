import {Component, ReactNode, ReactElement} from "react";

let woodyRender: string;
woodyRender = "p-2 bg-gradient-to-tr ";
woodyRender += "from-amber-800 "
woodyRender += "via-amber-600 "
woodyRender += "via-yellow-800 "
woodyRender += "via-amber-700 "
woodyRender += "to-amber-800"

let outerWoodyRender: string;
outerWoodyRender = "p-3 bg-gradient-to-tr ";
outerWoodyRender += "from-amber-900 "
outerWoodyRender += "via-amber-700 "
outerWoodyRender += "via-yellow-900 "
outerWoodyRender += "via-amber-800 "
outerWoodyRender += "to-amber-900"

//TODO Chessboard state ?
export default class Chessboard extends Component<any,any>{
    render(): ReactNode {
        return <div className='flex justify-center '>
          <div className={outerWoodyRender}>
            <div className={woodyRender}>
              <div className='grid grid-cols-8 justify-self-center h-fit place-items-center '>
                {this.props.children}
              </div>
            </div>
          </div>
      </div>
    }
}