const champCard = document.querySelector(".champion-card");
const champResults = document.querySelector(".champions");
let champList = [];

async function getCards() {
    const result = await fetch ('http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json');
    await result.json().then(element => {
        champList = element.data;
    });
    console.log(champList);
    // console.log(data.data);

    // for(let key in data.data) {
    //     champResults.innerHTML += cardHTML(data.data[key]);
    // }
}

function cardHTML(champion) {
    return `
    <div class="champion-card">
        <h3 class="champion-name">
            ${champion.name} <span class="champion_sub-name"> - ${champion.title}</span>
        </h3>
        <figure>
            <img src="./assets/champion/${champion.name.replace(/ |\.|\'|\&/g, "")}.png" alt="" class="champion_background">
        </figure>
        <div class="details__wrapper">
        <div class="details__wrapper">
        <div class="health_stat">
            <figure>
                <img src="" alt="" class="health__icon">
            </figure>
        </div>
        <div class="attack_speed_stat">
            <figure>
                <img src="./assets/StatMods/StatModsAttackSpeedIcon.png" alt="" class="health__icon">
            </figure>
        </div>
        <div class="defence_stat">
            <figure>
                <img src="./assets/StatMods/StatModsArmorIcon.png" alt="" class="health__icon">
            </figure>
        </div>
        <div class="magic_stat">
            <figure>
                <img src="./assets/StatMods/StatModsAdaptiveForceIcon.png" alt="" class="health__icon">
            </figure>
        </div>
        <div class="resistance_stat">
            <figure>
                <img src="./assets/StatMods/StatModsMagicResIcon.MagicResist_Fix.png" alt="" class="health__icon">
            </figure>
        </div>
    </div>
        </div>
    </div>
    `
}

function renderCards(allChamps, filter) {
    if(!filter) {
        for(let key in allChamps) {
            champResults.innerHTML += cardHTML(allChamps[key]);
        }
    }
}

getCards();

setTimeout(() => {
    renderCards(champList, );
}, 1000);