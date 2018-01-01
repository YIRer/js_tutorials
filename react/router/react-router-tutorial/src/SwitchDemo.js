import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const Homepage = ()=>(<div>Homepage</div>);
const About = ()=>(<div>About</div>);

const SwitchDemo = ()=>(
    <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Homepage} />
    </Switch>
);

export default SwitchDemo;