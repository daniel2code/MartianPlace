import styles from '../../styles/Input.module.scss'
import Image from 'next/image'

const Input = (props) => {
  const { id, title, placeHolder, type, leftIcon, rightIcon, parentstyles, inputstyles, label, labelstyles, 
    min, postfix, fieldType, value, disabled, onChange } = props;
  return (
    <div className={``}>
      {label && <div className={labelstyles}><label >{label}</label></div>}
    <div className={fieldType == 'line' ? `${styles.fieldInputContainer} ${styles.inputcontainer} ${parentstyles}` : `${styles.inputcontainer} ${parentstyles}`}>
      {leftIcon ? <Image src={leftIcon.src} alt={leftIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
      <input className={inputstyles} id={id} type={type} aria-label={title}
        placeholder={placeHolder} min={min} value={value} disabled={disabled} onChange={(ev) => onChange(ev.target.value)} />
      {rightIcon ? <Image src={rightIcon.src} alt={rightIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
      {postfix && <div className={`${styles.icon} text-mid-grey-2`}><label >{postfix}</label></div>}
    </div>
    </div>
  )
}

export default Input

// fieldType == 'line' && <input className={lineInputstyles} id={id} type={type} aria-label={title}
//         placeholder={placeHolder} min={min} />