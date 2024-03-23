"use client";

import Image, { ImageProps } from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export function ImageComponent(props: ImageProps) {
  return (
    <Zoom wrapElement="span">
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        width={800}
        height={400}
        {...props}
      />
    </Zoom>
  )
}
