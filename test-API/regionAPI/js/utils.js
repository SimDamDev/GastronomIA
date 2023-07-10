import { getChildren } from './API.js';

//IMPROVE: Consider splitting this function into smaller, more manageable pieces 
//for better code readability and maintainability.
export function createLi(region) {
    const li = document.createElement('li');
    const arrowSpan = document.createElement('span');
    arrowSpan.textContent = "►";
    arrowSpan.classList.add('arrow');
    li.appendChild(arrowSpan);
    li.appendChild(document.createTextNode(region.name));
    li.dataset.id = region._id; // Ajouter l'id de la région comme attribut de données pour pouvoir la récupérer plus tard

    // Créer un nouvel élément ul pour les enfants et l'ajouter à la liste
    const childrenUl = document.createElement('ul');
    li.appendChild(childrenUl);

    //FEATURE: Consider adding the ability to edit a region directly from this list item.
    // This could be a button that opens a form.
    //IMPACTS-OTHERS: This would impact the createUpdateForm function,
    // which could be reused or adapted for this purpose.
    

    // Ajouter un écouteur d'événements à l'élément li
    li.addEventListener('click', async function(event) {
        // Assurez-vous que l'élément cliqué est bien un span.arrow
        if (event.target.tagName === 'SPAN' && event.target.classList.contains('arrow')) {
            event.stopPropagation();

            const li = event.target.parentNode;
            const arrowSpan = event.target;
            const childrenUl = li.querySelector('ul');

            // Si l'élément li a déjà été étendu, le réduire et supprimer tous les enfants li
            if (li.classList.contains('expanded')) {
                li.classList.remove('expanded');
                arrowSpan.textContent = '►';
                while (childrenUl.firstChild) {
                    childrenUl.removeChild(childrenUl.firstChild);
                }
            } else {
                li.classList.add('expanded');
                arrowSpan.textContent = '▼';

                // Récupérer les enfants de la région
                const children = await getChildren(li.dataset.id);

                // Ajouter les enfants à la liste
                for (const child of children) {
                    const childLi = createLi(child);
                    childrenUl.appendChild(childLi);
                }
            }
        }
    });

    return li;
}

//IMPROVE: The following functions create forms that have similar structures and repeat similar code.
// Consider refactoring to reduce code redundancy and improve maintainability.
//IMPACTS-OTHERS: This would impact wherever these form creation functions are being called.


export function createMoveForm(submitHandler, regions) {
    // Create form elements
    const form = document.createElement('form');
    const regionIdSelect = document.createElement('select');
    const newParentIdSelect = document.createElement('select');
    const submitButton = document.createElement('button');

    // Add a default option to newParentIdSelect for root
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'root';
    defaultOption.value = '000000000000000000000000';
    newParentIdSelect.appendChild(defaultOption);

    // Fill the select elements with options for each region
    for (const region of regions) {
        const regionOption = document.createElement('option');
        regionOption.textContent = region.name;
        regionOption.value = region._id;

        const parentOption = regionOption.cloneNode(true);
        regionIdSelect.appendChild(regionOption);
        newParentIdSelect.appendChild(parentOption);
    }

    // Set attributes and text
    regionIdSelect.id = 'region-id';
    newParentIdSelect.id = 'new-parent-id';
    submitButton.textContent = 'Move Region';

    // Add change event listeners to select elements to enforce the restriction
    regionIdSelect.addEventListener('change', function() {
        for (let option of newParentIdSelect.options) {
            option.disabled = false;
        }
        newParentIdSelect.querySelector(`[value="${this.value}"]`).disabled = true;
    });
    newParentIdSelect.addEventListener('change', function() {
        for (let option of regionIdSelect.options) {
            option.disabled = false;
        }
        regionIdSelect.querySelector(`[value="${this.value}"]`).disabled = true;
    });

    // Append elements to form
    form.appendChild(regionIdSelect);
    form.appendChild(newParentIdSelect);
    form.appendChild(submitButton);

    // Add submit event listener to form
    form.addEventListener('submit', submitHandler);

    return form;
}

export function createUpdateForm(submitHandler, regions) {
    // Create form elements
    const form = document.createElement('form');
    const regionSelect = document.createElement('select');
    const regionNameInput = document.createElement('input');
    const submitButton = document.createElement('button');

    // Populate region select
    for (const region of regions) {
        const option = document.createElement('option');
        option.value = region._id;
        option.textContent = region.name;
        regionSelect.appendChild(option);
    }

    // Set attributes and text
    regionSelect.id = 'region-id';
    regionNameInput.placeholder = 'New Region Name';
    regionNameInput.id = 'new-region-name';
    submitButton.textContent = 'Update Region';

    // Append elements to form
    form.appendChild(regionSelect);
    form.appendChild(regionNameInput);
    form.appendChild(submitButton);

    // Add submit event listener to form
    form.addEventListener('submit', submitHandler);

    return form;
}

export function createDeleteForm(submitHandler, regions) {
    // Create form elements
    const form = document.createElement('form');
    const regionSelect = document.createElement('select');
    const submitButton = document.createElement('button');

    // Populate region select
    for (const region of regions) {
        const option = document.createElement('option');
        option.value = region._id;
        option.textContent = region.name;
        regionSelect.appendChild(option);
    }

    // Set attributes and text
    regionSelect.id = 'region-id';
    submitButton.textContent = 'Delete Region';

    // Append elements to form
    form.appendChild(regionSelect);
    form.appendChild(submitButton);

    // Add submit event listener to form
    form.addEventListener('submit', submitHandler);

    return form;
}

export function createCreateForm(submitHandler, regions) {
    // Create form elements
    const form = document.createElement('form');
    const regionNameInput = document.createElement('input');
    const regionSelect = document.createElement('select');
    const submitButton = document.createElement('button');

    // Create a default option for 'none'
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'root';
    defaultOption.value = '000000000000000000000000';
    regionSelect.appendChild(defaultOption);

    // Populate parent region select
    for (const region of regions) {
        const option = document.createElement('option');
        option.value = region._id;
        option.textContent = region.name;
        regionSelect.appendChild(option);
    }

    // Set attributes and text
    regionNameInput.placeholder = 'Region Name';
    regionNameInput.id = 'region-name';
    regionSelect.id = 'parent-region-id';
    submitButton.textContent = 'Create Region';

    // Append elements to form
    form.appendChild(regionNameInput);
    form.appendChild(regionSelect);
    form.appendChild(submitButton);

    // Add submit event listener to form
    form.addEventListener('submit', submitHandler);

    return form;
}

//FEATURE: Consider adding more options to this form for greater control over region 
//creation. For example, an input for a "description" or "notes" about the region.
//IMPACTS-OTHERS: This would impact the server-side handling of region creation, 
//as it would need to accept and process the additional data.
