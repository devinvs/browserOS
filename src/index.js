import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './ui/Root'
import * as serviceWorker from './serviceWorker';
import main from './os/install.js'
import {isMobile} from 'react-device-detect';

if(isMobile){
    ReactDOM.render(<div className="MobileError">You actually thought this would work on mobile?</div>, document.getElementById('root'))
}else{
    main()
    ReactDOM.render(<Root />, document.getElementById('root'));
}

//Makes the OS work offline
serviceWorker.register()
