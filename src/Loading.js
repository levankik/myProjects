import PropTypes from 'prop-types';
import {Spinner} from "react-bootstrap";
import './Loading.scss';

function Loading({text}) {
    return (
        <div className="loading">
            <div className="text-muted">
                <Spinner animation="border" size="sm" className="me-2"/>
                <span>{text}</span>
            </div>
        </div>
    )
}

Loading.propTypes = {
    text: PropTypes.string
}

Loading.defaultProps = {
    text: 'Loading...'
}

export default Loading;