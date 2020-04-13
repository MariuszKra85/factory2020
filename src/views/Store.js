import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTamplate from 'Templates/UserTemplate';
import Card from 'components/molecule/Card/Card';

const Store = ({ store }) => (
  <UserTamplate cardType="store">
    {store.map((item) => (
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

const mapStoreToProps = ({ store }) => {
  return { store };
};

Store.propTypes = {
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStoreToProps)(Store);
