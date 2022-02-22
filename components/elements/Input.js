import styles from '../../styles/Input.module.scss'
import Image from 'next/image'

const Input = (props) => {
  const { id, title, placeHolder, type, leftIcon, rightIcon, size, parentstyles, inputstyles } = props;
  return (
    <div className={`${styles.inputcontainer} ${size} ${parentstyles}}`}>
      {leftIcon ? <Image src={leftIcon.src} alt={leftIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
      <input className={`${styles.darkbg} ${inputstyles}`} id={id} type={type} aria-label={title}
        placeholder={placeHolder} />
      {rightIcon ? <Image src={rightIcon.src} alt={rightIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
    </div>
  )
}

export default Input