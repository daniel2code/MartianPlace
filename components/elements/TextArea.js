import styles from '../../styles/TextArea.module.scss'
import Image from 'next/image'

const TextArea = (props) => {
  const { id, title, placeHolder, leftIcon, rightIcon, parentstyles, textAreaStyles, label, labelstyles, rows, cols, maxLength } = props;
  return (
    <div className={``}>
      <div className='flex flex-row justify-between'>
        {label && <div className={labelstyles}><label >{label}</label></div>}
        {maxLength && <div className={`${labelstyles} text-mid-grey-2`}><label >{maxLength}</label></div>}
      </div>
      <div className={`${styles.textAreaContainer} ${parentstyles}`}>
        {leftIcon ? <Image src={leftIcon.src} alt={leftIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
        <textarea className={textAreaStyles} id={id} aria-label={title}
          placeholder={placeHolder} name={title} rows={rows} cols={cols} maxLength={maxLength}>
        </textarea>
        {rightIcon ? <Image src={rightIcon.src} alt={rightIcon.alt} width={20} height={20} className={styles.icon} /> : ''}
      </div>
    </div>
  )
}

export default TextArea