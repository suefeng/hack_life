import React from 'react';
import { data } from '../dashboardData/dailyTips';
class dailyTips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // dailyTips: [],
            // dailyTips: [],
            // youMightExperience: [],
            // labResults: [],
            // dailyTips: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        //const { dailyTips } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.dailyTips
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, text }) => {
                return (
                    <div>
                        <p>{text}</p>
                    </div>
                );
            })
        return (
            <div>
                {elems}
            </div>
        )
    }
}

export default dailyTips;
