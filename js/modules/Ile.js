import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Ile
 */
export class Ile extends AbstractForm {
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

  ile(ctx, dx, dy) {
    // Ile volante
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 510, dy + canvas.height - 500, 120, 30);
    ctx.fillStyle = "#8B4513";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 490, dy + canvas.height - 470, 80, 20);
    ctx.fillStyle = "#8B4513";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 550, dy + canvas.height - 530, 200, 30);
    ctx.fillStyle = "#8B4513";
    ctx.fill();

    // Nuages qui tiennent l'ile
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 560, dy + canvas.height - 530, 30, 30);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 540, dy + canvas.height - 500, 40, 30);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 510, dy + canvas.height - 470, 30, 20);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 480, dy + canvas.height - 450, 70, 20);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 410, dy + canvas.height - 470, 30, 20);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 360, dy + canvas.height - 530, 30, 30);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(dx + canvas.width - 390, dy + canvas.height - 500, 40, 30);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    // Tronc de l'arbre
    ctx.fillStyle = '#8B4513'; // brun
    ctx.fillRect(dx + canvas.width - 470, dy + canvas.height - 630, 50, 100);

    // Feuilles de l'arbre
    ctx.fillStyle = '#228B22'; // vert
    ctx.fillRect(dx + canvas.width - 520, dy + canvas.height - 730, 150, 50);
    ctx.fillRect(dx + canvas.width - 545, dy + canvas.height - 680, 200, 50);
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();
    this.ile(ctx, this.x, this.y);
        // Restaure les styles précédents pour éviter que les couleurs utilisées ici
    // ne polluent les autres dessins
    ctx.restore();
  }

  /**
   * Obtient un tableau d'objets de type Ile
   * @return {[Ile,...]}
   */
  static buildForms() {
    let forms = []
    forms.push(new Ile(Math.random() *200, 100, 100, 100, '', '', 1, false, 5))
    return forms
  }
}


   
