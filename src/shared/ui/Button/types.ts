import React, { Component, ReactNode } from 'react';

export type Props = {
	children: ReactNode;
	types?: `${ButtonTypes}`;
    onClick?: () => void;
};
enum ButtonTypes {
    PRIMARY = 'primary',
    ORDER = 'order',
    FILTER = 'filter',
}
