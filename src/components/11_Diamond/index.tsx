import styles from './index.module.scss';
interface IProps {
  type: 'images' | 'clip';
}
function Diamond({type}:IProps) {
  switch(type) {
    case 'images':
      return <div className={styles.container}>
      <div className={styles.picture}>
        <img src="http://csssecrets.io/images/adamcatlace.jpg" alt='...'/>
      </div>
      </div>
    case 'clip':
     return <>
      <div className={styles.clip}>
        <img src="http://csssecrets.io/images/adamcatlace.jpg" alt='...'/>
      </div>
      <div className={styles.clip}>
      <img src="http://csssecrets.io/images/adam-sleeping.jpg" alt='...'/>
      </div>
      
     </> 
  }
}
export default Diamond;