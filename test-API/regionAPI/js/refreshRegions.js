// refreshRegions.js
import { getAllRegions } from './API.js';
import { createLi } from './utils.js'; // Import from 'utils.js' not 'API.js'

export async function refreshRegions(regionList) {
    // Clear the region list
    regionList.innerHTML = '';

    // Fetch all the regions and create li elements for parentless ones
    const regions = await getAllRegions();
    const parentlessRegions = regions.filter(region => !region.parent);
    for (const region of parentlessRegions) {
        const li = createLi(region);
        regionList.appendChild(li);
    }
}
