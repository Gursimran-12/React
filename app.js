        // Using Simple JavaScript
        // const root = document.getElementById("root");
        // const heading = document.createElement("h1");
        // heading.innerHTML = "Hello there !";
        // root.appendChild(heading);


        // ---------------------------------------------------------------------------------------
        // Same thing using React
        // const heading = React.createElement("h1", {}, "Hello there !!");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);


        
        //---------------------------------------------------------------------------------------
        // Creating the following structure using React
        // <div id="Parent">
        //    <div id="child">
        //      <h1> Hey !! </h1>
        //    </div>
        // <div>
            

        //------------------------------------------------------------------------------------------
            const root = ReactDOM.createRoot(document.getElementById("root"));
            const parent = React.createElement("div", 
            {id:"parent"}, 
            React.createElement(
                "div", 
                {id:"child"},
                React.createElement("h1", {}, "Hey !!")
            ))

            root.render(parent);