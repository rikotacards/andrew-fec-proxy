import React from 'react';
import style from './css/Rating.less';

// const RatingContainer = styled.div`
//   font-family: Lato, Helvetica Neue, Arial, sans-serif;
//   font-size: 11px;
//   padding-left: 20px;
//   padding-right: 10px;
//   padding-top: 5px;
// `;

class Rating extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.ratingContainer}>Rate this book</div>
    )
  }
}

export default Rating;
