import Image from 'next/image';
// import styles from '../../styles/Logo.module.scss'

const Logo = (props) => {
  return (
    <div className="logo">
            {props.image ? <Image className="image" src={props.image} alt={props.title}
            width={35} height={35}></Image> : ''}
            {/* <span className="title">{props.title || ''}</span> */}
        </div>
  )
}

export default Logo