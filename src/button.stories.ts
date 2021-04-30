import { css } from "emotion";
import button from "./button";
import { create } from "./util/dom";

export default {
  title: "Button",
};

export const buttons = () =>
  create(`
  <div style="padding: 30px;">
    <p><button class="${button}">Default button</button></p>
    <p><button class="${button} is-danger">Danger button</button></p>
    <p><button class="${button} is-success">Success button</button></p>
    <p><button class="${button} is-info">Info button</button></p>
  </div>
`);
