import React, { useState, useEffect } from 'react';

import styles from './styles.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

export default function App() {
	return (<div className={styles.appRoot}>
		<Header />
		<Game />
		<Footer />
	</div>);
}