
import {
  mount,
  render,
  createElement,
  insertionJsx,
} from "insertion";

import  './css/style.css';
import App from './components/main'


const app = createElement(insertionJsx(App, null));

const element = render(app);

mount(element, "#root");