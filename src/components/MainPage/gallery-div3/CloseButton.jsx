import React from 'react';

class CloseButton extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(20, 20);
    ctx.moveTo(20, 0);
    ctx.lineTo(0, 20);
    ctx.stroke();

  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={20} height={20} />
      </div>
    )
  }
}
export default CloseButton;