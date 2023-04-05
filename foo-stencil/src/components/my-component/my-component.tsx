import { Component, h } from '@stencil/core';
import { myLib } from 'my-lib';
import { foo } from 'my-lib/foo';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return [
      <div>{myLib}</div>,
      <div>{foo}</div>,
    ];
  }
}
