'use strict';

import JSXComponent from 'metal-jsx';

class Footer extends JSXComponent {
    render(){
        return (
            <footer class="page-footer font-small pt-4 mt-4">

                <div class="container-fluid text-center text-md-left">
                    <div class="row">
            
                        <div class="col-md-6">
                            <h5 class="text-uppercase text-white">Footer</h5>
                            <p>Here you can use rows and columns here to organize your footer content.</p>
                        </div>
                        
                        <div class="col l4 offset-l2 s12">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled">
                                <li><a class="text-light nav-link text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="nav-link" href="#!">Link 2</a></li>
                                <li><a class="nav-link" href="#!">Link 3</a></li>
                                <li><a class="nav-link" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                  
                    </div>
                </div>

                <div class="text-light text-center">
                    <div class="container-fluid">
                        © 2015 Copyright: <a href="https://github.com/camisLuisa"> Luisa Lima </a>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    </div>
                </div>

            </footer>       
                        );
    }
}

export default Footer;