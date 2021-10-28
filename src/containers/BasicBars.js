import React, {useState} from 'react';

import {
  Link
} from 'react-router-dom';

import {
	Box,
	Button,
	Heading,
} from 'grommet';

import {
  UnorderedList,
  Home
} from 'grommet-icons';

// import TypeLayout from '../components/TypeLayout';
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar/SideBar';

const BasicBars = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return(
    <Box fill>
      <AppBar>
        <Link to='/'>
          <Button>
            <Home/>
          </Button>
        </Link>
        <Heading level='2' margin='none'>
        Labee
        </Heading>
        <Button
          icon={<UnorderedList />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center' direction='col'>
            {props.children}
          </Box>
          <SideBar show={showSidebar} setShowSidebar={setShowSidebar}>
          </SideBar>
      </Box>
    </Box>
  )
}

export default BasicBars;