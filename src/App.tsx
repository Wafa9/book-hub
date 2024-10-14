import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar'
import BookGrid from './components/BookGrid';


function App() {

  return (
    <div className="App">
      <Grid
      templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "asid main"`
      }}
      >
        <GridItem area={'nav'}>
          <NavBar/>
        </GridItem>
        <Show above='lg'>
        <GridItem area={'asid'} >Asid</GridItem>
        </Show>
        <GridItem area={'main'} >
          <BookGrid />
        </GridItem>

      </Grid>
    </div>
  )
}

export default App
