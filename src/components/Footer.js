'use strict';

import JSXComponent from 'metal-jsx';

class Footer extends JSXComponent {
    render(){
        return (
            <footer class="page-footer center-on-small-only">

                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-6">
                            <h5 class="title">Footer</h5>
                            <p>Footer do clockin</p>
                        </div>
            
                        <div class="col-md-6">
                            <h5 class="title">Contatos</h5>
                            <ul>
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-copyright">
                    <div class="container-fluid center">
                        © 2015 Copyright: <a href="https://github.com/camisLuisa"> Luisa Lima </a>

                    </div>
                </div>

            </footer>       
                        );
    }
}

export default Footer;