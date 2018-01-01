import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes:[
        {
          id:0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595164628.jpeg"
        },
        {
          id:1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "https://fthmb.tqn.com/sHI14VwgA58daPo0TSY-ishRJk8=/2122x1415/filters:fill(auto,1)/172192393-56a20fea3df78cf7727188b7.jpg"
        },
        {
          id:2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "http://del.h-cdn.co/assets/17/15/1280x640/landscape-1492036998-delish-capreseavocadotoast-01.jpg"
        } 
      ],
      nextRecipeId :3,
      showForm:false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  handleSave(recipe){
    this.setState((prevState, props)=>{
      const newRecipe = {
          ...recipe, 
          id:this.state.nextRecipeId
        }
      return{
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes:[...this.state.recipes,newRecipe],
        showForm:false
      };
      
    });
  }
  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewReicpe={()=>this.setState({showForm:true})} />
        { showForm ? <RecipeInput onSave={this.handleSave} onClose={()=>this.setState({showForm:false})} /> : null}
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default RecipeApp;
