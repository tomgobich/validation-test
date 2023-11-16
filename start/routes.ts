/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { testValidator } from '#validators/test_validator'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.post('/test', async ({ request }) => {
  const data = await request.validateUsing(testValidator)
  return data
})
