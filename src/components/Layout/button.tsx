import { ComponentProps } from 'react';
import clsx from 'clsx';
export type ButtonProps = ComponentProps<'button'> & {
// This imports all the typical props of a button, which means ButtonProps takes everything that a button can take & the varian  t
  variant: 'primary' | 'secondary' | 'destructive'; // Some teams call variant 'appearance' or 'kind' it doesn't matter
  size: 'small' | 'medium' | 'large';
};

import styles from './button.module.css';

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
	let classes = clsx(
		styles.button,
		styles[variant],
		styles[size],
		className,
	)
	return <button {...props} className={classes} />
}