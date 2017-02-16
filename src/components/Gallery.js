import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';//connect方法
import {bindActionCreators} from 'redux';//action的映射创建方法

import GalleryImage from './GalleryImage';//大图组件
import GalleryThumbs from './GalleryThumbs';//小图组件
//import DevTools from './DevTools';

import * as ImageGalleryActions from "../actions";//action

export class Gallery extends Component {
  componentDidMount() { //React渲染DOM是的生命周期函数
    this.props.loadImages(); //经过bindActionCreators包装的action方法，注意看下面的
    //connect的内容，实际是经过包装的dispatch方法
  }
  render() {
    const {images, selectImage, selectedImage} = this.props; //props是从redux返回的数据经过了映射处理，注意最下面的代码
    console.log(images);
    return (
      <div className="image-gallery" hidden={!selectedImage}>
        <GalleryImage image={selectedImage} />
        <GalleryThumbs selectImage={selectImage} images={images} />

      </div>
    )
  }
}

export default connect(
  //state和dispatch都进行了映射处理
  state => ({images: state.images, selectedImage: state.selectedImage}),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(Gallery)
