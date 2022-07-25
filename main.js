const main = document.getElementById("toast");
const successBtn = document.querySelector(".btn--success");
const infoBtn = document.querySelector(".btn--info");
const warnBtn = document.querySelector(".btn--warn");
const errorBtn = document.querySelector(".btn--danger");

// toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const delay = (duration / 1000).toFixed(2);
  const remove = duration + 1000;
  if (main) {
    const toast = document.createElement("div");
    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, remove);

    // Remove toast when click x icon
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-circle-exclamation",
      error: "fa-solid fa-circle-exclamation",
    };
    const icon = icons[type];

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
      <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">
          ${message}
        </p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;
    main.appendChild(toast);
  }
}

successBtn.onclick = function () {
  showSuccessToast();
};

infoBtn.onclick = function () {
  showInfoToast();
};

warnBtn.onclick = function () {
  showWarnToast();
};

errorBtn.onclick = function () {
  showErrorToast();
};

function showSuccessToast() {
  toast({
    title: "Success",
    message: "Anyone with access can view your invited visitors.",
    type: "success",
    duration: 3000,
  });
}

function showInfoToast() {
  toast({
    title: "Info",
    message: "Anyone with access can view your invited visitors.",
    type: "info",
    duration: 3000,
  });
}

function showWarnToast() {
  toast({
    title: "Warn",
    message: "Anyone with access can view your invited visitors.",
    type: "warn",
    duration: 3000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "Anyone with access can view your invited visitors.",
    type: "error",
    duration: 3000,
  });
}
