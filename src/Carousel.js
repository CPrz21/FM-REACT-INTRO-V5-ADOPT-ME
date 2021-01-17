import React from 'react';

class Carousel extends React.Component{
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }){
    let photos = ["http://placecorgi.com/600/600"];

    if(media.length){
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (index) =>{
    this.setState({
      active: index
    });
  }

  render(){
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"  />
        <div className="carousel-smaller">
          {
            photos.map((photo, index) => (
              <img
                key={photo}
                onClick={this.handleIndexClick.bind(this, index)}
                // data-index={index}
                src={photo}
                className={index === active ? "active" : ""}
                alt="Animal thumbnail"
              />
            ))
          }
        </div>
      </div>
    )
  }
}
export default Carousel;