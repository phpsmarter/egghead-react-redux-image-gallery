import React from 'react';
export default function GalleryThumbs({images, selectImage}) {
  return (//dispatch传递的action的参数image实际是图片的url，大图和缩略图是靠css中控制宽高来进行的
    <div className="image-scroller">
      {images.map((image, index) => (
        <div key={index} onClick={selectImage.bind(this, image)}>
          <img src={image}/>
        </div>
      ))}
    </div>
  )
}
