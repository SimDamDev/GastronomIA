import {refreshUnits} from './js/refreshUnits';
import {updateAction, deleteAction, createAction, filterAction} from './js/actions';

window.onload = async function() {
    const unitList = document.querySelector('#unit-list');
    const actionsDiv = document.querySelector('#actions-panel');

    document.querySelector('#update-button').addEventListener('click', function() {
        updateAction(actionsDiv, unitList);
    });

    document.querySelector('#delete-unit').addEventListener('click', function() {
        deleteAction(actionsDiv, unitList);
    });

    document.querySelector('#create-button').addEventListener('click', function() {
        createAction(actionsDiv, unitList);
    });

    document.querySelector('#toggle-filter').addEventListener('click', function() {
        filterAction(actionsDiv, unitList);
    });

    await refreshUnits(unitList);
}