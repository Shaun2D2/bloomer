import * as classnames from 'classnames';

import { Bulma, getModifiersClasses } from './bulma';

export function withModifiers(props: Bulma.NonHTMLProps<HTMLElement> & React.HTMLProps<HTMLElement>, obj) {
    return [
        {
            ...obj,
            ...getModifiersClasses(props),
        },
        props.className
    ]
}

export function classNames(props: Bulma.NonHTMLProps<HTMLElement>, obj = {}): string | undefined {
    return classnames(withModifiers(props, obj)) || undefined;
}

export function getHTMLProps(props: Bulma.NonHTMLProps<HTMLElement>, ...args: Array<Function>): React.HTMLProps<HTMLElement> {
    return args.length > 0 ? args.reduce((rest, fn) => ({ ...fn(rest) }), props) : props
}

export function combineModifiers(props: Bulma.NonHTMLProps<HTMLElement>, ...args: Array<Function>): object {
    return args.length > 0 ? args.reduce((rest, fn) => ({...rest, ...fn(props) }), {}) : {};
}