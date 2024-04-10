export const initializeTooltips = () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    // Check if the tooltip is already initialized if so, dispose of it
    const tooltipInstance = window.bootstrap.Tooltip.getInstance(tooltipTriggerEl);
    if (tooltipInstance) {
      tooltipInstance.dispose();
    }

    // Initialize the tooltip
    new window.bootstrap.Tooltip(tooltipTriggerEl, {
      template: '<div class="tooltip tooltip-custom" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    });
  });
};
