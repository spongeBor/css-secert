import styles from './index.module.scss';
interface IProps {
  type?: 'half' | 'quarter';
}
function Ellipse({type}:IProps) {
  switch(type) {
    case 'half':
      return <div className={styles.container}>
      <div  className={styles.half}></div>
    </div>
    case 'quarter':
      return <div className={styles.container}>
      <div  className={styles.quarter}></div>
    </div>
    default:
      return <div className={styles.container}>
    <div  className={styles.default}></div>
  </div>
  }
  
}
export default Ellipse;