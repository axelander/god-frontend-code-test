export enum BodyType {
  'suv',
}

export enum ModelType {
  PLUGIN_HYBRID = 'plug-in hybrid',
  PURE_ELECTRIC = 'pure electric',
}

export type Car = {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: string;
};
