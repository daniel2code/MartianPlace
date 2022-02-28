import styles from '../styles/Alert.module.scss'

export function Alert(props) {

const { msg } = props;
  return (
    <div>
      {alert(msg)}
    </div>
  )
}

export default Alert;