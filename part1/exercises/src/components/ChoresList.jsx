import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return ( 
      <div>
      <h4 className = {classes.choresHeading}>Today's Chores</h4>
      <ul>
         <li className={classes.choresText}>Take out Trash</li>
         <li className={classes.choresText}>Mow Lawn</li>
         <li className={classes.choresText}>Do Homework!</li>
      </ul>
   </div>
   )
}