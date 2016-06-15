require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imageDatas = require('../data/imagesData.json');

imageDatas = (function(imagesDataArr) {
	for(var i =0, len = imagesDataArr.length; i<len; i++) {
		var singleImageData = imagesDataArr[i];
		singleImageData.imgUrl = require('../images/'+ singleImageData.fileName);
		imagesDataArr[i] = singleImageData.imgUrl;
	}
	return imagesDataArr;
})(imageDatas);

console.log(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="images-warp"></section>
      	<nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
