// explain below concepts and write an example for each one

// action:
// In Redux, an action is a plain JavaScript object that describes an event that happened in your application and triggers a state change

// action creator:
// One thing we haven't talked much about yet is how we make things happen in Redux. Sure, we covered .dispatch() but that's quite basic. We just showed how to directly dispatch an action by doing: store.dispatch({type: 'SOME_ACTION'})

// reducer:
// In Redux, a reducer is a pure function that determines how the application's state changes in response to actions. It takes the current state and an action as arguments and returns a new state. Reducers are essential for managing state changes in a predictable and traceable manner 

// store:
// El store contiene todo el árbol de estado de tu aplicación. La única forma de cambiar el estado que contiene es despachando una acción.
// El store no es una clase. Es solo un objeto con unos pócos métodos. Para crearlo, pasa tu principal función reductora a createStore