import React from 'react';

export default class Application extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
                <i className='fa fa-cog' />
                Core Application Component
            </div>
    }
}