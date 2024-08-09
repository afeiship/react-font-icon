import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-font-icon';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactFontIconProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * Main icon className, default is `iconfont`.
   */
  iconClassName?: string;
  /**
   * The prefix of icon name, default is `icon-`.
   */
  prefix?: string;
  /**
   * The icon name.
   */
  name: string;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactFontIcon extends Component<ReactFontIconProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    iconClassName: 'iconfont',
    prefix: 'icon-',
  };

  get namedClass() {
    const { prefix, name } = this.props;
    return `${prefix}${name}`;
  }

  render() {
    const { iconClassName, className, children, prefix, name, ...rest } = this.props;
    return (
      <i data-component={CLASS_NAME}
         className={cx(iconClassName, this.namedClass, CLASS_NAME, className)}
         {...rest}
      />
    );
  }
}
