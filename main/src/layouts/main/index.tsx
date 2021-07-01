import { Layout } from 'antd';

interface IProps {
  children?: React.ReactElement;
}
export default function index({ children }: IProps) {
  return (
    <Layout>
      <div>header</div>
      {children}
    </Layout>
  );
}
