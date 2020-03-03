import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

 
export default class IndecisionApp extends React.Component  {
    state = {
        options : []
    }

    handleDeleteOptions = () => {
        this.setState((prevState) => ({options : [] }))
    }

    handleAddOption = (option) => {
        
        if(!option){
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'The element already exist'
        }
        this.setState((prevState)=> ({
             options: prevState.options.concat([option])
         }))
    }

    handlePick = () => {
      alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }

    handleDeleteSingular = (option) => {
        console.log(option);
        this.setState((prevState)=> ({
            options: prevState.options.filter(e=>e!==option)
        }))
    }
    componentDidMount() {
       try {
        const option = JSON.parse(localStorage.getItem('option'))
        if(option==null)
        this.setState(() => ({option}))
       } catch (error) {
           
       }
    }

    componentDidUpdate(prevProp, prevState){
        
        if(prevState.options.length !==this.state.options.length){
         console.log('There is options');
         const json=JSON.stringify(this.state.options)
         localStorage.setItem('option',json);   
        }
        console.log('Saving data');
        console.log(prevProp);
        console.log(prevState);
    }

    componentWillUnmount(){

        console.log('componentWillMount');
    }
   

    render() {

        return(
            
            <div>
            
                <Header />
                <Action hasOption={this.state.options.length>0} 
                handlePick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteSingular={this.handleDeleteSingular}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
                <OptionModal/>
            </div>

        );
    }
}

