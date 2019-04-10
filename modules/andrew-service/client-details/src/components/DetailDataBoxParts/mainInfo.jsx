import React from 'react';
import styled from 'styled-components';
// import { GreyItem } from '../header.jsx';
import sharedStyles from '../css/SharedStyles.less';

const DetailBoxRowTitle = styled.div`
  color: #382110;
  font-weight: bold;
  width: 25%;
  float: left;
`;

const DetailBoxRowItem = styled.div`
  width: 75%;
  float: left;
`;

const MainInfo = (props) => {
  const {
    title, isbn10, isbn13, language,
  } = props.mainInfo;

  return (
    <div>
      <div>
        <div className={sharedStyles.detailBoxRowTitle}>Original Title</div>
        <div className={sharedStyles.detailBoxRowItem}>{title}</div>
      </div>
      <div>
        <div className={sharedStyles.detailBoxRowTitle}>ISBN</div>
        <div className={sharedStyles.detailBoxRowItem}>
          {`${isbn10}`}
          &nbsp;
          <span className={sharedStyles.greyoutButton}>{`(ISBN13: ${isbn13})`}</span>
        </div>
      </div>
      <div>
        <div className={sharedStyles.detailBoxRowTitle}>Language</div>
        <div className={sharedStyles.detailBoxRowItem}>{language}</div>
      </div>
    </div>
  );
};

export {
  MainInfo,
  DetailBoxRowTitle,
  DetailBoxRowItem,
};
