const creatureEndpoint = "https://rpg-creature-api.freecodecamp.rocks/api/creature";

// Elementos
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const nameEl = document.getElementById("creature-name");
const idEl = document.getElementById("creature-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const typesEl = document.getElementById("types");
const specialNameEl = document.getElementById("special-name");
const specialDescEl = document.getElementById("special-description");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const specialAttackEl = document.getElementById("special-attack");
const specialDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");

// Evento
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const search = input.value.trim().toLowerCase();

  if (!search) return;

  try {
    const response = await fetch(`${creatureEndpoint}/${search}`);
    if (!response.ok) throw new Error("Criatura não encontrada!");
    const data = await response.json();
    updateCreatureDisplay(data);
  } catch (error) {
    alert(error.message);
    clearCreatureDisplay();
  }
});

// Funções
function updateCreatureDisplay(data) {
  const { name, id, weight, height, special, stats, types } = data;

  nameEl.textContent = name;
  idEl.textContent = `#${id}`;
  weightEl.textContent = `Peso: ${weight}`;
  heightEl.textContent = `Altura: ${height}`;
  specialNameEl.textContent = special.name;
  specialDescEl.textContent = special.description;

  const statsMap = Object.fromEntries(stats.map(stat => [stat.name, stat.base_stat]));

  hpEl.textContent = statsMap.hp;
  attackEl.textContent = statsMap.attack;
  defenseEl.textContent = statsMap.defense;
  specialAttackEl.textContent = statsMap["special-attack"];
  specialDefenseEl.textContent = statsMap["special-defense"];
  speedEl.textContent = statsMap.speed;

  typesEl.innerHTML = "";
  types.forEach(type => {
    const span = document.createElement("span");
    span.className = "type";
    span.textContent = type.name;
    typesEl.appendChild(span);
  });
}

function clearCreatureDisplay() {
  [nameEl, idEl, weightEl, heightEl, specialNameEl, specialDescEl, hpEl, attackEl, defenseEl, specialAttackEl, specialDefenseEl, speedEl].forEach(el => el.textContent = "");
  typesEl.innerHTML = "";
  input.value = "";
}
