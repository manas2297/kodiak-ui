import * as React from 'react'
import { UseComboboxGetInputPropsOptions } from 'downshift'
import { Input } from '@kodiak-ui/primitives'
import { VariantProps } from '@kodiak-ui/core'

export interface ComboboxInputProps
  extends UseComboboxGetInputPropsOptions,
    VariantProps {}

export const ComboboxInput = React.forwardRef(function ComboboxInput(
  { variantKey = 'comboboxes', ...props }: ComboboxInputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return <Input ref={ref} variantKey={variantKey} {...props} />
})