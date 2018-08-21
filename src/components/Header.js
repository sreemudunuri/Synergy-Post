import React from 'react'
import Filter from './Filter'
import { Button, Container, Header, Menu, Segment, Search} from 'semantic-ui-react'

const HomepageHeading = () => (
  <Container text>
    <Header
      as='h1'
      content='News......'
      style={{
        fontSize: '3em',
        fontWeight: 'normal',
        marginTop: '2em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
  </Container>
)

class DesktopContainer extends React.Component {
  render() {
    return (
      <div>
          <Segment
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <Menu fixed secondary size='large'>
              <Container>
                <Menu.Item as='a'>
                  <Filter 
                    selectedCountry={this.props.selectedCountry}
                    setCountry={this.props.setCountry}
                  />
                </Menu.Item>
                <Menu.Item as='a'>
                  
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a'>Log in</Button>
                  <Button as='a' primary={false} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
      </div>
    )
  }
}

export default DesktopContainer;