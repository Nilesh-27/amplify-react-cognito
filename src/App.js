import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator, View, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth, API, Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

// Configure Amplify
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <View>
              <Button onClick={signOut}>Sign out</Button>
              <h2>Welcome {user.username}</h2>
              <img src={logo} className="App-logo" alt="logo" />
              <h2>My App Content</h2>
            </View>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default App;
