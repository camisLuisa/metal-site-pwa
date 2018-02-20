'use strict';

import JSXComponent from 'metal-jsx';

class Hearder extends JSXComponent {
	render() {
		return (
			<nav class="navbar navbar-light bg-light justify-content-between">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="/login-form">Pontos</a></li>
					<li><a href="/clockin-form">Cadastrar Pontos</a></li>
					<li><a href="/time-register">Sobre</a></li>
					<li><a href="#">Login</a></li>
				</ul>
			</nav>
			);
	}
}


export default Hearder;
