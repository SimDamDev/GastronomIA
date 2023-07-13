import { getAllUnits, createUnit} from "./API.js";
import {refreshUnits} from './refreshUnits.js';
import {createCreateForm} from './utils.js';


export async function createAction(actionsDiv, unitList){
    const units = await getAllUnits();

    const createForm = await createCreateForm(async function(event){
        event.preventDefault();
        const unitName = createForm.querySelector('#unit-name').value;
        const unitabbreviation = createForm.querySelector('#unit-abbreviation').value;
        const type = createForm.querySelector('#type').value;
        const conversionFactor = createForm.querySelector('#conversionFactor').value;
        const baseUnit = createForm.querySelector('#baseUnit').value;
        const icon = createForm.querySelector('#icon').value;

        await createUnit({name: unitName, abbreviation: unitabbreviation, type: type, conversionFactor: conversionFactor, baseUnit: baseUnit, icon: icon, isActive: isActive});

        createForm.querySelector('#unit-name').value = '';
        createForm.querySelector('#unit-abbreviation').value = '';
        createForm.querySelector('#type').value = '';
        createForm.querySelector('#conversionFactor').value = '';
        createForm.querySelector('#baseUnit').value = '';
        createForm.querySelector('#icon').value = '';

        await refreshUnits(unitList);

        actionsDiv.style.display = 'none';
}, units);

    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(createForm);

    actionsDiv.style.display = 'block';
}

export async function updateAction(){
    console.log('updateAction');
}

export async function deleteAction(){
    console.log('deleteAction');
}

export async function filterAction(){
    console.log('filterAction');
}
