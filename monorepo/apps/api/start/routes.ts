/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.resource('users', UsersController)

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/api/ping', async () => {
  return {
    message: 'pong',
  }
})
