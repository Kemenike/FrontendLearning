let champCards = document.querySelector(".champion-card");
const champResults = document.querySelector(".champions");
const searchInput = document.querySelector("#search_bar");
let champList;
let champListArr = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    champListArr.forEach(champion => {
        const tags = champion.tags.join(':');
        const isVisible = champion.name.toLowerCase().includes(value) || tags.toLowerCase().includes(value);
        document.querySelector(`.${champion.id}`).classList.toggle("hide", !isVisible);
    })
})


async function getCards() {
    const result = await fetch ('http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/championFull.json');
    await result.json().then(element => {
        champList = element.data;
    });
    for(let champion in champList) {
        champListArr.push(champList[champion]);
    }
    console.log(champList);
}

function cardHTML(champion) {
    return `
    <div class="champion-card ${champion.id} ${champion.tags.join(" ")}">
    <h3 class="champion-name">
    ${champion.name} <span class="champion_sub-name"> - ${champion.title}</span>
        </h3>
        <figure>
            <img src="./assets/champion/${champion.id}.png" alt="" class="champion_background">
        </figure>
        <h3 class="detail__title">Stats</h3>
        <div class="details-stats__wrapper">
            <div class="stat__wrapper stat__adaptive">
                <figure>
                    <img src="./assets/StatMods/StatModsAdaptiveForceIcon.png" alt="" class="stat_icon adaptive__icon">
                </figure>
                <div class="adaptive__wrapper">
                    <p class="stat__info base__ad">${champion.stats.attackdamage} AD <br> <span class="per-level">+${champion.stats.attackdamageperlevel} AD/lvl</span></p>
                </div>
            </div>
            <div class="stat__wrapper stat__health">
                <figure>
                    <img src="./assets//StatMods/StatModsHealthScalingIcon.png" alt="" class="stat_icon health__icon">
                </figure>
                <p class="stat__info">${champion.stats.hp} HP <br> <span class="per-level">+${champion.stats.hpperlevel} HP/lvl</span></p>
            </div>
            <div class="stat__wrapper stat__attack-speed">
                <figure>
                    <img src="./assets/StatMods/StatModsAttackSpeedIcon.png" alt="" class="stat_icon as__icon">
                    <p class="stat"><span class="stat_per_level"></span></p>
                </figure>
                <p class="stat__info">${champion.stats.attackspeed} AS <br> <span class="per-level">+${champion.stats.attackspeedperlevel} AS/lvl </span></p>
            </div>
            <div class="stat__wrapper stat__armor">
                <figure>
                    <img src="./assets/StatMods/StatModsArmorIcon.png" alt="" class="stat_icon defense__icon">
                    <p class="stat"><span class="stat_per_level"></span></p>
                </figure>
                <p class="stat__info">${champion.stats.armor} AR <br> <span class="per-level">+${champion.stats.armorperlevel} AR/lvl</span></p>
            </div>
            <div class="stat__wrapper stat__resist">
                <figure>
                    <img src="./assets/StatMods/StatModsMagicResIcon.MagicResist_Fix.png" alt="" class="stat_icon mr__icon">
                </figure>
                <p class="stat__info">${champion.stats.spellblock} MR<br> <span class="per-level">+${champion.stats.spellblockperlevel} MR/lvl</span></p>
            </div>
        </div>
        <h3 class="detail__title">Moves</h3>
        <div class="move__list">
            <div class="move__wrapper">
                <figure class="move__img__wrapper">
                    <img src="./assets/passive/${champion.passive.image.full}" alt="" class="move__img">
                </figure>
            </div>
            <div class="move__wrapper">
                <figure class="move__img__wrapper">
                    <img src="./assets/spell/${champion.spells[0].image.full}" alt="" class="move__img">
                </figure>
            </div>
            <div class="move__wrapper">
                <figure class="move__img__wrapper">
                    <img src="./assets/spell/${champion.spells[1].image.full}" alt="" class="move__img">
                </figure>
            </div>
            <div class="move__wrapper">
                <figure class="move__img__wrapper">
                    <img src="./assets/spell/${champion.spells[2].image.full}" alt="" class="move__img">
                </figure>
            </div>
            <div class="move__wrapper">
                <figure class="move__img__wrapper">
                    <img src="./assets/spell/${champion.spells[3].image.full}" alt="" class="move__img">
                </figure>
            </div>
        </div>
        <h3 class="role__title">Roles</h3>
        <div class="role__list">
            ${showRoles(champion.tags)}
        </div>
    </div>
    `
}

function getRandomSplash(skinList) {
    let containerArr = [];
    for (let skins in skinList) {
        containerArr.push(skinList[skins].num);
    }
    return containerArr[Math.floor(Math.random() * containerArr.length)];
}

function showRoles(championtags) {
    if(championtags.length === 1) {
        return `
            <p class="role">${championtags[0]}</p>
        `;
    } else {
        return `
            <p class="role">${championtags[0]}, ${championtags[1]}</p>
        `;
    }
}

function renderCards(allChamps) {
    for(let key in allChamps) {
        champResults.innerHTML += cardHTML(allChamps[key]);
        document.querySelector(`.${allChamps[key].id}`)
            .style.background = `rgba(0, 0, 0, 0.6) url("../assets/centered/${allChamps[key].id}_${getRandomSplash(allChamps[key].skins)}.jpg") no-repeat center/305%`;
    }
}

getCards();

setTimeout(() => {
    renderCards(champList, );
}, 1000);