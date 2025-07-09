import { test } from '@japa/runner'

test.group('Ping API ', () => {
  test('returns pong', async ({ client, assert }) => {
    const response = await client.get('/api/ping')

    response.assertStatus(200)
    response.assertBodyContains({ message: 'pong' })

    assert.equal(response.body().message, 'pong')
  })
})
