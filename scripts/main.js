//M0 definisco l'array
const team = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "../img/wayne-barnett-founder-ceo.jpg" },
    { nome: "Angela Caroll", ruolo: "Chief Editor", foto: "../img/angela-caroll-chief-editor.jpg" },
    { nome: "Walter Gordon", ruolo: "Office Manager", foto: "../img/walter-gordon-office-manager.jpg" },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "../img/angela-lopez-social-media-manager.jpg" },
    { nome: "Scott Estrada", ruolo: "Developer", foto: "../img/scott-estrada-developer.jpg" },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "../img/barbara-ramos-graphic-designer.jpg" }
  ];

// Ciclo for per iterare attraverso l'array 'team'
for (let i = 0; i < team.length; i++) {
    // Costruzione della stringa di output per il membro corrente
    const output = `Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}`;
    // Stampa della stringa in console
    console.log(output);
  }
  