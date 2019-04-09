import React from 'react';
import { shallow } from 'enzyme';
import EditionTooltip, {
  Wrapper, BorderFrame, BorderCenter, Book, EditionStatusArrow, Stars, StatusButton, ToolTipArrow,
} from '../OtherEditionsParts/editionTooltip';

describe('EditionTooltip Component', () => {
  const tooltipData = {
    isbn10: 'isbn10',
    isbn13: 'isbn13',
    originalPubDate: 'date1',
    publisher: 'publisher',
    title: 'title',
    type: 'type',
  };

  const wrapper = shallow(<EditionTooltip {...tooltipData} />);

  test('EditionTooltip renders properly when given tooltip props', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('EditionTooltip contains CSS components Wrapper, BorderFrame, BorderCenter, Book and ToolTipArrow', () => {
    expect(wrapper.find(Wrapper).length).toEqual(1);
    expect(wrapper.find(BorderFrame).length).toEqual(1);
    expect(wrapper.find(BorderCenter).length).toEqual(1);
    expect(wrapper.find(Book).length).toEqual(1);
    expect(wrapper.find(ToolTipArrow).length).toEqual(1);
  });

  test('EditionTooltip contains statusButton components and rating components', () => {
    expect(wrapper.find(EditionStatusArrow).length).toEqual(1);
    expect(wrapper.find(StatusButton).length).toEqual(1);
    expect(wrapper.find(Stars).length).toEqual(1);
  });
});
