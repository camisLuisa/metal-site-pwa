'use strict';

import JSXComponent from 'metal-jsx';

import './site-pwa.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LoginForm from './components/LoginForm.js';
import ClockinForm from './components/ClockinForm';
import Router from 'metal-router';
import TimeRegister from './components/TimeRegister';

class SitePwa extends JSXComponent {
	render() {
		return (
			<div>
				<Header/>
				<Router
				component={LoginForm}
				path="/login-form" />
				<Router
				component={ClockinForm}
				path="/clockin-form" />
				<Router
				component={TimeRegister}
				path="/time-register" />
				<Footer/>
			</div>
		);
	}
}

export { SitePwa };
export default SitePwa;