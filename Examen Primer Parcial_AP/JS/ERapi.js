async function showContent() {
    let main = document.getElementById('category').value;
    let sub = document.getElementById('type').value;
    const url = `https://8hldb61jkj.execute-api.us-east-1.amazonaws.com/dev/searchitems?main=${main}&sub=${sub}`;
    let results = await fetch(url);
    results = await results.json();
    let container = document.getElementById('main');
    container.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
        const item = results[i];
        let card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h2>${item.name}</h2>
                <img src=${item.image} width="214"
                height="204">
                <span>${item.category}</span>
            </div>
            <div class="flip-card-back">
                <span>${item.description}</span>
            </div>
        </div>
            
           
        `;
        container.appendChild(card);
    }
}

let selectedCategory = 'armors';

function initialize() {
    const categories = ['armors', 'weapons'];
    const subCatWeapon = ["Axe",
        "Ballista",
        "Bow",
        "Claw",
        "Colossal Sword",
        "Colossal Weapon",
        "Crossbow",
        "Curved Greatsword",
        "Curved Sword",
        "Dagger",
        "Fist",
        "Flail",
        "Glintstone Staff",
        "Glintstone S",
        "Greataxe",
        "Greatbow",
        "Great Spear",
        "Greatsword",
        "Halberd",
        "Hammer",
        "Heavy Thrusting Sword",
        "Katana",
        "Light Bow",
        "Reaper",
        "Sacred Seal",
        "Spear",
        "Straight Sword",
        "Thrusting Sword",
        "Weapon",
        "Torch",
        "Twinblade",
        "Warhammer"];

    const subCatArmor = ["Leg Armor",
        "Chest Armor",
        "Helm",
        "Gauntlet"]

    const categoryDrop = document.getElementById('category');
    categoryDrop.innerHTML = '';
    categories.forEach(ca => {
        let option = document.createElement('option');
        option.setAttribute('value', ca);
        option.innerHTML = ca.charAt(0).toUpperCase() + ca.slice(1);
        categoryDrop.appendChild(option);
    })
    categoryDrop.value = selectedCategory;

    const typeDrop = document.getElementById('type');
    typeDrop.innerHTML = '';
    let subCat = selectedCategory === 'armors' ? subCatArmor : subCatWeapon;
    let allOption = document.createElement('option');
    allOption.innerHTML = 'All';
    allOption.setAttribute('value', 'all');
    typeDrop.appendChild(allOption);
    subCat.forEach(sc => {
        let option = document.createElement('option');
        option.setAttribute('value', sc);
        option.innerHTML = sc;
        typeDrop.appendChild(option);
    })
}


function changeCategory() {
    let category = document.getElementById('category').value;
    selectedCategory = category;

    initialize();
}
initialize();