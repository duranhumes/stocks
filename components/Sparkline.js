import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

const Sparkline = props => {
	return (
		<React.Fragment>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} style={{ strokeWidth: 2, fill: 'none' }} />
				<SparklinesReferenceLine type="avg" style={{ stroke: '#8e9396', strokeOpacity: 0.75, strokeDasharray: [5, 5] }} />
			</Sparklines>
		</React.Fragment>
	);
};

export default Sparkline;
