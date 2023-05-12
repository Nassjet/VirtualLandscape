import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Fruits
 */
export class Fruits extends AbstractForm {
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

  drawFruits(ctx, dx, dy) {
    // Dessiner des fruits sur l'arbre
    ctx.beginPath();
    ctx.arc(dx + canvas.width / 2 - 60, dy + canvas.height / 1.6 + 70, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000"; // rouge pour la pomme
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dx + canvas.width / 2 - 25, dy + canvas.height / 1.6 + 20, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFA500"; // orange pour l'orange
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dx + canvas.width / 2 + 60, dy + canvas.height / 1.6 + 70, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFFF00"; // jaune pour la banane
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dx + canvas.width / 2 + 25, dy + canvas.height / 1.6 + 20, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF69B4"; // rose pour la fraise
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx, canvas) {
    ctx.save();
    this.drawFruits(ctx, this.x, this.y);
    // Restaure les styles précédents pour éviter que les couleurs utilisées ici
    // ne polluent les autres dessins
    ctx.restore();
  }

  /**
   * Obtient un tableau d'objets de type Fruits
   * @return {[Fruits,...]}
   */
  static buildForms() {
    let forms = [];
    forms.push(new Fruits(canvas.width / 2 - 150,Math.random() * canvas.height / 1.6 -160 , 100, 100, '', '', 1, false, 5));
    return forms;
  }
}
