import React from "react";

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    // 创建一个ref存储textInput的DOM元素
    this.textInput = React.createRef();
  }
  focusTextInput = () => {
    // 通过current访问DOM节点
    this.textInput.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="点击聚焦" onClick={this.focusTextInput} />
      </div>
    );
  }
}

// 为组件添加Ref
class AutoFocus extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个ref存储textInput的DOM元素
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return <TextInput ref={this.textInput} />;
  }
}

class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setInputRef = ele => {
      this.textInput = ele;
    };
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };
  }
  componentDidMount() {
    // 组件挂载后 文本框自动获取焦点
    this.focusTextInput();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setInputRef} />
        <input type="button" value="聚焦" onClick={this.focusTextInput} />
        <input />
      </div>
    );
  }
}

export default class InputRefs extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }
  componentDidMount() {
    // 组件挂载后 文本框自动获取焦点
    this.focus();
  }
  focus = () => {
    console.log(this.textInput.value, this.p.innerText);
    // 组件间传值 方式1
    if (this.textInput) this.textInput.focus();
    // 组件间传值 方式2
    console.log(this.refs.textInput2.value);
    

  };
  render() {
    return (
      <div>
        {/* 组件间传值方式1 */}
        <p ref={p => { this.p = p}}> refs组件间传递 </p>
        <input
          type="text"
          // 相当于将其本身通过形参传给 组件的setInputRef
          ref={ipt => {
            this.textInput = ipt;
          }}
        />
        {/* 组件间传值   方式2 */}
        <input type="text"  ref='textInput2' />

        <input type="button" value="聚焦" onClick={this.focus} />
      </div>
    );
  }
}
