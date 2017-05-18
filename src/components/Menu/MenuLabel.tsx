import * as React from 'react';
import * as classNames from 'classnames';

export const MenuLabel = (props: React.HTMLProps<HTMLParagraphElement>) => {
    const className = classNames('menu-label', props.className);

    return (
        <p {...props} className={className}>
            {props.children}
        </p>
    )
}
