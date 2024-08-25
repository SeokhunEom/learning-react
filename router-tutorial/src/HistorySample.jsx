import { useEffect } from 'react';

const HistorySample = () => {
  const history = window.history;

  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push('/');
  };

  useEffect(() => {
    history.back('정말 떠나실 건가요?');
  }, [history]);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
