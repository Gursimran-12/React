import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setLoading(true)

        fetch(url)
            .then((response) => {
                if(!response.ok)
                    throw new Error("Failed to fetch data");
                return(response.json());
            })

            .then(data => {
                setData(data);
                setError(null);
            })

            .catch((err) => {
                setError(err);
                setData(null);
            })

            .finally(() => {
                setLoading(false);
            });
    }, [url])

    return { data, loading, error }

}

function Example2_useFetch()
{
    const [userId, setUserId] = useState(1);
    const {data: user, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    return(
        <>
        <h3> Example 2: useFetch Hook </h3>
        <div>
            <label> Select User: </label>
            <select value={userId} onChange={(e) => setUserId(e.target.value)}>

                {[1,2,3,4,5,6].map((id) => (
                    <option key={id} value={id}>
                        user: {id}
                    </option>
                ))}
            </select>
        </div>

        {loading && <div> Loading user... </div>}
        {error && <div> Error: {error} </div>}

        {user && 
        <div>
            <h4> {user.name} </h4>
            <p> Email: {user.email} </p>
            <p> Phone: {user.phone} </p>
            <p> Company: {user.company.name} </p>
            <p> Website: {user.website} </p>
            </div>}
        </>
    )
}

export default Example2_useFetch



// ===================================================================================================
// ===================================================================================================
// import { useState, useEffect } from "react";

// // Custom hook for data fetching
// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url) return;

//     setLoading(true);

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to fetch");
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setData(null);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading, error };
// }

// // Using the useFetch hook
// function Example2_UseFetch() {
//   const [userId, setUserId] = useState(1);

//   const { data: user, loading, error } = useFetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   return (
//     <div>
//       <h3>Example 2: useFetch Hook</h3>

//       <div>
//         <label>Select User: </label>
//         <select
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         >
//           {[1, 2, 3, 4, 5].map((id) => (
//             <option key={id} value={id}>
//               User {id}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <div>Loading user...</div>}

//       {error && <div>Error: {error}</div>}

//       {user && (
//         <div>
//           <h4>{user.name}</h4>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone}</p>
//           <p><strong>Company:</strong> {user.company.name}</p>
//           <p><strong>Website:</strong> {user.website}</p>
//         </div>
//       )}

//     </div>
//   );
// }