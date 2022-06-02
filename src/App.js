import './App.css';
// import { useState, useEffect } from 'react';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './Feed';
import FeedPosts from './FeedPosts';

// import { db } from './firebase.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />
      <FeedPosts name="TNT SPORTS" time="16:00" conteudo="Venha relembrar essa grande final de UEFA CHAMPIONS LEAGUE, Real Madrid vs Liverpool só na TNT Sports!"/>
    </div>
  );
}

export default App;
