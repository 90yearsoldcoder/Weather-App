const remove = (containerId) => {
  const container = document.querySelector(`#${containerId}`);
  if (container == null) return;
  container.remove();
};

export default remove;
