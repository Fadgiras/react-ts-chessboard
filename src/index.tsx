import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Chessboard from './components/Chessboard';
import Piece from './components/Piece';
import Tile from './components/Tile';
import Modal from './components/Modal';

var parse = require('html-react-parser');

ReactDOM.render(
  <div className='bg-stone-900 min-h-screen'>
    {parse('<p class="text-center text-3xl mb-14 text-white pt-5">Chess board<p/>')}
      <Chessboard>
        {/* 1 */}
        <Tile color='dark'>
          <Piece name='rock' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='knight' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='bishop' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='queen' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='king' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='bishop' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='knight' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='rock' color='dark' />
        </Tile>

        {/* 2 */}
        <Tile color='light'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='dark' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='dark' />
        </Tile>

        {/* 3 */}
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        
        {/* 4 */}
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>

        {/* 5 */}
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>

        {/* 6 */}
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>
        <Tile color='light'></Tile>
        <Tile color='dark'></Tile>

        {/* 7 */}
        <Tile color='dark'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='pawn' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='pawn' color='light' />
        </Tile>

        {/* 8 */}
        <Tile color='light'>
          <Piece name='rock' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='knight' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='bishop' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='queen' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='king' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='bishop' color='light' />
        </Tile>
        <Tile color='light'>
          <Piece name='knight' color='light' />
        </Tile>
        <Tile color='dark'>
          <Piece name='rock' color='light' />
        </Tile>
      </Chessboard>
      {/* TODO Handle modal here */}
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
