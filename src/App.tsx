import { Grid, GridItem, Show } from '@chakra-ui/react';



function App() {

  return (
    <div className="App">
      <Grid
      templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "asid main"`
      }}
      >
        <GridItem area={'nav'} bg="papayawhip">Nav</GridItem>
        <Show above='lg'>
        <GridItem area={'asid'} bg="lightgreen">Asid</GridItem>
        </Show>
        <GridItem area={'main'} bg="lightblue">main</GridItem>

      </Grid>
    </div>
  )
}

export default App
