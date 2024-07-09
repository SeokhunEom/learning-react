import { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        <ValidationSample />
        <div>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollBottom()}>
            맨 밑으로
          </button>
        </div>
      </>
    );
  }
}

export default App;
