import {Component, ReactNode} from "react";

interface ModalProps {
    name: string,
    description: string,
    method: () => void
}

export default class Modal extends Component<ModalProps, any> {
    constructor(props: ModalProps) {
        super(props)
    }

    showTheModal() {
        this.props.method.apply(null)
    }

    render(): ReactNode {

        return <div>
            <div id="defaultModal" aria-hidden="true"
                 className="fixed flex w-full md:inset-0 h-modal md:h-full justify-center items-center">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white select-none">
                                Piece description : {this.props.name}
                            </h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={this.showTheModal.bind(this)}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 select-none">
                                {this.props.description}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
