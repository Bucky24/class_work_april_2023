import React, { useState, useEffect } from 'react';

import styles from './styles.css';
import Button from './components/Button';
import TextField from './components/TextField';


export default function App() {


	return (<div className={styles.appRoot}>
		Welcome to React App
		<Button label='hi' />
		<TextField />
	</div>);
}