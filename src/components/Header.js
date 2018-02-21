'use strict';

import JSXComponent from 'metal-jsx';

class Hearder extends JSXComponent {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">PWA Metal.js - TOP</a>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/static/login-form">Pontos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/static/clockin-form">Cadastrar Pontos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/static/time-register">Sobre</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Login</a>
					</li>
				</ul>
			</div>

				{
					/* <ul class="nav navbar-nav">
					<li class="active"><a href="#">outra coisa</a></li>
					<li><a href="/static/login-form">Pontos</a></li>
					<li><a href="/static/clockin-form">Cadastrar Pontos</a></li>
					<li><a href="/static/time-register">Sobre</a></li>
					<li><a href="#">Login</a></li>
				</ul> */}
			</nav>
			);
	}
}


export default Hearder;
