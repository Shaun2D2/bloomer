import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface PageLinkProps extends
    Bulma.Render<HTMLAnchorElement>, Bulma.PageLink<HTMLAnchorElement> {
}

export const PageLink = (props: PageLinkProps) => {
    const className = classNames(props, {
        'pagination-link': true
    });

    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    return (
        <a {...htmlProps} className={className}>
            {props.children}
        </a>
    )
}
