import React from 'react';
import Stars from './stars.jsx';
import styles from '../css/EditionTooltip.less';
import sharedStyles from '../css/SharedStyles.less';

const EditionTooltip = (props) => {
  const {
    isbn10, isbn13, originalPubDate, publisher, title, type,
  } = props;

  return (
    <div className={styles.editionTooltipWrapper}>
      <div className={styles.editionTooltipBorderFrame}>
        <div className={styles.editionTooltipBorderCenter}>
          <div className={styles.editionBook}>
            <div>{`${title} (${type})`}</div>
            <div>{`isbn: ${isbn10}`}</div>
            <div>{`isbn13: ${isbn13}`}</div>
            <div>{`format: ${type}`}</div>
            <div>{`Published ${originalPubDate} by ${publisher}`}</div>
            <span className={sharedStyles.greenUnderlineButton}>Enlarge cover</span>
            <div className={styles.editionStatusWrapper}>
              <span title="status" style={{ paddingRight: '10px' }}>Want to Read</span>
              <span className={styles.editionStatusButton}><div className={styles.editionStatusArrow} /></span>
            </div>
            <div className={styles.editionRating}>
              <span title="editionRating" style={{ paddingRight: '15px' }}>Rate this Book</span>
              <Stars />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.editionTooltipArrow} />
    </div>
  );
};

export default EditionTooltip;
export {
  Stars,
};
