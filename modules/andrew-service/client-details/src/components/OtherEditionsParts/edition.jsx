import React from 'react';
// import styled from 'styled-components';
import EditionTooltip from './editionTooltip.jsx';
import styles from '../css/Edition.less';

// const ImgLiWrapper = styled.li`
// display: inline-block;
// list-style-type: none;
// margin: 0px;
// padding-top: 3px;
// padding-right: 2px;
// position: relative;
// `;

// const ImgWrapper = styled.img`
//   max-width: 55px;
//   height: 55px;
//   border: 0;
// `;

// const TooltipWrapper = styled.div`
//   display: none;

//   ${ImgLiWrapper}:hover & {
//     display: block;
//   }
// `;

const Edition = (props) => {
  const { editionData } = props;
  const { id, coverurl, title } = editionData;

  return (
    <li className={styles.editionImgLiWrapper} key={id}>
      <div className={styles.editionImgWrapper}>
        <img className={styles.editionImg} key={id} src={coverurl} alt={title} />

        <div className={styles.tooltipWrapper}>
          <EditionTooltip {...editionData} />
        </div>
      </div>
    </li>
  );
};

export default Edition;
