import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

const Chart = props => {
	return (
		<React.Fragment>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesSpots />
			</Sparklines>
		</React.Fragment>
	);
};

export default Chart;
