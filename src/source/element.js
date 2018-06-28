export default class ElementSource {
  constructor(context, params) {
    const element = document.createElement('audio');

    element.src = params.src;
    element.controls = true;
    element.play();

    return context.createMediaElementSource(element);
  }
}
