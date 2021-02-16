import { createStore, applyMiddleware } from 'redux';
import audioMiddleWare from './audio/audio.middleware';

const store = createStore(
    ()=>{ },
    applyMiddleware(audioMiddleWare)
    );

export default store