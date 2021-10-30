import React from 'react';

export  default class Button extends React.Component{
    render() {
        return(
            <button className="button"
            onClick={this.props.onClick}
            val ={this.props.value}
            name ={this.props.name}

            >
                {this.props.name}
            </button>
        );

    }
}

