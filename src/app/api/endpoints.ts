export const endpoints = {
  User: [
    {
      method: 'POST',
      path: '/google',
      summary: 'POST /google',
      description: 'Handles POST request to /google'
    },
    {
      method: 'POST',
      path: '/register',
      summary: 'POST /register',
      description: 'Handles POST request to /register'
    },
    {
      method: 'POST',
      path: '/login',
      summary: 'POST /login',
      description: 'Handles POST request to /login'
    },
    {
      method: 'POST',
      path: '/refresh',
      summary: 'POST /refresh',
      description: 'Handles POST request to /refresh'
    },
    {
      method: 'GET',
      path: '/user/:id',
      summary: 'GET /user/:id',
      description: 'Handles GET request to /user/:id'
    },
    {
      method: 'GET',
      path: '/users',
      summary: 'GET /users',
      description: 'Handles GET request to /users'
    },
    {
      method: 'PUT',
      path: '/user/:id',
      summary: 'PUT /user/:id',
      description: 'Handles PUT request to /user/:id'
    },
    {
      method: 'PUT',
      path: '/user/:id/preferences',
      summary: 'PUT /user/:id/preferences',
      description: 'Handles PUT request to /user/:id/preferences'
    },
    {
      method: 'DELETE',
      path: '/user/:id',
      summary: 'DELETE /user/:id',
      description: 'Handles DELETE request to /user/:id'
    },
    {
      method: 'POST',
      path: '/logout',
      summary: 'POST /logout',
      description: 'Handles POST request to /logout'
    }
  ],

  Recipe: [
    {
      method: 'POST',
      path: '/generate',
      summary: 'POST /generate',
      description: 'Handles POST request to /generate'
    }
  ],

  Ingredient: [
    {
      method: 'POST',
      path: '/recognize/photo',
      summary: 'POST /recognize/photo',
      description: 'Handles POST request to /recognize/photo'
    },
    {
      method: 'POST',
      path: '/recognize/receipt',
      summary: 'POST /recognize/receipt',
      description: 'Handles POST request to /recognize/receipt'
    },
    {
      method: 'POST',
      path: '/recognize/barcode',
      summary: 'POST /recognize/barcode',
      description: 'Handles POST request to /recognize/barcode'
    },
    {
      method: 'GET',
      path: '/',
      summary: 'GET /',
      description: 'Handles GET request to /'
    },
    {
      method: 'GET',
      path: '/:id',
      summary: 'GET /:id',
      description: 'Handles GET request to /:id'
    },
    {
      method: 'POST',
      path: '/add',
      summary: 'POST /add',
      description: 'Handles POST request to /add'
    },
    {
      method: 'PUT',
      path: '/:id',
      summary: 'PUT /:id',
      description: 'Handles PUT request to /:id'
    },
    {
      method: 'DELETE',
      path: '/:id',
      summary: 'DELETE /:id',
      description: 'Handles DELETE request to /:id'
    }
  ],

  Fridge: [
    {
      method: 'POST',
      path: '/',
      summary: 'POST /',
      description: 'Handles POST request to /'
    },
    {
      method: 'GET',
      path: '/:id/items',
      summary: 'GET /:id/items',
      description: 'Handles GET request to /:id/items'
    },
    {
      method: 'POST',
      path: '/:fridgeId/items',
      summary: 'POST /:fridgeId/items',
      description: 'Handles POST request to /:fridgeId/items'
    },
    {
      method: 'PUT',
      path: '/:id/items/:itemId',
      summary: 'PUT /:id/items/:itemId',
      description: 'Handles PUT request to /:id/items/:itemId'
    },
    {
      method: 'DELETE',
      path: '/:id/items/:itemId',
      summary: 'DELETE /:id/items/:itemId',
      description: 'Handles DELETE request to /:id/items/:itemId'
    }
  ],

  Cookbook: [
    {
      method: 'POST',
      path: '/:cookbookId/recipes',
      summary: 'POST /:cookbookId/recipes',
      description: 'Handles POST request to /:cookbookId/recipes'
    },
    {
      method: 'PUT',
      path: '/:cookbookId/recipes/:recipeId',
      summary: 'PUT /:cookbookId/recipes/:recipeId',
      description: 'Handles PUT request to /:cookbookId/recipes/:recipeId'
    },
    {
      method: 'DELETE',
      path: '/:cookbookId/recipes/:recipeId',
      summary: 'DELETE /:cookbookId/recipes/:recipeId',
      description: 'Handles DELETE request to /:cookbookId/recipes/:recipeId'
    },
    {
      method: 'GET',
      path: '/:cookbookId',
      summary: 'GET /:cookbookId',
      description: 'Handles GET request to /:cookbookId'
    }
  ],

  Log: [
    {
      method: 'GET',
      path: '/',
      summary: 'GET /',
      description: 'Handles GET request to /'
    }
  ],

  Notification: [
    {
      method: 'POST',
      path: '/',
      summary: 'POST /',
      description: 'Handles POST request to /'
    }
  ]
};
