import React from 'react';
import PropTypes from 'prop-types'; 
import Badge from 'react-bootstrap/Badge';  


export default class SectionHeader extends React.Component{
    
    constructor(props){
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
        this.generateBadge = this.generateBadge.bind(this);
    }

    static propTypes = {
        size: PropTypes.string,
        textContent: PropTypes.string.isRequired,
    };

    generateBadge(textContent){
        return (
            <Badge className='text-align-center'>{textContent}</Badge>
        );
    }

    renderHeader() {
        const { size, textContent } = this.props;

        switch(size){
            case 'small':
                return (
                    <h3>{this.generateBadge(textContent)}</h3>
                );
            case 'medium':
                return (
                    <h2>{this.generateBadge(textContent)}</h2>
                );
            case 'large':
                return (
                    <h1>{this.generateBadge(textContent)}</h1>
                );
            default:
                return(
                    <h1>{this.generateBadge(textContent)}</h1>  
                )
        }
    }

    render(){
        return (
            <div className='col text-center'>{this.renderHeader()}</div>   
        );
    }
}