import {getAllUnits} from './API.js';
import {createLi} from './utils.js';

export async function refreshUnits(unitList) {
    // Clear the unit list
    unitList.innerHTML = '';

    const units = await getAllUnits();
    console.log(units);

    for (let i = 0; i < units.length; i++) {
        const li = createLi(units[i]);
        unitList.appendChild(li);
    }
}
