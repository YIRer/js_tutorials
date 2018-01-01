import React, { Component } from 'react';
import Recipe from './Recipe';
import PropsTypes from'prop-types';
import "./RecipeList.css";

class RecipeList extends Component {

    static propsTypes = {
        recipes:PropsTypes.arrayOf(PropsTypes.object).isRequired,
        onDelete: PropsTypes.func.isRequired
    }
    render() {
        const {onDelete} = this.props;
        const recipes = this.props.recipes.map((r,index)=>{
            return <Recipe key={r.id} {...r} onDelete={onDelete} />
        })
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;