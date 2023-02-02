import styles from './index.module.scss';
interface IProps {
  type?: 'tablecloth' | 'mesh' | 'blueprint' | 'polka' | 'checkerboard'
}
function ComplexBg({type}:IProps) {
  switch(type) {
    case 'tablecloth':
      return <div className={styles.tablecloth}></div>
    case 'mesh':
      return <div className={styles.mesh}></div>
    case 'blueprint':
      return <div className={styles.bluePrint}></div>
    case 'polka':
      return <div className={styles.polka}></div>
    case 'checkerboard':
      return <div className={styles.checkerboard}></div>
    default:
      return <div></div>
  }
}
export default ComplexBg;