import { StyleContext } from './contexts';
import LayoutComponent from './LayoutComponent';

const formContextedComponent = (element, index) => (
  <StyleContext.Provider
    value={element.styleContext}
    key={new Date().getTime() * index}
  >
    <LayoutComponent>{element.comp}</LayoutComponent>
  </StyleContext.Provider>
);

const formContextedComponentsList = (componentsWithContext) =>
  componentsWithContext.map(formContextedComponent);

const IfGiven = (props) => {
  if (props.children !== undefined) return props.children;
  else return '';
};

const formComponentsListIfGiven = (componentsList) => {
  //   console.log('componentsList', componentsList);

  return componentsList.map((comp, index) => (
    <IfGiven key={new Date().getTime() + index}>{comp}</IfGiven>
  ));
};

const unary = (fn) => (arg1) => (arg2) => fn(arg1, arg2);

const formBEMClasses = (modifier, bem) =>
  bem + modifier ? bem + modifier : '';

const formBEMClassesStep1 = unary(formBEMClasses);

export { formComponentsListIfGiven, IfGiven, formContextedComponentsList };
