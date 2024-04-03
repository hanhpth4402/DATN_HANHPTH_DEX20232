import Placeholder from 'react-bootstrap/Placeholder';

const PlaceHolder = ({xs}: {xs: number}) => {
    return (
        <Placeholder animation="glow">
            <Placeholder xs={xs} />
        </Placeholder>
    )
}

export default PlaceHolder;
