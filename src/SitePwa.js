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
			<div class="site-pwa">
				<Header/>
				<main class="container">
					<Router
					component={LoginForm}
					path="/static/login-form" />
					<Router
					component={ClockinForm}
					path="/static/clockin-form" />
					<Router
					component={TimeRegister}
					path="/static/time-register" />
				</main>
				<Footer class="footer"/>
			</div>
		);
	}
}

export { SitePwa };
export default SitePwa;