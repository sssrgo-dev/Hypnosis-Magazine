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

export { formComponentsListIfGiven, IfGiven };
