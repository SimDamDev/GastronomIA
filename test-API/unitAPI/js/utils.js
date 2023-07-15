import { getConstants } from './API.js';

export function createLi(unit) {
    const li = document.createElement('li');
    console.log(unit);
    li.appendChild(document.createTextNode(unit.name));
    li.dataset.id = unit._id; // Ajouter l'id de l'unité comme attribut de données pour pouvoir la récupérer plus tard

    // Ajouter un écouteur d'événements à l'élément li
    li.addEventListener('click', function(event) {
        event.stopPropagation();

    });

    return li;
}

export async function createCreateForm(submitHandler) {
    const form = document.createElement('form');
    const unitNameInput = document.createElement('input');
    const unitabbreviationInput = document.createElement('input');
    const typeInput = document.createElement('select');
    const conversionFactorInput = document.createElement('input');
    const baseUnitInput = document.createElement('select');
    const iconInput = document.createElement('input');
    const submitButton = document.createElement('button');

    const constants = await getConstants()
    console.log( constants)
    const unitType = constants.unitType;
    const baseUnit = constants.baseUnit



    unitNameInput.placeholder = 'Nom de l\'unité';
    unitabbreviationInput.placeholder = 'Abréviation de l\'unité';
    conversionFactorInput.placeholder = 'Facteur de conversion';
    iconInput.placeholder = 'Icone';

    unitType.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.text = type;
        typeInput.appendChild(option);
    });

    baseUnit.forEach(baseUnit => {
        const option = document.createElement('option');
        option.value = baseUnit;
        option.text = baseUnit;
        baseUnitInput.appendChild(option)
    });

    unitNameInput.id = 'unit-name';
    unitabbreviationInput.id = 'unit-abbreviation';
    typeInput.id = 'type';
    conversionFactorInput.id = 'conversionFactor';
    baseUnitInput.id = 'baseUnit';
    iconInput.id = 'icon';

    submitButton.textContent = 'Créer';

    form.appendChild(unitNameInput);
    form.appendChild(unitabbreviationInput);
    form.appendChild(typeInput);
    form.appendChild(conversionFactorInput);
    form.appendChild(baseUnitInput);
    form.appendChild(iconInput);
    form.appendChild(submitButton);

    form.addEventListener('submit', submitHandler);

    return form;
}


//TODO is active is true by default

