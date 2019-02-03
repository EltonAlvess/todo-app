import React, { Component } from 'react'

export default class Grid extends Component{
    toCssClass(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let Class = ''

        if(cols[0]) Class += `col-xs-${cols[0]} `
        if(cols[1]) Class += `col-sm-${cols[1]} `
        if(cols[2]) Class += `col-md-${cols[2]} `
        if(cols[3]) Class += `col-lg-${cols[3]} `
        return Class
    }

    render(){
        const gridClass = this.toCssClass(this.props.cols || '6')
        return(
            <div className={gridClass}>
                {this.props.children}
            </div>
        )
    }
}