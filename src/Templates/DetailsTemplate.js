import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/orgamisms/Sidebar/Sidebar';
import Heading from 'components/atom/Heading/Heading';
import Button from 'components/atom/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import Paragraph from '../components/atom/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 0 0 0 100px;
`;

// eslint-disable-next-line react/prop-types
const DetailsTemplate = ({ pageType }) => (
  <>
    <Sidebar cardType={pageType} />
    <StyledWrapper>
      <Heading>Name:</Heading>
      <Paragraph>Pallet number:</Paragraph>
      <Paragraph>Delivery time :</Paragraph>
      <Paragraph>Cooked Date:</Paragraph>
      <Paragraph>Nett Weight:</Paragraph>
      {pageType === 'scale' ? <Paragraph>Weight:</Paragraph> : null}
      {pageType === 'store' ? <Paragraph>Position in Stock:</Paragraph> : null}
      {pageType === 'chill' ? <Paragraph>Time to chill:</Paragraph> : null}
      <Button as={Link} to={routes.store} cardType={pageType}>
        close
      </Button>
    </StyledWrapper>
  </>
);

DetailsTemplate.porpTypes = {
  pageType: PropTypes.string.isRequired,
};

export default DetailsTemplate;
