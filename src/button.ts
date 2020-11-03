import { css } from 'emotion'
import { GRAYISH_BLUE_ALPHA80, LIGHT_GRAYISH_CYAN, LIGHT_GRAYISH_LIME_GREEN, VERY_DARK_GRAY_ALPHA80, VERY_DARK_GRAYISH_BLUE, VERY_SOFT_RED } from './const/color'

export default css`
  height: 40px;
  background-color: #fcfcfc;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${GRAYISH_BLUE_ALPHA80};
  border-style: solid;
  padding-left: 12px;
  padding-right: 12px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
  font-weight: 900;
  color: ${VERY_DARK_GRAYISH_BLUE};
  outline: none;

  &:active {
    opacity: 0.65;
  }

  &.is-danger {
    border-width: 0;
    background-color: ${VERY_SOFT_RED};
    color: ${VERY_DARK_GRAY_ALPHA80};
  }

  &.is-success {
    border-width: 0;
    background-color: ${LIGHT_GRAYISH_LIME_GREEN};
    color: ${VERY_DARK_GRAY_ALPHA80};
  }

  &.is-info {
    border-width: 0;
    background-color: ${LIGHT_GRAYISH_CYAN};
    color: ${VERY_DARK_GRAY_ALPHA80};
  }

  svg {
    height: 21px;
    width: 21px;
  }
`
