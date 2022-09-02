import React, {createElement} from 'react'
import * as css from './styles.module.css'

function Avatar({src}) {
  return <span className={css.avatar}>
            <img src={src} width={70} height={70}/>
  </span>
}

export default Avatar
