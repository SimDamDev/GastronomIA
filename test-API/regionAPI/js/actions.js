import { moveRegion, getAllRegions, updateRegion, deleteRegion} from './API.js';
import { refreshRegions } from './refreshRegions.js';
import { createMoveForm, createUpdateForm, createDeleteForm, createCreateForm} from './utils.js';


export async function moveAction(actionsDiv, regionList) {
    const regions = await getAllRegions();

    // Create and append move form
    const moveForm = createMoveForm(async function(event) {
        event.preventDefault();
        const regionId = moveForm.querySelector('#region-id').value;
        const newParentId = moveForm.querySelector('#new-parent-id').value;
    
        if (regionId === newParentId) {
            alert("Une région ne peut pas être son propre parent. Veuillez choisir une autre région.");
            return;
        }
    
        // Make the API request to move the region
        await moveRegion(regionId, newParentId);
    
        // Clear the form
        moveForm.querySelector('#region-id').value = '';
        moveForm.querySelector('#new-parent-id').value = '';
    
        // Refresh the region list
        await refreshRegions(regionList);
    
        // Hide the actions div
        actionsDiv.style.display = 'none';
    }, regions);
    
    // Empty the actions div and append the move form
    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(moveForm);

    // Show the actions div
    actionsDiv.style.display = 'block';
}

export async function updateAction(actionsDiv, regionList) {
    const regions = await getAllRegions();

    // Create and append update form
    const updateForm = await createUpdateForm(async function(event) {
        event.preventDefault();
        const regionId = updateForm.querySelector('#region-id').value;
        const newRegionName = updateForm.querySelector('#new-region-name').value;

        // Make the API request to update the region
        await updateRegion(regionId, { name: newRegionName });

        // Clear the form
        updateForm.querySelector('#region-id').value = '';
        updateForm.querySelector('#new-region-name').value = '';

        // Refresh the region list
        await refreshRegions(regionList);

        // Hide the actions div
        actionsDiv.style.display = 'none';
    }, regions);

    // Empty the actions div and append the update form
    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(updateForm);

    // Show the actions div
    actionsDiv.style.display = 'block';
}



export async function deleteAction(actionsDiv, regionList) {
    const regions = await getAllRegions();

    // Create and append delete form
    const deleteForm = createDeleteForm(async function(event) {
        event.preventDefault();
        const regionId = deleteForm.querySelector('#region-id').value;

        // Make the API request to delete the region
        try {
            await deleteRegion(regionId);
            alert("La région a été supprimée avec succès");
        } catch (err) {
            alert("La suppression de la région a échoué");
        }

        //IMPROVE consider to set children to parent's parent

        // Clear the form
        deleteForm.querySelector('#region-id').value = '';

        // Refresh the region list
        await refreshRegions(regionList);

        // Hide the actions div
        actionsDiv.style.display = 'none';
    }, regions);

    // Empty the actions div and append the delete form
    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(deleteForm);

    // Show the actions div
    actionsDiv.style.display = 'block';
}

import { createRegion } from './API.js';  // assurez-vous d'avoir cette fonction dans votre module API

export async function createAction(actionsDiv, regionList) {
    const regions = await getAllRegions();

    // Create and append create form
    const createForm = createCreateForm(async function(event) {
        event.preventDefault();
        const regionName = createForm.querySelector('#region-name').value;
        const parentId = createForm.querySelector('#parent-region-id').value;

        // Make the API request to create the region
        await createRegion({ name: regionName, parent: parentId });

        // Clear the form
        createForm.querySelector('#region-name').value = '';
        createForm.querySelector('#parent-region-id').value = '';

        // Refresh the region list
        await refreshRegions(regionList);

        // Hide the actions div
        actionsDiv.style.display = 'none';
    }, regions);

    // Empty the actions div and append the create form
    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(createForm);

    // Show the actions div
    actionsDiv.style.display = 'block';
}




