export default class ElementSource {
  constructor(context, src) {
    const element = document.createElement('audio');

    element.src = src;
    element.controls = true;
    element.play();

    document.body.appendChild(element);

    return context.createMediaElementSource(element);
  }
}
