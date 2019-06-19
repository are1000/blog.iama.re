import React, { FunctionComponent, ReactNode } from 'react'
import { Link as RouterLink } from '@reach/router'
import { css } from 'emotion'

const styles = {
    link: css`
        transition: all 0.4s ease;
        text-decoration: none;
        font-variant: small-caps;
        color: inherit;

        font-size: 1.2em;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: lowercase;
        line-height: 1;

        &:hover {
            transition: all 0.4s ease;
            filter: brightness(200%);
        }
    `,
}

export type LinkProps = {
    children: ReactNode
    internal?: boolean
    [key: string]: any
}

export const Link: FunctionComponent<LinkProps> = ({
    children,
    internal,
    ...rest
}) => {
    if (internal) {
        return (
            <RouterLink className={styles.link} {...rest}>
                {children}
            </RouterLink>
        )
    }

    return (
        <a className={styles.link} {...rest}>
            {children}
        </a>
    )
}