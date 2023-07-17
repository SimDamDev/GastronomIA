import {errorHandler} from './errorHandler.js';

export async function getAllRegions() {
  try {
    const response = await fetch('/regions');
    if (!response.ok) {
      throw new Error(`Failed to fetch regions: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    errorHandler(error);
    return [];
  }
}

export async function getRegion(id) {
  try {
    const response = await fetch(`/regions/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch region: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    errorHandler(error);
    return null;
  }
}


export async function moveRegion(id, newParentId) {
  try {
    const response = await fetch(`/regions/${id}/move`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newParentId}),
    });

    if (!response.ok) {
      throw new Error(`Failed to move region: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    errorHandler(error);
    return null;
  }
}

export async function updateRegion(id, updatedData) {
  try {
    const response = await fetch(`/regions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update region: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    errorHandler(error);
    return null;
  }
}

export async function deleteRegion(id) {
  try {
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
  } catch (error) {
    errorHandler(error);
    return null;
  }
}

export async function createRegion(data) {
  try {
    const response = await fetch('/regions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to create region: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    errorHandler(error);
    return null;
  }
}

export async function getChildren(regionId) {
  try {
    const response = await fetch(`/regions/${regionId}/children`);

    if (!response.ok) {
      throw new Error(`Failed to get children: ${response.status}`);
    }

    const children = await response.json();
    return children;
  } catch (error) {
    errorHandler(error);
    return [];
  }
}

