import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface TabsProps extends Bulma.Modifiers<HTMLDivElement> { }

export const Tabs = (props: TabsProps) => {
    const className = classNames(props, { tabs: true });
    const htmlProps = getHTMLProps(props);

    return (
        <div {...htmlProps} className={className}>
            {props.children}
        </div>
    )
}
