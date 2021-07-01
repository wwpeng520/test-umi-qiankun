import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  // 微应用中会自动生成一个全局 model，可以在任意组件中获取主应用透传的 props 的值。
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log('masterProps: ', masterProps);
  return (
    <div>
      <h1 className={styles.title}>mini app</h1>
      <br />
      mini mini mini
    </div>
  );
}
