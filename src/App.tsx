import { LocalState } from './LocalState';
import { ReduxState } from './ReduxState';
import { ReatomState } from './ReatomState';

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
