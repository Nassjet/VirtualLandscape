import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Arbre
 */
export class Arbre extends AbstractForm {
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

  Arbre(ctx, dx, dy) {
    // Dessiner l'arbre
    ctx.beginPath();
    ctx.arc(dx + canvas.width/2, dy + canvas.height/1.6, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "#75A542";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(dx + canvas.width/2 - 20, dy + canvas.height/1.6 + 60, 40, 120);
    ctx.fillStyle = "#8B4513";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dx + canvas.width/2 - 60, dy + canvas.height/1.6 + 70, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "#75A542";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dx + canvas.width/2 + 60, dy + canvas.height/1.6 + 70, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "#75A542";
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx, canvas) {
    ctx.save();
    this.Arbre(ctx, this.x, this.y);
    // Restaure les styles précédents pour éviter que les couleurs utilisées ici
    // ne polluent les autres dessins
    ctx.restore();
  }

  /**
   * Obtient un tableau d'objets de type Arbre
   * @return {[Arbre,...]}
   */
  static buildForms() {
    let forms = []
    forms.push(new Arbre(canvas.width/2-150, canvas.height/1.6-200, 100, 100, '', '', 1, false, 4))
    return forms
  }
}
