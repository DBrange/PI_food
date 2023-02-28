import { useSelector } from "react-redux";

const regEx = {
  image: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)\??([%&a-z0-9=_-]+)?$/i,
};

export const validate = (input) => {
  const error = {};

  if(input.item.includes(input.name)) error.name='Esta receta ya se encuentra en la nuestra aplicacion, por favor agregue una nueva receta'
  if (input.name.length > 255)
    error.name = "Maxima capacidad de caracteres: 255";
  if (!input.name) error.name = "Aun no coloco un nombre para la receta";
  if (!input.summary) error.summary = "No ha ingresado el resumen de la receta";
  if (
    input.healthScore > 100 ||
    input.healthScore < 0 ||
    !input.healthScore ||
    isNaN(input.healthScore)
  )
    error.healthScore = "Solo puede ser un numero del 0 al 100";
  if (!input.stepByStep)
    error.stepByStep = "No ha ingresado los pasos de la receta";
  if (!regEx.image.test(input.image))
    error.image = "La url colocada no cumple con los requisitos";

  return error;
};
