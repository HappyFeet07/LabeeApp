import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Grommet,
  ResponsiveContext
} from 'grommet';

import BasicBar from './BasicBars'
import ClassfiPage from './ClassfiPage';
import ChseTypePage from './ChseTypePage';
import SignUpPage from './SignUpPage';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import MngeAccPage from './MngeAccPage';
import MsnSlcPage from './MsnSlcPage';
import MisinHistory from './MisinHistory';
// import LocatePage from './LocatePage';
import LocatePageV2 from './LocatePageV2';
import MngeAccPageV2 from './MngeAccPageV2';

const theme = {
  global: {
    breakpoints: {

    },
    colors: {
      brand: 'accent-4',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const RoutesFrames = (props) => {

  // const EndTime = () => {
  //   let finish_time = new Date()
  //   finish_time.setMinutes(finish_time.getMinutes() + 10);
  //   return finish_time;
  // }

  return (
		<Router>
			<style>{'body { background-color: #333333; }'}</style>
			<Grommet theme={theme} background='dark-1' full>
        <ResponsiveContext.Consumer>
        {() => <Switch>
            <Route exact path="/">
              <BasicBar>
                <MainPage></MainPage>
                {/* <LocatePage></LocatePage> */}
              </BasicBar>
            </Route>
            <Route path="/SignUp">
              <BasicBar>
                <SignUpPage></SignUpPage>
              </BasicBar>
            </Route>
            <Route path="/Login">
              <BasicBar>
                <LoginPage></LoginPage>  
              </BasicBar>
            </Route>
            <Route path="/ChooseType">
              <BasicBar>
                <ChseTypePage></ChseTypePage>
              </BasicBar>
            </Route>
            <Route path="/ClassfiPage">
              <BasicBar>
                <ClassfiPage></ClassfiPage>
              </BasicBar>
            </Route>
            <Route path='/MngeAccPage'>
              <BasicBar>
                {/* <MngeAccPage></MngeAccPage> */}
                <MngeAccPageV2></MngeAccPageV2>
              </BasicBar>
            </Route>
            <Route path='/MsnSlcPage_Classfi'>
              <BasicBar>
                <MsnSlcPage type="Classfi"></MsnSlcPage>
              </BasicBar>
            </Route>
            <Route path='/MsnSlcPage_Locate'>
              <BasicBar>
                <MsnSlcPage type="Locate"></MsnSlcPage>
              </BasicBar>
            </Route>
            <Route path='/BrwseHistPage'>
              <BasicBar>
                <MisinHistory></MisinHistory>
              </BasicBar>
            </Route>
            <Route path='/MngeWallet'>
              <BasicBar>
                
              </BasicBar>
            </Route>
            <Route path='/imageLabel'>
              <BasicBar>
                {/* <LocatePage End_Time={props.Time}></LocatePage> */}
                <LocatePageV2 End_Time></LocatePageV2>
              </BasicBar>
            </Route>
          </Switch>}
        </ResponsiveContext.Consumer>
      </Grommet>
		</Router>
  )
};

export default RoutesFrames;
