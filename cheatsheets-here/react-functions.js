//! Different functions commonly found in a react app

//! Component functions

// The define react components (React building blocks)

function Header() {
    return <h1>Component function</h1>;
}

//! Event handler function

// Handles user interactions like clicks, input changes, form submissions etc

function handleClick(){
    console.log("Button clicked");
}

// JSX

<button onClick={handleClick}>Click</button>

//! State management 

// useSTate hook creates stateful values and a function to update them

const [count, setCount] = useState(0);
// setCount is a function to update count

//! Effect functions

// Used with useEffect to run side effects

useEffect(() => {
    console.log("Component mounted or updated");
}, []);

//! Custom hook functions

// Reuseable logic using other hooks

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
}

//! Utility functions

// General-purpose functions that support components (e.g. formatters, validators)

function formatDate(date){
    return new Date(date).toLocaleDateString();
}

//! Callback functions

// Passed to other components or hooks for dynamic behavior

{/* <myComponent onAction{() => console.log("Action!")} /> */}

//! Ref functions (useRef + refs)

// Used to get references to DOM elements or hold mutable values

const inputRef = useRef();
function focusInput() {
    inputRef.current.focus();
}

//! Reducer functions (useReducer)

// Advanced state logic in functional components

function reducer(state, action) {
    switch (action.type) {
        case 'increment':return { count: state.count + 1 };
        default: return state;
    }
}