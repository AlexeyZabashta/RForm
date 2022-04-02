import React from 'react';
import './Form.css';
import { PropsType } from './Header';

export class FormBlock extends React.Component<
  PropsType,
  {
    input: number;
    text: number;
    check: number;
    inputProp: string;
    textProp: string;
    checkProp: string;
    formProp: string;
  }
> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      input: 0,
      text: 0,
      check: 0,
      inputProp: 'start',
      textProp: 'start',
      checkProp: 'start',
      formProp: 'start',
    };
  }
  inputVal(e: React.ChangeEvent<HTMLInputElement>, val: string) {
    switch (val) {
      case 'inp':
        this.setState({
          input: Number(e.target.value),
        });
        break;
      case 'text':
        this.setState({
          text: Number(e.target.value),
        });
        break;
      case 'check':
        this.setState({
          check: Number(e.target.value),
        });
        break;
    }
  }

  createElem(val: string) {
    switch (val) {
      case 'input':
        return <input type="text" className="input_create" placeholder="new input"></input>;
      case 'text':
        return <textarea placeholder="new textarea" className="text_create"></textarea>;
      case 'check':
        return <input type="checkbox" className="check_create"></input>;
    }
  }
  CreateInput(e: string) {
    if (e === 'create') {
      const inp = [];
      for (let i = 0; i < this.state.input; i += 1) {
        inp.push('inp');
      }
      return <>{inp.map((item) => this.createElem('input'))}</>;
    }
  }

  CreateText(e: string) {
    if (e === 'create') {
      const text = [];
      for (let i = 0; i < this.state.text; i += 1) {
        text.push('text');
      }
      return <>{text.map((item) => this.createElem('text'))}</>;
    }
  }

  CreateCheck(e: string) {
    if (e === 'create') {
      const check = [];
      for (let i = 0; i < this.state.check; i += 1) {
        check.push('inp');
      }
      return <>{check.map((item) => this.createElem('check'))}</>;
    }
  }
  CreateForm() {
    if (
      (this.state.input || this.state.text || this.state.check) &&
      this.state.formProp === 'create'
    ) {
      return (
        <form className="create_form">
          <div className="form_block">{this.CreateInput(this.state.inputProp)}</div>
          <div className="form_block">{this.CreateText(this.state.textProp)}</div>
          <div className="form_block">{this.CreateCheck(this.state.checkProp)}</div>
        </form>
      );
    }
  }

  clearFlag() {
    this.setState({
      formProp: 'start',
    });
  }
  render() {
    return (
      <>
        <div className="values_wrapper">
          <form className="values_block">
            <div className="values_quant">
              <div className="values_text">Input quantity</div>
              <input
                type="text"
                placeholder="Input quantity"
                onChange={(e) => this.inputVal(e, 'inp')}
              ></input>
            </div>
            <div className="values_quant">
              <div className="values_text">Textarea quantity</div>
              <input
                type="text"
                placeholder="Textarea quantity"
                onChange={(e) => this.inputVal(e, 'text')}
              ></input>
            </div>
            <div className="values_quant">
              <div className="values_text">Checkbox quantity</div>
              <input
                type="text"
                placeholder="Checkbox quantity"
                onChange={(e) => this.inputVal(e, 'check')}
              ></input>
            </div>

            <button
              id="build"
              onClick={() => {
                this.setState({
                  inputProp: this.state.input > 0 ? 'create' : 'start',
                  textProp: this.state.text > 0 ? 'create' : 'start',
                  checkProp: this.state.check > 0 ? 'create' : 'start',
                  formProp:
                    this.state.input || this.state.text || this.state.check ? 'create' : 'start',
                });
              }}
            >
              Build
            </button>
          </form>
          {this.CreateForm()}
        </div>
      </>
    );
  }
}

export type FormPageType = {
  input: number;
  text: number;
  check: number;
};
