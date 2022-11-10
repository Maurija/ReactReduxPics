import React from "react";

class SearchBar extends React.Component{

    state = { term: ''};

    //se asigna un llamado a una función sin paréntesis para que solo
    //se ejecute cuando ocurra un evento
    //Si por ejemplo en onSubmit o en onChange coloco una llamada con paréntesis, se va a llamar
    //cada vez que se renderiza el elemento HTML que contenga dicha llamada

    //Con este método anulo que se ejecute el submit del form cada vez que apreto Enter en un input
    onFormSubmit = (event) => {
        
        event.preventDefault(); 
        
        this.props.onSubmit(this.state.term);
    }
  
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        
                        <input 
                            type="text" 
                            onChange={(e) => this.setState({term: e.target.value})}  
                            value={this.state.term}
                        />   

                    </div>
                </form>
                
            </div>
        );
    }

}

export default SearchBar;