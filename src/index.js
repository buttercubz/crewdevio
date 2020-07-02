import { mount, render, createElement, DidMount, insertionJsx } from "insertion";

import "./css/style.css";
import App from "./components/main";
import script from './scripts/main'

const app = createElement(insertionJsx(App, null));

const element = render(app);

mount(element, "#root");

DidMount(() => {
  script();
});
