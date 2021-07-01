import { Route, Switch } from 'umi';
import Main from './main';

interface IProps {
  children?: React.ReactElement;
}
export default function App({ children }: IProps) {
  return (
    <Switch>
      <Route path="/">
        <Main>{children}</Main>
      </Route>
    </Switch>
  );
}
