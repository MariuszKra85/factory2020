import React from 'react';
import Heading from 'components/atom/Heading/Heading';
import Button from 'components/atom/Button/Button';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  min-width: 220px;
  min-height: 300px;
  margin: 7px;
  padding: 0;
  border-radius: 20px;
  box-shadow: 3px 10px 30px -5px hsla(0, 0%, 0%, 0.3);
  overflow: hidden;
  position: relative;
`;

const InnerWrapper = styled.div`
  margin: 0;
  padding: 5px 10px;
  background-color: ${({ theme, cardType }) => theme[cardType]};
`;
const StyledHedding = styled(Heading)`
  margin: 10px 0 0 10px;
  padding: 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  padding: 0 0 0 10px;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.bold};
`;

const Card = ({ cardType, id, palletNumber, name, cookDate, time, rmCode, weight }) => (
  <Wrapper>
    <InnerWrapper cardType={cardType}>
      <StyledHedding cardType={cardType}>{name}</StyledHedding>
      <StyledParagraph>Pallet: {palletNumber}</StyledParagraph>
      <StyledParagraph>ID: {id}</StyledParagraph>
    </InnerWrapper>
    <Paragraph>{rmCode}</Paragraph>
    <Paragraph>{cookDate}</Paragraph>
    <Paragraph>{weight}</Paragraph>
    <Paragraph>{time}</Paragraph>
    <Button cardType={cardType}>Edit</Button>
    <Button secondary>close</Button>
  </Wrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['store', 'process', 'scale', 'chill']).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  palletNumber: PropTypes.number.isRequired,
  cookDate: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  rmCode: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};
Card.defaultPorp = {
  cardType: 'store',
};

export default Card;
