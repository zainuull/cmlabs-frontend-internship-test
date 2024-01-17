export interface ICategoryModel {
  categories: ICategoryDataModel[];
}

export interface ICategoryDataModel {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}


export interface IDetailCategoryModel {
  meals: IDetailCategoryDataModel[];
}

export interface IDetailCategoryDataModel {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

