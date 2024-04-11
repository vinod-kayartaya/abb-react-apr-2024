import React, { Component } from 'react';

export default class Footer extends Component {
  constructor() {
    super();
    console.log('Footer.constructor() called');
  }

  componentDidMount() {
    console.log('Footer.componentDidMount() called');
  }

  componentWillUnmount() {
    console.log('Footer.componentWillUnmount() called');
  }

  render() {
    console.log('Footer.render() called');
    return (
      <>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-4'>this is a footer column</div>
            <div className='col-4'>this is a footer column</div>
            <div className='col-4'>this is a footer column</div>
          </div>
        </div>
      </>
    );
  }
}
