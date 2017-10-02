import React from 'react';

class GalleryThumb extends React.Component {
	/* Thumbnails */
  constructor(props) {
    super(props)
  }

  render(){
    var {changeIndex, deleteImage, index } = this.props;
    var {url, large_url} = this.props.photo;
    return(
      <div>
        <span className='delete' onClick={() => deleteImage(index)}>X</span>
        <img className="thumbnails" src={url} onClick={() => changeIndex(index)}/>
      </div>
    )
  }
}

export default GalleryThumb;
