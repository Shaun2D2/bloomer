import * as React from 'react';

import { Bulma } from './../../bulma';

export interface TabLink<T> extends Bulma.Render, React.HTMLProps<T> { }

export const TabLink = (props: TabLink<HTMLAnchorElement>) => {
    const { render, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps });

    return (
        <a {...HTMLProps}>
            {props.children}
        </a>
    )
}
