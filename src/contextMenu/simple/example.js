import React from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import './styles/react-contextmenu.css'
import './styles/custom.css'

const styles = {
  textAlign: 'center',
  backgroundColor: '#CCC',
  padding: 30
}

const ID = 'ID'

const handleClick = (event, data) => {
  console.log(`clicked`, { event, data })
}

const attributes = {
  className: 'custom-root',
  disabledClassName: 'custom-disabled',
  dividerClassName: 'custom-divider',
  selectedClassName: 'custom-selected'
}

const Simple = () => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <ContextMenuTrigger id={ID}>
      <h2 style={styles}>Right click here</h2>
    </ContextMenuTrigger>
    <ContextMenu id={ID}>
      <MenuItem
        data={{ action: 'copy' }}
        onClick={handleClick}
        attributes={attributes}
      >
        Copy
      </MenuItem>
      <MenuItem
        data={{ action: 'paste' }}
        onClick={handleClick}
        attributes={attributes}
      >
        Paste
      </MenuItem>
      <MenuItem divider />
      <MenuItem
        data={{ action: 'delete' }}
        onClick={handleClick}
        attributes={attributes}
      >
        Delete
      </MenuItem>
    </ContextMenu>
  </div>
)

export default Simple;