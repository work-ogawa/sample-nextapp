/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from "../../../types/styles";
import { toPropValue, Color, Space } from "../../../utils/styles";

// Boxが」とりうるプロパティを列挙
export type BoxProps = {
    color?: Responsive<Color>
    backgroundColor?: Responsive<Color>
    width?: Responsive<string>
    height?: Responsive<string>
    minWidth?: Responsive<string>
    minHeight?: Responsive<string>
    display?: Responsive<string>
    border?: Responsive<string>
    overflow?: Responsive<string>
    margin?: Responsive<string>
    marginTop?: Responsive<Space>
    marginRight?: Responsive<Space>
    marginBottom?: Responsive<Space>
    marginLeft?: Responsive<Space>
    padding?: Responsive<Space>
    paddingRight?: Responsive<Space>
    paddingTop?: Responsive<Space>
    paddingBottom?: Responsive<Space>
    paddingLeft?: Responsive<Space>
}

/*
* Box コンポーネント
* レイアウトの調整に利用する
* ${(props) => toPropValue('color', props.color, props.theme)}
* 使用方法: ChildComponentをラップして使う
* <Box marginTop="10px">
*   <ChildComponent>
* </Box>
*/
const Box = styled.div<BoxProps>`
  // toPropValue : 与えられたpropsでマッチするものがあればCSSプロパティと値の文字列を返す
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
`

export default Box