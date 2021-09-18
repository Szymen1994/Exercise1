import { render } from '@testing-library/react';
import React from 'react'
import Wrapper from './Wrapper';

let token = "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"
let ghWrapper = new Wrapper(token)

//Filtrowanie 
export class Testy extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
        
 
     componentDidMount() {
        ghWrapper.publicGist().then(response => {
            console.log(response.data);
        this.setState({firstName: response.data});
        });
    }}

     return (
         <form>
             <label>
                 First name
                 <input type="text" name="firstName" value={this.state.firstName} />
             </label>
             <label>
                 Last name 
                 <input type="text" name="lastName" value={this.state.lastName} />
             </label>

         </form>
         )
    };
}

export default Testy
