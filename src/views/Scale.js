import React from 'react';
import Card from 'components/molecule/Card/Card';
import UserTamplate from '../Templates/UserTemplate';

const scale = [
  {
    cardType: 'scale',
    id: '1',
    name: 'szynka',
    rmCode: 'rm102',
    palletNumber: '32123',
    cookDate: '21.3.2020',
    time: '12.20',
    weight: '200',
  },
  {
    cardType: 'scale',
    id: '2',
    name: 'szynka',
    rmCode: 'rm102',
    palletNumber: '32123',
    cookDate: '21.3.2020',
    time: '12.20',
    weight: '200',
  },
  {
    cardType: 'scale',
    id: '3',
    name: 'szynka',
    rmCode: 'rm102',
    palletNumber: '3213243',
    cookDate: '21.3.2020',
    time: '12.20',
    weight: '200',
  },
  {
    cardType: 'scale',
    id: '4',
    name: 'szynka',
    rmCode: 'rm102',
    palletNumber: '3214534',
    cookDate: '21.3.2020',
    time: '12.20',
    weight: '200',
  },
];

const Scale = () => (
  <UserTamplate cardType="store">
    {scale.map((item) => (
      <Card
        cardType={item.cardType}
        id={item.id}
        name={item.name}
        rmCode={item.rmCode}
        palletNumber={item.palletNumber}
        cookDate={item.cookDate}
        time={item.time}
        weight={item.weight}
      />
    ))}
  </UserTamplate>
);

export default Scale;
