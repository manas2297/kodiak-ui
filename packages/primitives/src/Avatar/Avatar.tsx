import * as React from 'react'
import { Box } from '../Box'
import { Image as KodiakImage } from '../Image'

type AvatarProps = React.PropsWithChildren<{
  src?: string
  srcSet?: React.ImgHTMLAttributes<HTMLImageElement>['srcSet']
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
  alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt']
  sizes?: React.ImgHTMLAttributes<HTMLImageElement>['sizes']
}>

enum ImageState {
  initial,
  loaded,
  error,
}

// From material-ui https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    {
      children: childrenProp,
      src,
      srcSet,
      alt,
      sizes,
      imgProps,
      ...props
    }: AvatarProps,
    ref,
  ) {
    const { imageState } = useLoadImage({ src, srcSet })
    const hasImg = src || srcSet
    const hasImgNotFailing = hasImg && imageState !== ImageState.error

    let children = null

    if (hasImgNotFailing) {
      children = (
        <KodiakImage
          __base={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            // Handle non-square image. The property isn't supported by IE 11.
            objectFit: 'cover',
            // Hide alt text.
            color: 'transparent',
            // Hide the image broken icon, only works on Chrome.
            textIndent: 10000,
          }}
          variantKey="avatar"
          variant="image"
          alt={alt}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          {...imgProps}
        />
      )
    } else if (childrenProp != null) {
      children = childrenProp
    } else if (hasImg && alt) {
      children = alt[0]
    } else {
      children = null
    }

    return (
      <Box
        ref={ref}
        variantKey="avatar"
        __base={{
          alignItems: 'center',
          borderRadius: 'full',
          display: 'inline-flex',
          flexShrink: 0,
          justifyContent: 'center',
          lineHeight: 1,
          overflow: 'hidden',
          position: 'relative',
          userSelect: 'none',
          width: '32px',
          height: '32px',
        }}
        {...props}
      >
        {children}
      </Box>
    )
  },
)

export default Avatar
