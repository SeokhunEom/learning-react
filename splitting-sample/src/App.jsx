import { Suspense, useState } from 'react';

import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>Loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    import('./notify').then((result) => result.default());
  };

  const onClickVis = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div>
      <header>
        <p onClick={onClick}>Hello React!</p>
        <p onClick={onClickVis} onMouseOver={onMouseOver}>
          Hello React! 2
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
