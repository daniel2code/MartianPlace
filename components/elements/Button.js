import styles from '../../styles/Button.module.scss'

/* eslint-disable-next-line */
// export interface ButtonProps {
//   buttonStyle?: 'Primary'| 'Secondary' | 'Tertiary' | 'Quaternary' | 'Quinary' | 'Senary';
//   id?: string;
//   name?: string;
//   label?: string;
//   title?: string;
//   type?: 'button' | 'submit';
//   leftIcon?: string;
//   rightIcon?: string;
//   rounded?: boolean;
//   onClick?: (event: React.MouseEvent) => void;
//   onMouseOver?: (event: React.MouseEvent) => void;
//   onMouseEnter?: (event: React.MouseEvent) => void;
// }

export function Button(props) {
  const {  buttonStyle, id, label, name, title, type, leftIcon, rightIcon, rounded, onClick } = props;

  return (
    <div className={['button', 'background-container', `background-container-${buttonStyle?.toLowerCase()}`].join(' ')}>
      <button
        type={type}
        name={name}
        id={id}
        title={title}
        className={[`${buttonStyle?.toLowerCase()}`, `${rounded ? 'circle' : ''}`].join(' ')}
        onClick={onClick}>
        {leftIcon ? <span className={['icon', leftIcon].join(' ')}></span> : ''}
        {label ? <span className={'label'}>{label}</span> : ''}
        {rightIcon ? <span className={['icon', rightIcon].join(' ')}></span> : ''}
      </button>
    </div>
  );
}

// Button.defaultProps = {
//   rounded: false
// };

export default Button;