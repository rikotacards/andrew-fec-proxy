/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DetailDataBox from './detailDataBox.jsx';
import OtherEditions from './otherEditions.jsx';
import styles from './header.less';

// const DetailBody = styled.div`
//   margin: 50px auto;
//   width: 455px;
//   background: #FFFFFF;
//   padding: 5px 0;
//   display: block;
//   line-height: 18px;
//   font-size: 12px;
//   text-align: left;
//   word-wrap: break-word;
//   color: #333;
//   font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
// `;

const GreyItem = styled.span`
  color: #999999;
`;

// const Buttons = styled.div`
//   padding: 5px 0;
// `;

const GreenButton = styled.span`
  color: #00635d;
  &:hover {
    text-decoration: underline;
  }
`;

const GreyButton = styled(GreenButton)`
  color: #999999;
  float: right;
  margin-right: 5px;
`;

// const DataBoxWrapper = styled.div`
//   display:${props => (props.shouldDisplay ? 'block' : 'none')};
// `;

class EditionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreToggle: false,
      id: (this.props.match.params.id),
      details: null,
      display: false,
      count: 0,
    };
  }

  componentDidMount() {
    if (this.state.details === null) {
      this.getMainDetails();
    }
  }

  getMainDetails() {
    const { id } = this.state;

    axios.get(`/books/${id}/details`)
      .then((res) => {
        this.setState({
          details: res.data,
        });
      })
      .catch(err => console.log('error get details', err));
  }

  generatePublisherInfoLine() {
    const {
      type, pagenum, originalPubDate, firstPubDate, publisher,
    } = this.state.details;
    const typeAndPageNumberLine = `${type}, ${pagenum} pages`;
    const publishInfoLine = `Published ${originalPubDate} by ${publisher}`;
    const firstPubDateLine = `(first published ${firstPubDate} )`;

    return (
      <div>
        <div>{typeAndPageNumberLine}</div>
        <div>
          {publishInfoLine}
          &nbsp;
          <span className={styles.greyoutButton}>{firstPubDateLine}</span>
        </div>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const { count } = this.state;
    // toggle moreToggle only when count is equal to zero;
    if (count === 0) {
      this.setState(state => ({
        moreToggle: !state.moreToggle,
        count: state.count + 1,
        display: !state.display,
      }));
    }
    // toggle display when count is equal to 1;
    if (count >= 1) {
      this.setState(state => ({
        display: !state.display,
      }));
    }
  }

  render() {
    if (!this.state.details) {
      return (null);
    }
    console.log(styles.test);
    const { id, moreToggle, display } = this.state;
    const shouldDisplay = display ? styles.dataBoxWrapperBlock : styles.dataBoxWrapperNone;


    return (
      <div className={styles.detailBody}>
        {this.generatePublisherInfoLine()}

        <div className={shouldDisplay}>
          {moreToggle ? (<DetailDataBox className="DetailDataBox" details={this.state.details} />) : null}
          {moreToggle ? (<OtherEditions className="OtherEditions" id={id} />) : null}
        </div>

        <div className={styles.headerButtons}>
          <span className={styles.greenUnderlineButton} onClick={(e) => { this.handleClick(e); }}>
            {display ? '...Less Detail' : 'More Details...'}
          </span>
          <span className={styles.greyoutButton}>
            edit details
          </span>
        </div>

      </div>

    );
  }
}

export {
  EditionHeader,
  GreenButton,
  GreyItem,
};
