import React from 'react';
import { storiesOf } from '@storybook/react';
import penIcon from 'assets/icons/pen.svg';
import ButtonIcon from './ButtonIcon';

storiesOf('ButtonIcon', module).add('Pen', () => <ButtonIcon cardType="scale" icon={penIcon} />);
