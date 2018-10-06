import React from 'react'
import { Switch, Route } from 'react-router-dom'

export class WithParamsComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h3>这是 WithParamsComponent</h3>
                <Switch>
                    <Route path={this.props.match.path} exact render={route => <div>无参，默认显示</div>} />
                    <Route path={`${this.props.match.path}/:id(\\d+)`} exact render={route => <div>带数字参数：{route.match.params.id}</div>} />
                    <Route path={`${this.props.match.path}/abc`} exact render={route => <div>带特定参数abc</div>} />
                </Switch>
            </React.Fragment>
        )
    }
}