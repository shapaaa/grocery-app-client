import styled from 'styled-components';
const Svg = styled.svg`
	height: 40px;
	width: 40px;
`;
const CartIcon = () => {
	return (
		<Svg
			fill='var(--orange)'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 26.458333 33.0729175'
			x='0px'
			y='0px'>
			<path
				d='m2.4058989 273.45248c-.97173-.0296-1.13467 1.37821-.18189 1.57146l1.75534.38447c.92853 4.44188 1.94068 8.86566 2.92217 13.2964.0807.3633.40297.62177.7751.62166h13.9388601c1.07391.0159 1.07391-1.60327 0-1.5875h-13.3017301l-.35138-1.58699h14.3563801c.37214.0001.69439-.25837.7751-.62167l1.75793-7.93652c.10958-.49538-.26727-.96501-.77459-.96531-6.07305.00014-12.14606-.00013-18.2189501-.003l-.43147-2.04709c-.0643-.30552-.30172-.54494-.60664-.61185l-2.25709-.49403c-.0516-.0119-.10418-.0188-.15709-.0201zm8.5746601 16.40374c-1.1595301 0-2.1165401.95711-2.1165401 2.1167 0 1.15961.95701 2.11669 2.1165401 2.11669 1.15953 0 2.11653-.95708 2.11653-2.11669 0-1.15959-.957-2.1167-2.11653-2.1167zm7.40787 0c-1.15952 0-2.11653.95711-2.11653 2.1167 0 1.15961.95701 2.11669 2.11653 2.11669 1.15954 0 2.11654-.95708 2.11654-2.11669 0-1.15959-.957-2.1167-2.11654-2.1167z'
				transform='translate(0 -270.54165)'
			/>
		</Svg>
	);
};
export default CartIcon;
