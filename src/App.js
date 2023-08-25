import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Say />
        <EventPractice />
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To Bottom
        </button>
      </div>
    );
  }
}

export default App;
