export async function getAllUnits() {
    const response = await fetch('/units');
    const data = await response.json();
    return data;
}

export async function getUnit(id) {
    const response = await fetch(`/units/${id}`);
    const data = await response.json();
    return data;
}

export async function updateUnit(id, updatedData) {
    const response = await fetch(`/units/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
        throw new Error(`Failed to update unit: ${response.status}`);
    }

    return response.json();
}

export async function deleteUnit(id) {
    const response = await fetch(`/units/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to delete unit: ${response.status}`);
    }

    return response;  
}

export async function createUnit(data) {
    const response = await fetch('/units', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Failed to create unit: ${response.status}`);
    }

    return response.json();
}

