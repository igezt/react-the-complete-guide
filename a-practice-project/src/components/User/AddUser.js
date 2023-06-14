
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age (non-empty values).'
            })
            return;
        }

        const user = {
            id: Math.random(),
            name: enteredUsername,
            age: enteredAge,
        }

        props.onAddUser(user);

        setEnteredUsername("");
        setEnteredAge("");
        
    }

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const changeUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const [error, setError] = useState(null);

    const closeErrorModal = () => {
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeErrorModal}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={changeUsernameHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="age" onChange={changeAgeHandler} value={enteredAge}/>
                    <Button type="submit">
                        Add user!
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;

