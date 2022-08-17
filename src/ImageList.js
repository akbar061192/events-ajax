import React from 'react';
import './ImageList.css';

const ImageList = props => {
  // const listOfImages = props.images.map(image => {
  //   return <img src={image.urls.regular} alt={image.alt_description} />;
  // });
  // console.log(listOfImages);

  // return <div>{listOfImages}</div>;

  return (
    <div className='img-list'>
      {props.images.map(image => {
        return (
          // key prop is important to uniquely identify the element also for any updates.
          <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
