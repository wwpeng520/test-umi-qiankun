import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>main page</h1>
      <Link to="/app1">点击 app1 报错</Link>
    </div>
  );
}
