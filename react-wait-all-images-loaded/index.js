import React, {Component} from "react";
import PropTypes from "prop-types";

const checkImage = path =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({path, status: 'ok'});
        img.onerror = () => reject({path, status: 'error'});
        img.src = path;
    });

const loadImg = paths => Promise.all(paths.map(checkImage))

/**
 * This class will wait all assets loaded, then render children. 
 * otherwise fallback Component will call first.
 */
class WaitImageLoaded extends Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        await loadImg(this.props.imagePaths || []);
        this.setState({
            loading: false
        })
    }

    buildComponent = ({children, fallback}, state) => {
        const {loading} = state;
        if (loading) return fallback || <div>Loading...</div>
        return children
    };

    render() {
        return this.buildComponent(this.props, this.state);
    }
}

WaitImageLoaded.propTypes = {
    imagePaths: PropTypes.array,
    delay: PropTypes.number
};

export default WaitImageLoaded;