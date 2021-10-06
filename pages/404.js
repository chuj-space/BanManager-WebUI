import DefaultLayout from '../components/DefaultLayout'
import { Container, Header } from 'semantic-ui-react'

const heading = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as='h1'
        content='An error occurred'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '1.5em'
        }}
      />
      <Header
        as='h2'
        content='Sorry, we couldn&apos;t find this page, go back'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em'
        }}
      />
    </Container>
  )
}
function Error () {
  return <DefaultLayout title='Error' heading={heading} />
}

export default Error