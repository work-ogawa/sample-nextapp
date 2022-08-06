/* eslint-disabled prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from '../../../components/layout/Box'
import type {
    Responsive,
    CSSPropertyAlignItems,
    CSSPropertyAlignContent,
    CSSPropertyJustifyItems,
    CSSPropertyFlexDirection,
    CSSPropertyJustifySelf,
    CSSPropertyFlexWrap,
    CSSPropertyAlignSelf, CSSPropertyJustifyContent
} from "../../../types/styles";
import { toPropValue } from '../../../utils/styles'

type FlexProps = BoxProps & {
    alignItems?: Responsive<CSSPropertyAlignItems>
    alignContent?: Responsive<CSSPropertyAlignContent>
    justifyContent?: Responsive<CSSPropertyJustifyContent>
    justifyItems?: Responsive<CSSPropertyJustifyItems>
    flexWrap?: Responsive<CSSPropertyFlexWrap>
    flexBasis?: Responsive<string>
    flexDirection?: Responsive<string>
    flexGrow?: Responsive<string>
    flexShrink?: Responsive<string>
    justifySelf?: Responsive<CSSPropertyJustifySelf>
    alignSelf?: Responsive<CSSPropertyAlignSelf>
    order?: Responsive<string>
}

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 * 実装例: ChildComponentをspace-betweenで並べる
 * <Flex justifyContent="space-between">
 *  <ChildComponent>
 *  <ChildComponent>
 *  <ChildComponent>
 * </Flex>
 * ChildComponentを縦方向にcenterで並べる
 * <Flex justifyContent="center" flexDirection="column">
 *   <ChildComponent>
 *   <ChildComponent>
 *   <ChildComponent>
 * </Flex>
 */
const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropValue('align-content', props.alignContent, props.theme)}
  ${(props) => toPropValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toPropValue('justify-items', props.justifyItems, props.theme)}
  ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme)}
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme)}
  ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => toPropValue('justify-self', props.justifySelf, props.theme)}
  ${(props) => toPropValue('align-self', props.alignSelf, props.theme)}
  ${(props) => toPropValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
    display: 'flex',
}

export default Flex

