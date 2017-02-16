import {call, put, take} from 'redux-saga/effects';
import {fetchImages} from '../api/flickr';

export function* loadImages() {
  try {
    const images = yield call(fetchImages);
    console.log(images);
    yield put({type: 'IMAGES_RECEIVED', images});
    yield put({type: 'SELECT_IMAGE', image: images[4]})//可以改变数组的键，看看大图的变化
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}

export function* watchLoadImages() {
  while (true) { //使用while循环 监听loadImages action
    yield take('LOAD_IMAGES');
    yield call(loadImages);
  }
}
