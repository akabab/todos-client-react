import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'
import Todo from '../components/Todo'

storiesOf('Todo', module)
  .add('with square image', () =>
    <Todo
      image="https://res.cloudinary.com/akabab/image/upload/v1526986866/default.png"
      author="Yoyo"
      stars={Array(5)}
      createdAt="2018-05-21"
      title="How to break our DB ?"
      description="SQL injections, fetch from the console .."
    />)
  .add('with rectangle image', () =>
    <Todo
      image="http://www.bde.enseeiht.fr/~confeta/image/images/pouet.jpg"
      author="Yoyo"
      stars={Array(5)}
      createdAt="2018-05-21"
      title="How to break our DB ?"
      description="SQL injections, fetch from the console .."
    />)

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

