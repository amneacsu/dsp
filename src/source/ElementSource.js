export default class ElementSource {
  constructor(context, src) {
    const element = document.createElement('audio');

    element.crossOrigin = 'anonymous';
    element.controls = true;
    element.src = src;
    element.play();

    document.body.appendChild(element);

    return context.createMediaElementSource(element);
  }
}
