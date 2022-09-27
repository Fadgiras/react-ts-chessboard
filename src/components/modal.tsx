import { render } from "@testing-library/react";
import { Component, ReactNode} from "react";

interface ModalProps{
  name : string,
  description : string
}

function ShowModal(){

}

export default class Modal extends Component<any, any>{
  constructor(props : ModalProps){
      super(props);
      
  }
  render(): ReactNode {
      return <div>
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => ShowModal()}
            >
              Open regular modal
            </button>
            {ShowModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Piece description : {this.props.name}
                        </h3>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          {this.props.description}
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={()=>ShowModal()}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
  }
}
