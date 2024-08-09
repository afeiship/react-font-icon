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
  /**
   * The size of icon, default is `16`.
   */
  size?: number | string;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactFontIcon extends Component<ReactFontIconProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    iconClassName: 'iconfont',
    prefix: 'icon-',
    size: 16,
  };

  get namedClass() {
    const { prefix, name } = this.props;
    return `${prefix}${name}`;
  }

  get calcStyle() {
    const { style, size } = this.props;
    const fontSize = typeof size === 'number' ? `${size}px` : size;
    return { ...style, '--react-font-icon-font-size': fontSize };
  }

  render() {
    const { iconClassName, className, children, prefix, name, size, style, ...rest } = this.props;
    return (
      <i data-component={CLASS_NAME}
         className={cx(iconClassName, this.namedClass, CLASS_NAME, className)}
         style={this.calcStyle}
         {...rest}
      />
    );
  }
}
