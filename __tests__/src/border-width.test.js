import borderWidth from "../../src/border-width";

test('border namespace', () => {
  expect(borderWidth["border"]).toEqual({ borderWidth: 1 })
})

test('border-0 namespace', () => {
  expect(borderWidth["border-0"]).toEqual({ borderWidth: 0 })
})

test('border-2 namespace', () => {
  expect(borderWidth["border-2"]).toEqual({ borderWidth: 2 })
})

test('border-4 namespace', () => {
  expect(borderWidth["border-4"]).toEqual({ borderWidth: 4 })
})

test('border-8 namespace', () => {
  expect(borderWidth["border-8"]).toEqual({ borderWidth: 8 })
})

test('border-t namespace', () => {
  expect(borderWidth["border-t"]).toEqual({ borderTopWidth: 1 })
})

test('border-r namespace', () => {
  expect(borderWidth["border-r"]).toEqual({ borderRightWidth: 1 })
})

test('border-b namespace', () => {
  expect(borderWidth["border-b"]).toEqual({ borderBottomWidth: 1 })
})

test('border-l namespace', () => {
  expect(borderWidth["border-l"]).toEqual({ borderLeftWidth: 1 })
})

test('border-t-0 namespace', () => {
  expect(borderWidth["border-t-0"]).toEqual({borderTopWidth: 0})
})

test('border-r-0 namespace', () => {
  expect(borderWidth["border-r-0"]).toEqual({borderRightWidth: 0})
})

test('border-b-0 namespace', () => {
  expect(borderWidth["border-b-0"]).toEqual({borderBottomWidth: 0})
})

test('border-l-0 namespace', () => {
  expect(borderWidth["border-l-0"]).toEqual({borderLeftWidth: 0})
})

test('border-t-2 namespace', () => {
  expect(borderWidth["border-t-2"]).toEqual({borderTopWidth: 2})
})

test('border-r-2 namespace', () => {
  expect(borderWidth["border-r-2"]).toEqual({borderRightWidth: 2})
})

test('border-b-2 namespace', () => {
  expect(borderWidth["border-b-2"]).toEqual({borderBottomWidth: 2})
})

test('border-l-2 namespace', () => {
  expect(borderWidth["border-l-2"]).toEqual({borderLeftWidth: 2})
})

test('border-t-4 namespace', () => {
  expect(borderWidth["border-t-4"]).toEqual({borderTopWidth: 4})
})

test('border-r-4 namespace', () => {
  expect(borderWidth["border-r-4"]).toEqual({borderRightWidth: 4})
})

test('border-b-4 namespace', () => {
  expect(borderWidth["border-b-4"]).toEqual({borderBottomWidth: 4})
})

test('border-l-4 namespace', () => {
  expect(borderWidth["border-l-4"]).toEqual({borderLeftWidth: 4})
})

test('border-t-8 namespace', () => {
  expect(borderWidth["border-t-8"]).toEqual({borderTopWidth: 8})
})

test('border-r-8 namespace', () => {
  expect(borderWidth["border-r-8"]).toEqual({borderRightWidth: 8})
})

test('border-b-8 namespace', () => {
  expect(borderWidth["border-b-8"]).toEqual({borderBottomWidth: 8})
})

test('border-l-8 namespace', () => {
  expect(borderWidth["border-l-8"]).toEqual({borderLeftWidth: 8})
})
