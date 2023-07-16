    export async function getAllRegions() {
        try {
            const response = await fetch('/regions');
            if (!response.ok) {
                throw new Error(`Failed to fetch regions: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

export async function getRegion(id) {
    const response = await fetch(`/regions/${id}`);
    const data = await response.json();
    return data;
}


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

export async function getChildren(regionId) {
    const response = await fetch(`/regions/${regionId}/children`);
    const children = await response.json();
    return children;
}

