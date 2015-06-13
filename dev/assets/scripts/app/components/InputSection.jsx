import React from 'react';

export default class InputSection extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [{id: 'fav', name: 'よく使う項目'},
        {id: 'hoge', name: '食費'},
        {id: 'hoga', name: '交通費'},
        {id: 'huga', name: '交際費'},
      ],
      subcategory: {
        fav: ['よく使う1', 'よく使う2', 'よく使う3'],
        hoge: ['食費1', '食費2', '食費3'],
        hoga: ['交通費1', '交通費2', '交通費3'],
        huga: ['交際費1', '交際費2', '交際費3']
      }
    };
  }
  render() {
    let categories = this.state.category.map(function (category) {
      return <li>{category.name}</li>
    });
    let subcategories = this.state.subcategory['fav'].map(function (subcategory) {
      return <li>{subcategory}</li>
    });
    return (
      <div>
        <form>
          <ul className="tabs-list"></ul>
          <input type="text" name="amount" />
          <select name="property">
            <option value="1">資産1</option>
            <option value="2">資産2</option>
            <option value="3">資産3</option>
            <option value="4">資産4</option>
          </select>
          <ul className="category-list">{categories}</ul>
          <ul className="subcategory-list">{subcategories}</ul>
          <input type="date" name="date"/>
          <input type="text" name="memo" />
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}
