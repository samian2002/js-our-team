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
    console.log(`Nome: ${team[i].nome}, Ruolo: ${team[i].ruolo}`);
  }

  // Milestone 2: Stampa in pagina nome, ruolo e immagine di ogni membro del team
function displayTeamMembers() {
    let html = '';  // Stringa vuota per accumulare l'HTML di tutti i membri
    for (let i = 0; i < team.length; i++) {
      // Costruzione dell'HTML per il membro corrente
      html += `<div>
                <h2>${team[i].nome}</h2>
                <p>Ruolo: ${team[i].ruolo}</p>
                <img src="${team[i].foto}" alt="Foto di ${team[i].nome}">
              </div>`;
    }
    // Inserimento dell'HTML accumulato nel body della pagina
    document.body.innerHTML = html;
  }
  
  // Chiamata della funzione per visualizzare i membri del team in pagina
  displayTeamMembers();