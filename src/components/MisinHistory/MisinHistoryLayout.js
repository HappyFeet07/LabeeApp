import React from 'react';

import { Box, Button, Grid, TextInput } from 'grommet';
import { Search, Return, FormPreviousLink, Filter } from 'grommet-icons';

import HistoryList from './HistoryList';

const MisinHistoryLayout = (props) => {
  return (
    <Box margin={'large'} height="80vh" width="60vw"
         background='accent-4' round="5vh" align='center'>
      <Grid
        rows    = {['7.5vh', '65vh']}
        columns = {['6vw', '42vw', '6vw']}
        pad     = 'medium'
        gap     = 'small'
        areas   = {[
          { name: 'prevPage'    , start:[0, 0], end:[0, 0]},
          { name: 'search_bar'  , start:[1, 0], end:[1, 0]},
          { name: 'Sort_Options', start:[2, 0], end:[2, 0]},
          { name: 'HistoryList' , start:[0, 1], end:[2, 1]},
        ]}
      >
        <Box fill gridArea='prevPage' background='white' round='medium'>
          <Box alignSelf='center' align='center'>
            <Button fill onClick={props.goBackOnClick}>
              <FormPreviousLink size='60vh'></FormPreviousLink>
            </Button>
          </Box>
        </Box>
        <Box fill gridArea='search_bar'   background='white' round='medium'>
          <Box direction='row' gap='1vw' pad="1vh">
            <Box pad={{top:'1.5vh', horizontal:'2vw'}}>
              <Search></Search>
            </Box>
            <Box width='30vw' overflow='auto'>
              <TextInput
                value={props.SearchValue}
                onChange={(e)=> props.setSearchValue(e.target.value)}
                placeholder='填入你想查的歷史紀錄'
              />
            </Box>
            <Box>
              <Button fill>
                <Return size='30vh'></Return>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box fill gridArea='Sort_Options' background='white' round='medium'>
          <Box alignSelf='center' align='center' pad={'small'}>
            <Button>
              <Filter size='42vh'></Filter>
            </Button>
          </Box>
        </Box>
        <Box fill gridArea='HistoryList'  background='white' round='medium'>
          <Box pad={{horizontal:"medium"}} overflow='auto'>
            <HistoryList
              data={props.data}
            ></HistoryList>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default MisinHistoryLayout;