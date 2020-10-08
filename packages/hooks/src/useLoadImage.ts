import * as React from 'react';

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

export function useLoadImage({
  src,
  srcSet,
}: {
  srcSet?: AvatarProps['src']
  src?: AvatarProps['srcSet']
}) {
  const [imageState, setImageState] = React.useState(ImageState.initial)
  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined
    }
    setImageState(ImageState.initial)

    let active = true
    const image = new Image()
    if (typeof src === 'string') {
      image.src = src
    }

    if (typeof srcSet === 'string') {
      image.srcset = srcSet
    }
    image.onload = () => {
      if (!active) {
        return
      }
      setImageState(ImageState.loaded)
    }

    image.onerror = () => {
      if (!active) {
        return
      }
      setImageState(ImageState.error)
    }

    return () => {
      active = false
    }
  }, [src, srcSet])

  return { imageState }
}
