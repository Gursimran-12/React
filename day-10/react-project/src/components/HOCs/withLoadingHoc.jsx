import { useState } from "react";

// HOC: adds loading functionality
function withLoading(Component) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}

// Simple component
function UserList({ users }) {
  return (
    <div>
      <h4>User List</h4>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.role}
        </div>
      ))}
    </div>
  );
}

// Enhanced component
const UserListWithLoading = withLoading(UserList);

// Main component
function Example_withLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const users = [
    { id: 1, name: "Inder Singh", role: "Senior Dev" },
    { id: 2, name: "Rahul Kumar", role: "Developer" },
    { id: 3, name: "Priya Sharma", role: "Designer" },
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div>
      <h3>withLoading Example</h3>

      <button onClick={handleRefresh}>
        Refresh Data
      </button>

      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}

export default Example_withLoading