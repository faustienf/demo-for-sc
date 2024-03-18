import { LocalState } from './local-state';
import { ReduxState } from './redux-state';
import { ReatomState } from './reatom-state';

function App() {
  return (
    <>
      <LocalState />
      <ReduxState />
      <ReatomState />
    </>
  );
}

export default App;
