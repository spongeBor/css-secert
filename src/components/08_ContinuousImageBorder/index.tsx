import styles from './index.module.scss';
interface IProps {
  type?: 'vintage_envelope' | 'marching_ants'
}
function ContinuousImageBorder({type}: IProps) {
  switch(type) {
    case 'vintage_envelope':
      return <div className={styles.vintageEnvelope}></div>
    case 'marching_ants':
      return <div className={styles.marchingAnts}></div>
    default:
      return <div className={styles.default}></div>
  }
  
}
export default ContinuousImageBorder;