import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import userService from "../services/user.service";


export function AddUser() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveUser = (e) => {
        e.preventDefault();

        const user = { firstName, lastName, email, id };

        if (id) {
            // update
            userService.update(user)
                .then(res => {
                    console.log("updated successfully", res.data);
                    navigate('/');
                })
                .catch(error => console.log("something went wrong", error));
        } else {
            // create
            userService.create(user)
                .then(res => {
                    console.log("added suscessfully", res.data);
                    navigate('/');
                })
                .catch(error => console.log("something went wrong", error));
        }
    }

    useEffect(() => {
        if (id) {
            userService.get(id)
                .then(user => {
                    setFirstName(user.data.firstName);
                    setLastName(user.data.lastName);
                    setEmail(user.data.email);
                })
                .catch(error => console.log("something went wrong", error));
        }
    },[])

    return (
        <div className="container">
            <h3>Add User</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveUser(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to Home</Link>
        </div>
    )
}