//FEATURE: Consider adding a functionality to get a specific region details


export async function getAllRegions() {
    const response = await fetch('/regions'); 
    const data = await response.json();
    return data;
}

export async function getChildren(regionId) {
    const response = await fetch(`/regions/${regionId}/children`);
    const children = await response.json();
    return children;
}

// IMPROVE: Consider adding error handling for scenarios when the region does not exist
export async function moveRegion(id, newParentId) {
    const response = await fetch(`/regions/${id}/move`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newParentId }),
    });

    const data = await response.json();

    return data;
}

// IMPROVE: Implement validation to check if the updatedData is not empty or invalid
export async function updateRegion(id, updatedData) {
    const response = await fetch(`/regions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
        throw new Error(`Failed to update region: ${response.status}`);
    }

    return response.json();
}

// IMPROVE: Add a confirmation step before the region gets deleted to prevent accidental deletes
export async function deleteRegion(id) {
    const response = await fetch(`/regions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to delete region: ${response.status}`);
    }

    return response;  
}

// IMPROVE: Implement validation to check if the data provided is not empty or invalid
export async function createRegion(data) {
    const response = await fetch('/regions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Failed to create region: ${response.status}`);
    }

    return response.json();
}

