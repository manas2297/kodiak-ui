import * as React from 'react'
import {
  variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from '@kodiak-ui/core'

export type AccordionBodyProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({})(theme)
}

export const AccordionBody = styled('section')<AccordionBodyProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({
    variant: variantProp = 'accordionBody',
    variantKey = 'accordions',
    theme,
  }) => variant({ variant: variantProp, theme, variantKey }),
  sx,
)