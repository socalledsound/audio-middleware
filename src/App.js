import React from 'react'
import { connect } from 'react-redux';
import {playDTMFPair} from './redux/audio/actions';
import {KEYPAD} from './GLOBAL_SETTINGS';
import StyledKeypad from './styles/StyledKeypad';
import StyledKeypadRow from './styles/StyledKeypadRow';
import KeyPadKey from './components/KeyPadKey';



const App = ({playTones}) => {
    return ( 
        <StyledKeypad>
            {
                KEYPAD.map( (row, i) => 
                <StyledKeypadRow key={i}>
                    {row.map(key => 
                         <KeyPadKey 
                            key={key.id}
                            label={key.label}
                            tones={key.tone}
                            handleClick={playTones}
                            />
                        )}
                   
                </StyledKeypadRow>
                )
            }
        </StyledKeypad>
     );
}
 

const mapDispatchToProps = dispatch => ({
    playTones : tones => dispatch(playDTMFPair(tones)),
})

export default connect(null, mapDispatchToProps)(App);


// {playtones}// class App extends Component {
 
// <Keypad>
//     {
//         KEYPAD.map(<Key key={key.id}/>) key =
//     }
// </Keypad>
//     render() { 
//         return ( 
//             <StyledKeypad>
//                 {
                    
//                 }
//             </StyledKeypad>
//          );
//     }
// }
 
// export default App;
