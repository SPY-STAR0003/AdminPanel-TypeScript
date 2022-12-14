// react
import ReactDOM from 'react-dom/client';

// libraries
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { SWRConfig } from 'swr';

// components
import App from './App';

// public files
import './index.css';
import 'sweetalert2/src/sweetalert2.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)
