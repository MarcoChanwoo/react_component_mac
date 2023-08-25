// import { Component } from 'react';

import { useState } from 'react';

// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: '',
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     };

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: '',
//         });
//     };

//     handleKeyPress = (e) => { // Enter Key로 동작 설정
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="Type here anything..."
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>Confirm</button>
//             </div>
//         );
//     }
// }

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 해당 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값으로 덮어 씌움
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>Event</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Type here anything..."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Confirm</button>
    </div>
  );
};

export default EventPractice;
