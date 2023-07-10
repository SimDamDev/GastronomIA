// refreshRegions.js
import { getAllRegions } from './API.js';
import { createLi } from './utils.js';

export async function refreshRegions(regionList) {
    // Clear the region list
    regionList.innerHTML = '';

    // Fetch all the regions and create li elements for parentless ones
    const regions = await getAllRegions();
    
    // IMPROVE: Consider handling API errors and inform the user when regions can't be fetched
    // IMPACTS-OTHERS: This would also require changes in the API module

    // FEATURE: Consider adding a feature to sort regions alphabetically or by other criteria
    const parentlessRegions = regions.filter(region => !region.parent);

    for (const region of parentlessRegions) {
        const li = createLi(region);

        // IMPROVE: Add error handling for createLi() in case the creation of the list item fails
        regionList.appendChild(li);
    }

    // FEATURE: Consider adding a feature to expand all regions or collapse all regions with a button click
    // IMPACTS-OTHERS: This would require changes to the HTML to add the buttons
    // and to the CSS for visual styling
}
