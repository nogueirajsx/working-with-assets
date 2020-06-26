'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Repos from './index'

storiesOf('Repos', module)
    .add('with title prop', () => (
        <Repos title='Favoritos' />
))

.add('with repos', () => (
    <div style={{ padding: '50px' }}>
        <Repos
            title='Favoritos'
            repos={[{
                link: 'https://github.com/nogueirajsx',
                name: 'nogueirajsx'
            }]}
        />
    </div>
))