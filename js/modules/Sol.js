import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Sol
 */
export class Sol extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
  }

  draw(ctx) {
    ctx.save();

    // Dessiner le sol
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height);
    ctx.lineTo(0, ctx.canvas.height - 100);
    ctx.arcTo(ctx.canvas.width / 2, ctx.canvas.height - 200, ctx.canvas.width, ctx.canvas.height - 100, ctx.canvas.width / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
    ctx.closePath();

    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  static buildForms() {
    const sol = new Sol(1000, 150 - 50, 100, 100, '#8B4513', 'black', 1, true, 3);
    return [sol];
  }
}
