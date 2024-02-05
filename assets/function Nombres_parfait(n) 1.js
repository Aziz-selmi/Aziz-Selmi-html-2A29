
function calcul(x, y) {
  var pi = 3.14;
  if (x > 0) {
    return (x + y) * pi;
  } else {
    return y * pi;
  }
}

console.log(calcul(2, 5)); // Affiche 22.69
console.log(calcul(-1, 3)); // Affiche 9.42*/

function Nombres_parfait(n) {
    // Initialiser la liste des nombres parfaits
    const nombresParfaits = [];
  
    // Parcourir tous les nombres de 2 à n
    for (let i = 2; i <= n; i++) {
      // Calculer la somme des diviseurs stricts de i
      const sommeDiviseurs = 0;
      for (let j = 1; j < i; j++) {
        if (i % j === 0) {
          sommeDiviseurs += j;
        }
      }
  
      // Si i est égal à la somme de ses diviseurs stricts
      if (i === sommeDiviseurs) {
        // Ajouter i à la liste des nombres parfaits
        nombresParfaits.push(i);
      }
    }
  
    // Afficher la liste des nombres parfaits
    console.log(nombresParfaits);
  }
  
  Nombres_parfait(100); // [6, 28, 496]*/


const lettres1 = "abc";
const lettres2 = "de";

const result = [];
for (let i = 0; i < lettres1.length; i++) {
  for (let j = 0; j < lettres2.length; j++) {
    result.push(lettres1[i] + lettres2[j]);
  }
}

console.log(result);*/

EXERCICE Tableau:
const T = [17, 38, 10, 25, 72];

// Tri et affichage
console.log("Tableau trié : ", T.sort());

// Ajout d'un élément et affichage
T.push(12);
console.log("Tableau avec 12 ajouté : ", T);

// Renversement et affichage
T.reverse();
console.log("Tableau inversé : ", T);

// Indice de l'élément 17
console.log("Indice de 17 : ", T.indexOf(17));

// Suppression de l'élément 38 et affichage
T.splice(T.indexOf(38), 1);
console.log("Tableau sans 38 : ", T);

// Sous-tableaux
console.log("Sous-tableau 2ème au 3ème : ", T.slice(1, 3));
console.log("Sous-tableau début au 2ème : ", T.slice(0, 2));
console.log("Sous-tableau 3ème à la fin : ", T.slice(2));

function genererNombreAleatoire() {
  let nombreAleatoire = Math.floor(Math.random() * 10);
  let compteurEssais = 1;

  while (compteurEssais <= 3) {
    let nombreSaisi = parseInt(prompt("Entrez un nombre entre 0 et 10 : "));

    if (nombreSaisi === nombreAleatoire) {
      alert("Bravo ! Vous avez trouvé le nombre en " + compteurEssais + " essai(s).");
      break;
    } else if (compteurEssais < 3) {
      alert("Mauvaise réponse. Veuillez réessayer. (" + (3 - compteurEssais) + " essai(s) restant(s))");
      compteurEssais++;
    } else {
      alert("Dommage, vous n'avez pas trouvé le nombre. Le nombre était : " + nombreAleatoire);
    }
  }
}

genererNombreAleatoire();

  