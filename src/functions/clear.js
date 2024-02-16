const clear = (containerId) => {
  const container = document.querySelector(`#${containerId}`);
  if (container == null) return;
  container.innerHTML = '';
};

export default clear;
