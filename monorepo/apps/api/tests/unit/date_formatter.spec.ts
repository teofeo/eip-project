import { test } from '@japa/runner'
import DateFormatterService from '#services/date_formatter_service'

test.group('Date formatter Service', () => {
  test('format returns data in DD/MM/YYYY', async ({ assert }) => {
    const inputDate = new Date('2023-10-04')
    const formatted = DateFormatterService.format(inputDate)

    assert.equal(formatted, '04/10/2023')
  })
})
