import styles from './index.module.scss';
interface IProps {
  type?: 'horizontal' | 'vertical' | 'diagonal' | 'diagonal_60' | 'subtle'
}
function Stripes({type}:IProps) {
  switch(type) {
    case 'horizontal':
      return <div className={styles.horizontal}></div>
    case 'vertical':
      return <div className={styles.vertical}></div>
    case 'diagonal':
      return <div className={styles.diagonal}></div>
    case 'diagonal_60':
      return <div className={styles.diagonalSixth}></div>
    case 'subtle':
    return <div className={styles.subtle}></div>
    default:
      return <div className={styles.default}></div>
  }
  
}
export default Stripes;