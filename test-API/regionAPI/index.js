import {refreshRegions} from './js/refreshRegions.js';
import {moveAction, updateAction, deleteAction, createAction} from './js/actions.js';

window.onload = async function() {
  const regionList = document.querySelector('#region-list');
  const actionsDiv = document.querySelector('#actions-panel');


  // Handle move button click
  document.querySelector('#move-button').addEventListener('click', function() {
    moveAction(actionsDiv, regionList);
  });

  document.querySelector('#update-button').addEventListener('click', function() {
    updateAction(actionsDiv, regionList);
  });

  document.querySelector('#delete-button').addEventListener('click', function() {
    deleteAction(actionsDiv, regionList);
  });

  document.querySelector('#create-button').addEventListener('click', function() {
    createAction(actionsDiv, regionList);
  });

  // Refresh the region list
  await refreshRegions(regionList);
};


