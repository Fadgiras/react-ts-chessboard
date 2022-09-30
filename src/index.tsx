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
        <Tile pos="8-A" color='dark'>
          <Piece tile="8-A" name='rock' color='dark' />
        </Tile>
        <Tile pos="8-B" color='light'>
          <Piece tile="8-B" name='knight' color='dark' />
        </Tile>
        <Tile pos="8-C" color='dark'>
          <Piece tile="8-C" name='bishop' color='dark' />
        </Tile>
        <Tile pos="8-D" color='light'>
          <Piece tile="8-D" name='queen' color='dark' />
        </Tile>
        <Tile pos="8-E" color='dark'>
          <Piece tile="8-E" name='king' color='dark' />
        </Tile>
        <Tile pos="8-F" color='light'>
          <Piece tile="8-F" name='bishop' color='dark' />
        </Tile>
        <Tile pos="8-G" color='dark'>
          <Piece tile="8-G" name='knight' color='dark' />
        </Tile>
        <Tile pos="8-H" color='light'>
          <Piece tile="8-H" name='rock' color='dark' />
        </Tile>

        {/* 2 */}
        <Tile pos="7-A" color='light'>
          <Piece tile="7-A" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-B" color='dark'>
          <Piece tile="7-B" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-C" color='light'>
          <Piece tile="7-C" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-D" color='dark'>
          <Piece tile="7-D" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-E" color='light'>
          <Piece tile="7-E" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-F" color='dark'>
          <Piece tile="7-F" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-G" color='light'>
          <Piece tile="7-G" name='pawn' color='dark' />
        </Tile>
        <Tile pos="7-H" color='dark'>
          <Piece tile="7-H" name='pawn' color='dark' />
        </Tile>

        {/* 3 */}
        <Tile pos="6-A" color='dark'></Tile>
        <Tile pos="6-B" color='light'></Tile>
        <Tile pos="6-C" color='dark'></Tile>
        <Tile pos="6-D" color='light'></Tile>
        <Tile pos="6-E" color='dark'></Tile>
        <Tile pos="6-F" color='light'></Tile>
        <Tile pos="6-G" color='dark'></Tile>
        <Tile pos="6-H" color='light'></Tile>
        
        {/* 4 */}
        <Tile pos="5-A" color='light'></Tile>
        <Tile pos="5-B" color='dark'></Tile>
        <Tile pos="5-C" color='light'></Tile>
        <Tile pos="5-D" color='dark'></Tile>
        <Tile pos="5-E" color='light'></Tile>
        <Tile pos="5-F" color='dark'></Tile>
        <Tile pos="5-G" color='light'></Tile>
        <Tile pos="5-H" color='dark'></Tile>

        {/* 5 */}
        <Tile pos="4-A" color='dark'></Tile>
        <Tile pos="4-B" color='light'></Tile>
        <Tile pos="4-C" color='dark'></Tile>
        <Tile pos="4-D" color='light'></Tile>
        <Tile pos="4-E" color='dark'></Tile>
        <Tile pos="4-F" color='light'></Tile>
        <Tile pos="4-G" color='dark'></Tile>
        <Tile pos="4-H" color='light'></Tile>

        {/* 6 */}
        <Tile pos="3-A" color='light'></Tile>
        <Tile pos="3-B" color='dark'></Tile>
        <Tile pos="3-C" color='light'></Tile>
        <Tile pos="3-D" color='dark'></Tile>
        <Tile pos="3-E" color='light'></Tile>
        <Tile pos="3-F" color='dark'></Tile>
        <Tile pos="3-G" color='light'></Tile>
        <Tile pos="3-H" color='dark'></Tile>

        {/* 7 */}
        <Tile pos="2-A" color='dark'>
          <Piece tile="2-A" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-B" color='light'>
          <Piece tile="2-B" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-C" color='dark'>
          <Piece tile="2-C" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-D" color='light'>
          <Piece tile="2-D" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-E" color='dark'>
          <Piece tile="2-E" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-F" color='light'>
          <Piece tile="2-F" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-G" color='dark'>
          <Piece tile="2-G" name='pawn' color='light' />
        </Tile>
        <Tile pos="2-H" color='light'>
          <Piece tile="2-H" name='pawn' color='light' />
        </Tile>

        {/* 8 */}
        <Tile pos="1-A" color='light'>
          <Piece tile="1-A" name='rock' color='light' />
        </Tile>
        <Tile pos="1-B" color='dark'>
          <Piece tile="1-B" name='knight' color='light' />
        </Tile>
        <Tile pos="1-C" color='light'>
          <Piece tile="1-C" name='bishop' color='light' />
        </Tile>
        <Tile pos="1-D" color='dark'>
          <Piece tile="1-D" name='queen' color='light' />
        </Tile>
        <Tile pos="1-E" color='light'>
          <Piece tile="1-E" name='king' color='light' />
        </Tile>
        <Tile pos="1-F" color='dark'>
          <Piece tile="1-F" name='bishop' color='light' />
        </Tile>
        <Tile pos="1-G" color='light'>
          <Piece tile="1-G" name='knight' color='light' />
        </Tile>
        <Tile pos="1-H" color='dark'>
          <Piece tile="1-H" name='rock' color='light' />
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
