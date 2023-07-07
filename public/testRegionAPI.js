// Créer une nouvelle région
document.getElementById('createRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionName = document.getElementById('regionName').value;
    let parentId = document.getElementById('regionParentId').value;

    fetch('/regions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: regionName, parent: parentId })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
});
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

// Obtenir toutes les régions
document.getElementById('getAllRegions').addEventListener('click', function(event) {
    fetch('/regions')
        .then(response => response.json())
        .then(data => console.log(data)) // Affiche toutes les régions dans la console
        .catch((error) => console.error('Error:', error));
});