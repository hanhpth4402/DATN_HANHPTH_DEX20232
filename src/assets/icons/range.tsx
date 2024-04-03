import Form from 'react-bootstrap/Form';

function Range({state, setState}: {
    state: number,
    setState: (state: number) => void,
}) {
    return (
        <>
            <Form.Range
                value={state}
                onChange={(event) => {
                    setState(Number(event.target.value));
                }}
            />
        </>
    );
}

export default Range;
