import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from 'nicetoolfn';
import App from '@/views/app';

ReactDOM.render(<>
  <App/>
  <Popup ref={$refPopup}/>
</>, document.getElementById('root'));
