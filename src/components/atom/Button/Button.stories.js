import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Normal', () => <Button cardType="store">Hello</Button>)
  .add('Secondary', () => (
    <Button secondary cardType="store">
      Hello
    </Button>
  ));
