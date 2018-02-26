'use strict';

import JSXComponent from 'metal-jsx';

class ClockinForm extends JSXComponent{
    render(){
        return(
            <form>
                <label for="data">Data</label>
                <input type="date" class="form-control" id="data"/>                
            </form>
        );
    }
}

export default ClockinForm;