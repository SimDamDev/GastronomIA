import {getAllUnits} from './API.js';
import {createLi} from './utils.js';

export async function refreshUnits(unitList) {
    // Clear the unit list
    unitList.innerHTML = '';

    // Fetch all units and create li elements for parentless or root ones
    const units = await getAllUnits();
    console.log(units);

    const li = createLi(units);
    unitList.appendChild(li);

}
