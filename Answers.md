 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are JavaScript objects that contain the information that pass down datat to the store.
    Reducers use the payloads from the actions sent to them to return a new copy of the state.  They do not modify the original state.
    The store is an object that houses the entire state tree.  It is known as the 'single source of truth' because all components access their state from this location.

 What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the state that resides in the store.  It is global and can be called on from any component in the application.  This stateis immutable.
    Component state only exists in the component that creates it and the children components that it's passed down to.  This state is able to be modified.

 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    Redux-thunk lets you write action creators that return functions instead of actions.  This lets the dispatch delay actions to load the page asynchronously.