import React from "react";
import Form from 'react-bootstrap/Form';


class UserForm extends React.Component {

    numberOfHorns = (e) => {
        e.preventDefault();
        let num = e.target.value;
        this.props.Horns(num);
    };

    render() {
        return (
            <Form onChange={this.numberOfHorns}>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect"> Number of horns </Form.Label>
                        <Form.Select id="disabledSelect">
                            <option value="0">all</option>
                            <option value="1">one</option>
                            <option value="2">two</option>
                            <option value="3">more</option>

                        </Form.Select>
                    </Form.Group>
                </fieldset>
            </Form>

        )
    }
}
export default UserForm;