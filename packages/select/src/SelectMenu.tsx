import * as React from 'react'
import { UseSelectGetMenuPropsOptions } from 'downshift'
import {
  variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives'

export type SelectMenuProps = {
  ref: React.Ref<HTMLUListElement>
  children: React.ReactNode
} & VariantProps &
  UseSelectGetMenuPropsOptions

/**
 * base
 *
 * Generate the base CSS for the SelectMenu component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    maxHeight: '200px',
    overflowY: 'auto',
    width: '150px',
    margin: 0,
    borderTop: 0,
    background: 'white',
  })(theme)
}

const Ul = styled('ul')<SelectMenuProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey, theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const SelectMenu = React.forwardRef(function SelectMenu(
  { children, variantKey = 'selects', ...props }: SelectMenuProps,
  ref: React.Ref<HTMLUListElement>,
) {
  return (
    <>
      <Ul ref={ref} variantKey={variantKey} {...props}>
        {children}
      </Ul>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <Box tabIndex={0} />
    </>
  )
})
