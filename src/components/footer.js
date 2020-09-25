import React from 'react';
import { CardText } from 'reactstrap'

class Footercomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
                <CardText style={{ marginLeft: 20, fontSize : 16, fontWeight: "bold" }}>
                    © 2020 HM, Inc. All Rights Reserved
                </CardText>
                <CardText style={{ marginLeft: 20, fontSize : 16, fontWeight: "bold" }}>
                    Purwadhika Campus BSD
                    BSD Green Office Park, GOP 9 - G Floor, BSD City, Tangerang Banten
                </CardText>
            </div>
        );
    }
}


export default Footercomponent;