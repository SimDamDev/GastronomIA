
window.onload = function() { // When the page loads
    fetch('/regions') // Fetch the regions from your API
    .then(response => response.json())
    .then(regions => {
      let regionsContainer = document.getElementById('regionsContainer');
      console.log(regions);
      let regionsWithoutParents = regions.filter(region => !region.parent);
      regionsWithoutParents.forEach(region => { 
        let regionDiv = document.createElement('div');
        regionDiv.className = 'region';
        regionDiv.id = region._id;
  
        let regionName = document.createElement('h2');
        regionName.textContent = region.name;
        regionDiv.appendChild(regionName);

        let button = document.createElement('button');
        button.className = 'expand-children';
        button.textContent = 'Expand Child';
        regionDiv.appendChild(button);
        
        button.addEventListener('click', function() {
            expandChild(regionDiv.id);  
        });
  
        let childrenDiv = document.createElement('div');
        childrenDiv.className = 'children';
        regionDiv.appendChild(childrenDiv);
  
        regionsContainer.appendChild(regionDiv);

        let select = document.getElementById('regionParentIdPopup');
        select.innerHTML = '';
        select.add(new Option('Sélectionner la région parente', '', true, true));
        for(let region of regions){
            select.add(new Option(region.name, region._id));
        }
        // TODO: Add functions to handle update, delete and move operations
      });
    });
  };

document.getElementById('openPopupButton').addEventListener('click', () => {
document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopupButton').addEventListener('click', () => {
document.getElementById('popup').style.display = 'none';
});

document.getElementById('createRegionFormPopup').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionNamePopup = document.getElementById('regionNamePopup').value;
    let regionParentIdPopup = document.getElementById('regionParentIdPopup').value;
    let postBody;

    // Check if the parentId field is empty, and construct your POST request body appropriately 
    if (regionParentIdPopup.trim() === '') {
        postBody = JSON.stringify({ name: regionNamePopup });
    } else {
        postBody = JSON.stringify({ name: regionNamePopup, parent: regionParentIdPopup  });
    }
    
    fetch('/regions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: postBody
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});

function expandChild(parent, depth=0) {
    if (depth > 5) {
        return;
    }
    fetch(`/regions/${parent}/children`)
        .then(response => response.json())
        .then(children => {
            const parentDiv = document.getElementById(parent);
            if (!parentDiv) {
                console.error(`Parent div with id ${parent} not found.`);
                return;
            }

            const childrenDiv = parentDiv.querySelector('.children');
            if (!childrenDiv) {
                console.error(`Children div for parent ${parent} not found.`);
                return;
            }

            // Removes existing child divs
            while (childrenDiv.firstChild) {
                childrenDiv.removeChild(childrenDiv.firstChild);
            }

            children.forEach(child => {
                let childDiv = document.createElement('div');
                childDiv.className = 'child';
                childDiv.id = child._id;
            
                let childName = document.createElement('h2');
                childName.textContent = child.name;
                childDiv.appendChild(childName);
                
                let childrenDiv = document.createElement('div');
                childrenDiv.className = 'children';
                childDiv.appendChild(childrenDiv);
            
                let expandButton = document.createElement('button');
                expandButton.textContent = 'Expand Child';
                expandButton.addEventListener('click', function() {
                    // Only expands children when button is clicked
                    expandChild(child._id, depth + 1);
                });
                childDiv.appendChild(expandButton);
            
                parentDiv.appendChild(childDiv);
            });
        })
        .catch(error => console.error('Erreur:', error));
}

// Obtenir une région spécifique
document.getElementById('getRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionId = document.getElementById('regionId').value;

    fetch(`/regions/${regionId}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
});

// Mettre à jour une région
document.getElementById('updateRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionId = document.getElementById('updateRegionId').value;
    let newRegionName = document.getElementById('newRegionName').value;

    fetch(`/regions/${regionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newRegionName })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});

// Supprimer une région
document.getElementById('deleteRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionId = document.getElementById('deleteRegionId').value;

    fetch(`/regions/${regionId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});

// Obtenir les régions enfants
document.getElementById('getChildrenForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let parentId = document.getElementById('parentId').value;

    fetch(`/regions/${parentId}/children`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
});

// Obtenir la région parente
document.getElementById('getParentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let childId = document.getElementById('childId').value;

    fetch(`/regions/${childId}/parent`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
});

// Déplacer une région
document.getElementById('moveRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionToMoveId = document.getElementById('regionToMoveId').value;
    let newParentId = document.getElementById('newParentId').value;

    fetch(`/regions/${regionToMoveId}/move`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newParentId: newParentId })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});

