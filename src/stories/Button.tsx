import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: '6' | '20' | '60';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = '20',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary bg-blue-500' : 'storybook-button--secondary bg-red-500';
  const sizeClass = {
    '6': 'p-6',
    '20': 'p-20',
    '60': 'p-60',
  }[size];
  return (
    <button
      type="button"
      className={['', 'storybook-button', sizeClass, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
