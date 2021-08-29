import React from 'react'
import classes from './AlertModal.module.css'
import Card from '../shared/Card'

function AlertModal(props) {
    const handleAlertSubmit = () => {
        props.handleAlertSubmit();
    }

    return (
        <div>
            <div className={classes.backdrop}></div>
            <Card className={classes.alertmodal}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button className="form-button" onClick={handleAlertSubmit}>OK</button>
                </footer>
            </Card>
        </div>

    )
}

export default AlertModal
