import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//inital redux setup
//createStore, reducer, provider

//later setup
//actions, dispatch, mapStateToProps, mapDispatchToProps, Connect

//Redux store state ==> recipes: [], likedRecipe: {}, currentUser: null
//App
//SearchForm ==> own local state searchIngredients: ''
//RecipeConatiner
    //RecipeCard
