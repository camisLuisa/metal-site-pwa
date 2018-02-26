'use strict';

import JSXComponent from 'metal-jsx';

class Header extends JSXComponent {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<ul class="nav nav-pills">
					<li class="nav-item"><a class="nav-link" href="#">Home</a></li>
					<li class="nav-item"><a class="nav-link" href="/static/login-form">Login</a></li>
					<li class="nav-item"><a class="nav-link" href="/static/clockin-form">Clockin</a></li>
					<li class="nav-item"><a class="nav-link" href="/static/time-register">Time Register</a></li>
					</ul>
				</div>
			</nav>
					
		);
	}
}


export default Header;
