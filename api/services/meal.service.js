import Meal from '../models/Meal.model';

class MealService {
  fetchAllMeals() {
    this.meals = [{
      id: 1,
      name: 'Jollof Rice',
      size: 'plates',
      price: '500',
      currency: 'NGN',
    },
    {
      id: 2,
      name: 'Fried Rice',
      size: 'plates',
      price: '500',
      currency: 'NGN',
    },
    {
      id: 3,
      name: 'Coconut Rice',
      size: 'plates',
      price: '500',
      currency: 'NGN',
    },
    ];

    return this.meals.map((data) => {
      const meal = new Meal();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
  }

  getAll() {
    return this.fetchAllMeals();
  }

  get(id) {
    return this.fetchAllMeals()[id - 1];
  }
}

export default MealService;
