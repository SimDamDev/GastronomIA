

document.getElementById('addRegionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let regionName = document.getElementById('regionName').value;

    // Envoi d'une requête à l'API pour ajouter une nouvelle région
    fetch('/api/regions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: regionName
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
});