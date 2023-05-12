import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Rayons
 */
export class Rayons extends AbstractForm {
  // Ajoute des valeurs par défaut pour éviter les erreurs sur les arguments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
  }

  drawRayons(ctx, dx, dy) {
    // Dessiner les rayons du soleil
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(dx + canvas.width / 2, dy + canvas.height / 2 + canvas.width / 2 + 50);
      ctx.lineTo(
        dx + canvas.width / 2 + (canvas.width / 2 - 50) * Math.cos((i * Math.PI) / 6),
        dy + canvas.height / 2 + canvas.width / 2 + 50 + (canvas.width / 2 - 50) * Math.sin((i * Math.PI) / 6)
      );
      ctx.lineWidth = 7;
      ctx.strokeStyle = "#FFFF00";
      ctx.stroke();
    }
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx, canvas) {
    ctx.save();
    this.drawRayons(ctx, this.x, this.y);
    // Restaure les styles précédents pour éviter que les couleurs utilisées ici
    // ne polluent les autres dessins
    ctx.restore();
  }

  /**
   * Obtient un tableau d'objets de type Rayons
   * @return {[Rayons,...]}
   */
  static buildForms() {
    let forms = [];
    for (var i = 0; i <= Math.floor(Math.random() * 6); i++) {
      forms.push(new Rayons(Math.random() * 500, Math.random() * 150 , 100, 100, 'blue', 'black', 1, true, 3));
    }

    console.log('nb de Rayons : ' + forms.length);

    // Retourne un tableau d'objets de type Rayons
    return forms;
  }
}
