// index.js
import { refreshRegions } from './js/refreshRegions.js';
import { moveAction, updateAction, deleteAction, createAction } from './js/actions.js';

// IMPROVE: Use a more modern approach for loading events, such as using the DOMContentLoaded event.
// IMPACTS-OTHERS: This might impact the loading order of other scripts, so it needs to be done carefully.
// document.addEventListener('DOMContentLoaded', async function() {

window.onload = async function() {
    const regionList = document.querySelector('#region-list');
    const actionsDiv = document.querySelector('#actions-panel');

    // FEATURE: Create a confirmation prompt before starting the move action.
    document.querySelector('#move-button').addEventListener('click', function() {
        moveAction(actionsDiv, regionList);
    });

    document.querySelector('#update-button').addEventListener('click', function() {
        // FEATURE: Implement a feature to check if the region is already in the update process before starting another one.
        updateAction(actionsDiv, regionList);
    });

    document.querySelector('#delete-region').addEventListener('click', function() {
        // FEATURE: Create a confirmation prompt before starting the delete action.
        deleteAction(actionsDiv, regionList);
    });

    document.querySelector('#create-button').addEventListener('click', function() {
        // FEATURE: Implement a feature to check if a region with the same name already exists before creation.
        createAction(actionsDiv, regionList);
    });

    // Refresh the region list
    // IMPROVE: Implement a loading spinner or similar to indicate that regions are being loaded.
    // IMPACT-OTHERS: This might impact the UI design and layout, so it needs to be coordinated with the front-end team.
    await refreshRegions(regionList);
};
