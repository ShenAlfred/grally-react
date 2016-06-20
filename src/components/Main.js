require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imageDatas = require('../data/imagesData.json');

imageDatas = (function(imagesDataArr) {
	for(var i =0, len = imagesDataArr.length; i<len; i++) {
		var singleImageData = imagesDataArr[i];
		singleImageData.imgUrl = require('../images/'+ singleImageData.fileName);
		imagesDataArr[i] = singleImageData;
	}
	return imagesDataArr;
})(imageDatas);

class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="figure-imgWarp">
				<img className="figure-img" src={this.props.data.imgUrl} alt={this.props.data.title}/>
				<figcaption className="figure-title">
					<h2>{this.props.data.desc}</h2>
				</figcaption>
			</figure>
		)
	}
}


class AppComponent extends React.Component {
  render() {
	
	var figureImgs = [];

	imageDatas.forEach(function(item) {
		figureImgs.push(<ImgFigure key={item.id} data={item} />);
	});
	

    return (
      <section className="stage">
      	<section className="images-warp">
			{figureImgs}
      	</section>
      	<nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
