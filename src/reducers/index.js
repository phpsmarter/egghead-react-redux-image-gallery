export default function images(state = {images:[]}, action) {
  switch (action.type) {
    case 'IMAGES_RECEIVED':
      console.log(JSON.stringify(action.images));  //终端会打印出图片信息
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      console.log(action.image);
      return {...state, selectedImage: action.image};
    default:
      return state
  }
}
