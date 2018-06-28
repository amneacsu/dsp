export default class ElementSource {
  constructor(context, params) {
    const element = document.createElement('audio');
    element.src = params.src;
    element.controls = true;

    document.body.appendChild(element);

    element.play();

    const node = context.createMediaElementSource(element);

    return node;
  }
}
