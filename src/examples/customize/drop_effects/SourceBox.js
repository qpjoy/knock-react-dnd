import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  marginBottom: '1rem',
  cursor: 'move',
}
const SourceBox = ({ isDragging, connectDragSource, showCopyIcon }) => {
  const opacity = isDragging ? 0.4 : 1
  const dropEffect = showCopyIcon ? 'copy' : 'move'
  return connectDragSource(
    <div style={{ ...style, opacity }}>
      When I am over a drop zone, I have {showCopyIcon ? 'copy' : 'no'} icon.
    </div>,
    { dropEffect },
  )
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(SourceBox)
