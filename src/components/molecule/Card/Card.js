import React, { Component } from 'react';
import Heading from 'components/atom/Heading/Heading';
import Button from 'components/atom/Button/Button';
import Paragraph from 'components/atom/Paragraph/Paragraph';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

const Wrapper = styled.div`
  min-width: 220px;
  min-height: 150px;
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

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, palletNumber, name, rmCode, removeItem } = this.props;
    if (this.state.redirect) {
      return <Redirect to={`/${cardType}/${id}`} />;
    }

    return (
      <Wrapper>
        <InnerWrapper cardType={cardType} onClick={this.handleCardClick}>
          <StyledHedding cardType={cardType}>{name}</StyledHedding>
          <StyledParagraph>Pallet: {palletNumber}</StyledParagraph>
        </InnerWrapper>
        <Paragraph>{rmCode}</Paragraph>
        <Button cardType={cardType}>Edit</Button>
        <Button secondary onClick={() => removeItem(cardType, id)}>
          Remove
        </Button>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['store', 'process', 'scale', 'chill']).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  palletNumber: PropTypes.string.isRequired,
  rmCode: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};
Card.defaultPorp = {
  cardType: 'store',
};

const MapDispatchToProps = (dispath) => ({
  removeItem: (itemType, id) => dispath(removeItemAction(itemType, id)),
});

export default connect(null, MapDispatchToProps)(Card);
