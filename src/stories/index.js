import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'


storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>
      Hello Button
    </Button>)
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="petits bonhommes top 100">
        😀 😎 👍 💯
      </span>
    </Button>)
  .add('in black', () =>
    <Button onClick={action('clicked')} style={{ background: 'black' }}>
      Hello Button
    </Button>)
  .add('link version', () =>
    <div style={{ background: 'black', padding: '2rem' }}>
      <Button.Link onClick={action('clicked')}>
        Link Button
      </Button.Link>
    </div>)

