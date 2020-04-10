-   [ ] Why would you use class component over function components (removing hooks from the question)?
        Because a functional component is just a plain JavaScript function, you cannot use setState() in your component.
        If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.
        Another feature which you cannot use in functional components are lifecycle hooks, all lifecycle hooks are coming from the React.Component which you extend from in class components.
-   [ ] Name three lifecycle methods and their purposes.
        Mounting, Updating, Unmounting.
        Mount renders the first render and constructor fires as well.
        Updates, just as it sounds. Something updates on part of the page(props, setState, or forceUpdate) and needs a re-render.
        Unmounting, removes from page.
-   [ ] What is the purpose of a custom hook?
        You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and more.
-   [ ] Why is it important to test our apps?
        To make sure it works as it should. You dont want to release a site to have multiple users have the site break for them because of something that was not tested.
