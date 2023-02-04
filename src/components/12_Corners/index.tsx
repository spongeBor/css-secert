import styles from './index.module.scss';
interface IProps {
  type: 'gradient' | 'scoop-corners' | 'beveled-corners' | 'clip'
}
function Corners({type}:IProps) {
  switch(type) {
    case 'gradient':
      return <div className={styles.container}>
        <div className={styles.gradient}></div>
      </div>;
    case 'scoop-corners':
      return <div className={styles.container}>
        <div className={styles.scoopCorners}></div>
      </div>;
    case 'beveled-corners':
      return <div className={styles.container}>
        <div className={styles.beveledCorners}></div>
      </div>;
    case 'clip':
      return <div className={styles.container}>
        <div className={styles.clip}></div>
      </div>;
  }
}
export default Corners;