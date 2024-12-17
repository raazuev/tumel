import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/app/app';
import styles from './index.module.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div className={styles.doby}>
		<App/>
	</div>
);

