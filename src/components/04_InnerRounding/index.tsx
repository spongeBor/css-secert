import styles from './index.module.scss';
function InnerRounding({onlyOne}:{onlyOne?: boolean}) {
  const one = <div className={styles.only}>
    I have a nice subtle inner rounding,
    don't I look pretty?
</div>
  if(onlyOne) {
    return one;
  }
  return <div className={styles['something-meaningful']}>
    <div>
      I have a nice subtle inner rounding,
      don't I look pretty?
    </div>
  </div>
}
export default InnerRounding;