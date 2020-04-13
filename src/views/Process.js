import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecule/Card/Card';
import UserTamplate from '../Templates/UserTemplate';

const Process = ({ process }) => (
  <UserTamplate cardType="process">
    {process.map((item) => (
      <Card
        cardType={item.cardType}
        id={item.id}
        name={item.name}
        rmCode={item.rmCode}
        palletNumber={item.palletNumber}
        cookDate={item.cookDate}
        time={item.time}
        weight={item.weight}
        key={item.id}
      />
    ))}
  </UserTamplate>
);

const mapStoreToProps = ({ process }) => {
  return { process };
};

Process.propTypes = {
  process: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStoreToProps)(Process);
