import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
    let authorLink = "https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/.com";
    let authorPhoto = "https://feelgoodfoodie.net/wp-content/uploads/2023/11/YumnaJawad-FeelGoodFoodie-14.jpg";
    let authorName = "Yumna Jawad";
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} height="200px" />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
        <div>
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}

export default RecipeDescription;
