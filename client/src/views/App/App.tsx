import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Room from '../Room';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Home } from '../Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

// customized colors,fonts, basically everything for Chakra (optional)
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac'
    }
};

const customTheme = extendTheme({ colors });

const App = (): ReactElement => {
    return (
        <div>
            <BrowserRouter>
                <ChakraProvider theme={customTheme}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute exact path="/room" component={Room} />
                        <Route exact path="/login" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </ChakraProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
