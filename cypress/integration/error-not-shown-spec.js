// as as file "index.html"
const html = `
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  example loaded
  <script>
    console.log('a message')
    throw new Error('from HTML')
  </script>
</body>
</html>
`

beforeEach(() => {
  cy.document().then(doc => {
    doc.write(html)
    doc.close()
  })
})

it('works', () => {})
