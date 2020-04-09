import React from 'react';
import ReactDOM from 'react-dom';

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

// import Dustbin from './examples/dustbin/single_target/example'
// import Dustbin from './examples/dustbin/single_target/example'
// import WithinFrame from './examples/dustbin/within_an_iframe/example'
// import Example from './examples/dustbin/within_an_iframe/example'
import Example from './examples/dustbin/copy_or_move/example'
// import Example from './examples/drag-around/naive/example'
// import Example from './examples/drag-around/custom_drag_layer/example'
// import Example from './examples/nesting/drag-source/example'
// import Example from './examples/nesting/drop-targets/example'
// import Example from './examples/sortable/simple/example'
// import Example from './examples/sortable/cancel-on-drop-outside/example'
// import Example from './examples/sortable/stress-test/example'
// import Example from './examples/customize/handles_and_previews/example'
// import Example from './examples/customize/drop_effects/example'
// import Example from './examples/other/drag_source_remount/example'
// import Example from './examples/other/chainned_connectors/example'
// import Example from './chess/example'


// import './contextMenu/src/style.css'
// import Menu from './contextMenu/simple/example'
// import Menu from './contextMenu/nested/example'
// import Menu from './contextMenu/multiple_targets/example'

ReactDOM.render(
    <div className="App">
        <DndProvider backend={Backend}>            
            <Example />
        </DndProvider>

        {/* <Menu /> */}
    </div>
    , document.getElementById('root'));
