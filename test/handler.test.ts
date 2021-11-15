import { handleRequest } from '../src/handler'
import makeServiceWorkerEnv from 'service-worker-mock'

declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })

  test('handle /5', async () => {
    const result = await handleRequest(new Request('/5', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const json = await result.json()
    expect(json).toEqual({ iseven: false })
  })

  test('handle /6', async () => {
    const result = await handleRequest(new Request('/6', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const json = await result.json()
    expect(json).toEqual({ iseven: true })
  })
})
