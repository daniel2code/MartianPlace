import styles from '../../styles/Button.module.scss'

export function Button(props) {
  const { buttonStyles, id, label, name, title, type, leftIcon, rightIcon, rounded, onClick, children } = props;

  return (
    <button
      type={type}
      id={id}
      title={title}
      className={buttonStyles}
      onClick={onClick}>
        {label}
        {children}
    </button>
  );

    // return (
    //   <div className={['button', 'background-container', `background-container-${buttonStyle?.toLowerCase()}`].join(' ')}>
    //     <button
    //       type={type}
    //       name={name}
    //       id={id}
    //       title={title}
    //       className={[`${buttonStyle?.toLowerCase()}`, `${rounded ? 'circle' : ''}`].join(' ')}
    //       onClick={onClick}>
    //       {leftIcon ? <span className={['icon', leftIcon].join(' ')}></span> : ''}
    //       {label ? <span className={'label'}>{label}</span> : ''}
    //       {rightIcon ? <span className={['icon', rightIcon].join(' ')}></span> : ''}
    //     </button>
    //   </div>
    // );
}

export default Button;