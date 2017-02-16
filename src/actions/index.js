const LOAD_IMAGES = 'LOAD_IMAGES';
const SELECT_IMAGE = 'SELECT_IMAGE';

export function selectImage(image) {//选择小图的action
  return {
    type: SELECT_IMAGE,
    image
  }
}

export function loadImages() {//加载图片的action
  return {
    type: LOAD_IMAGES
  }
}
