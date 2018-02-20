'use strict'

import JSXComponent from 'metal-jsx';
//olhar api de rest do clockin e olhar o metal-ajax para fazer a request

class TimeRegister extends JSXComponent {

    render(){
        return(
            <div class="container">
                <h2>Registro de Pontos</h2>
                <ul class="list-group">
                    <li class="list-group-item">ponto</li>
                    <li class="list-group-item">ponto</li>
                    <li class="list-group-item">ponto</li> 
                </ul>
            </div>
        );
    }
}

export default TimeRegister