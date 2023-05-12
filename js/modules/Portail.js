import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Portail
 */
export class Portail extends AbstractForm {
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

    Portail(ctx, dx, dy) {
        let ox = dx;
        let oy = dy;
        // Dessiner le portail du nether
        ctx.beginPath();
        ctx.rect(dx, ctx.canvas.height - 200, 40, 160);
        ctx.rect(dx, ctx.canvas.height - 200, 130, -40);
        ctx.rect(dx + 130, ctx.canvas.height - 240, 40, 180);
        ctx.rect(dx + 40, ctx.canvas.height - 20, 130, -40);
        ctx.rect(dx, ctx.canvas.height - 40, 40, 20);
        ctx.fillStyle = "#000210";
        ctx.fill();

        // l'intérieur du portail
        ctx.beginPath();
        ctx.rect(dx + 40, ctx.canvas.height - 200, 90, 140);
        ctx.fillStyle = "#8A2BE2";
        ctx.fill();

        ctx.restore();
    }


    draw(ctx) {
        ctx.save()
        this.Portail(ctx, this.x, this.y)
    
        // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings
        ctx.restore()
    }

    static buildForms() {
        let forms = []
        forms.push(new Portail(Math.random() * 850, 0, 100, 100, '', '', 1, true, 4))
        return forms
    }
}
