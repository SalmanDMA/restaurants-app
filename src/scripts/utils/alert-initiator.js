const AlertInitiator = {
  showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    const alertMessage = document.createElement('div');

    alertMessage.className = `alert alert-${type}`;
    alertMessage.innerText = message;

    alertContainer.appendChild(alertMessage);

    setTimeout(() => {
      alertMessage.remove();
    }, 3000);
  },
};

export default AlertInitiator;