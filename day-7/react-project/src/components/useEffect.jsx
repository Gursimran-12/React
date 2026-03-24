import { useState, useEffect } from "react"

function SimpleUserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        console.log(' useEffect is running!');
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('Response received');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError(err.message);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return (
            <>
                <h2> Loading users...</h2>
                <p>Fetching data from API</p>
            </>

        );
    }

    // If there's an error, show error message
    if (error) {
        return (
            <>
                <h2> Error!</h2>
                <p>{error}</p>
            </>
        );
    }

    return (
        <>
            <h1> User Directory </h1>
            <p> Successfully Loaded </p>

            {users.map((user) => (   
                <div key={user.id}>  
                    <h3> {user.name} </h3>
                    <span> {user.id} </span>

                    <p> Email: {user.email} </p>
                    <p> Phone: {user.phone} </p>
                    <p> Company: {user.company?.name} </p>
                    <hr/>
                </div>
            ))}
        </>
    )
}

export default SimpleUserList

