import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Store', () => <Card cardType="store" name="Stores" />)
  .add('Process', () => <Card cardType="process" name="Process" />)
  .add('Scale', () => <Card cardType="scale" name="Scale" />)
  .add('Chill', () => <Card cardType="chill" name="Chill" />);
