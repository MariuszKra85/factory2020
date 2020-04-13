import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NewItemBar from './NewItemBar';

storiesOf('NewItemBar', module)
  .addDecorator(StoryRouter())
  .add('NewItemBar', () => <NewItemBar cardType="store" pageContext="store" />);
