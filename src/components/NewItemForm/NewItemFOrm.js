import React, { Component } from 'react';

class NewItemForm extends Compontent {
    render() {
         return (
             <div>
                 <h2>
                     Add Item
                 </h2>
                 <form>
                     <input type="text"/>
                     <input type="text"/>
                     <input type="submit" >Add Item</input>
                 </form>
             </div>
         )
    }
}

export default NewItemForm;