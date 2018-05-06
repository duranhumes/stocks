import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Sparkline = props => {
	return (
		<React.Fragment>
			<Sparklines height={120} width={180} data={props.data} style={{ ...props.style }}>
				<SparklinesLine color={props.color} style={{ strokeWidth: props.stroke, fill: 'none' }} />
				<SparklinesReferenceLine type="avg" style={{ stroke: '#8e9396', strokeOpacity: 0.75, strokeDasharray: [2, 5] }} />
			</Sparklines>
		</React.Fragment>
	);
};

export default Sparkline;
