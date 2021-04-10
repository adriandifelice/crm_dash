import React from 'react';
import styles from '../styles/strategy.module.scss'

export default function Strategy () {

  const potentialClients = {
    Restaurants: ['Hamburguer', 'Sandwich/Bistro', 'Brunch', 'French', 'Spanish', 'Italian', 'Cafes', 'Wine Shop', 'Brewery', 'Food Truck'],
    Supermarkets: ['Large Chains', 'Medium Chains', 'Small Chains', 'Mom & Pop'],
    Hotels:['Large Hotels', 'Medium Hotels', 'Boutique', 'Hotels'],
    Miscellaneous:['Meal delivery kits', 'Ghost restaurants', 'Theaters']
  };

  console.log(potentialClients);

  return (
    <div className={styles.wrapper}>
        <div className={styles.cardWrapper}>
          <h3 >Prospecting</h3>
          <p>Finding potential clients, those who may or may not be a good fit</p>
           Restaurants: {potentialClients.Restaurants.map(client => (<div>{client}</div>))}
           Supermarkets:{potentialClients.Supermarkets.map(client => (<div>{client}</div>))}
           Hotels: {potentialClients.Hotels.map(client => (<div>{client}</div>))}
           Miscell:{potentialClients.Miscellaneous.map(client => (<div>{client}</div>))}
        </div>
        <div className={styles.cardWrapper}>
          <h3>Contacting</h3>
          <p>Email/Call/Visit</p>
        </div>
        <div className={styles.cardWrapper}>
          <h3>Meeting/Follow Up</h3>
          <p>Set up a time to meet and bring samples</p>
        </div>
        <div className={styles.cardWrapper}>
          <h3>Step 4</h3>
          <p>Following up, making sure there is communication</p>
        </div>
    </div>
  )
}