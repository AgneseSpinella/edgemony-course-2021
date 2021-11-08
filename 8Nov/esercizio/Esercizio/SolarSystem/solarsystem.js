/* 2. Sulla base dell'oggetto `solarSystem` visto a lezione, creare delle funzioni che:

- convertano il valore della chiave `name` in Italiano.
  Per esempio, Saturn diverrà Saturno.

- considerato che il diametro è il raggio per due volte,
  scrivere una funzione `planetDiameter` che ne ritorni il diametro.
  Usate come riferimento le prime arrow function viste a lezione...
*/
const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
  ];

/* find diameter */
const planetDiameter = (planets) => planets.radius * 2; 
diametro = solarSystem.map(planetDiameter)
console.log(diametro)

/* translate planets names */
const newSystem = solarSystem.map(p =>
    p.name === 'Sun'
      ? { ...p, name: 'Sole' }
    : p.name === "Mercury"
      ? { ...p, name: 'Mercurio' }
    : p.name === "Venus"
      ? { ...p, name: 'Venere' }
    : p.name === "Earth"
      ? { ...p, name: 'Terra' }
    : p.name === "Mars"
      ? { ...p, name: 'Marte' }
    : p.name === "Jupiter"
      ? { ...p, name: 'Giove' }
    : p.name === "Saturn"
      ? { ...p, name: 'Saturno' }
    : p.name === "Uranus"
      ? { ...p, name: 'Urano' }
    : p.name === "Neptune"
      ? { ...p, name: 'Nettuno' }
      : p
  );

