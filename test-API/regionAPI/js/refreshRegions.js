import { getAllRegions } from './API.js';
import { createLi } from './utils.js'; 

export async function refreshRegions(regionList) {
    // Clear the region list
    regionList.innerHTML = '';

    // Fetch all regions and create li elements for parentless or root ones
    const regions = await getAllRegions();
    console.log(regions);
    // Consider regions with "root" parent or without a parent as parentless
    const parentlessRegions = regions.filter(region => !region.parent || region.parent === '000000000000000000000000');
    for (const region of parentlessRegions) {
        if (region.name != "root") {
            const li = createLi(region);
            regionList.appendChild(li);
        }
    }
}

