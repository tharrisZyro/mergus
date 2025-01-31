import React from 'react';
import injectSheet from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
    actionButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.paddingSM
    },
})

const handleIcon = (icon) => {
    switch (icon) {
        case 'edit':
            return faPen;
        case 'add':
            return faPlus;
        default: 
            return null;
    }
}

const ActionButton = ({classes, icon, click}) => (
    <FontAwesomeIcon className={classes.actionButton} icon={handleIcon(icon)} onClick={click} size='lg'/>
)

export default injectSheet(styles)(ActionButton);