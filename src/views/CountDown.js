import React from "react";
import { useEffect, useState } from "react";
class CountDown extends React.Component {
  state = {
    count: 20,
  };

  componentWillMount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

const NewCountDown = () => {
  const [count, setCount] = useState(20);
  useEffect(() => {
    if (count === 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      console.log(">>>>>clear");
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count} hooks</div>;
};

export { NewCountDown, CountDown };
