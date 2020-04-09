import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';

class Container extends React.Component {
    render() {
        return (
            <div>
                <Dustbin />
                <Box name="111"/>
                <Box name="222"/>
            </div>
        )
    }
}

export default Container;