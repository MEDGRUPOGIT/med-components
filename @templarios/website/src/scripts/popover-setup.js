const select = document.querySelector('ion-select');
const datetime = document.querySelector('ion-datetime');
const bodyEl = document.querySelector('body');

// insere classes necessárias para estilizar o popover
select.interfaceOptions = { cssClass: 'tp-popover' };
datetime.pickerOptions = { cssClass: 'med-datetime' };

// impede scroll enquanto o popover estiver ativo
select.addEventListener('click', () => handlePopover('ionPopoverWillDismiss'));
datetime.addEventListener('click', () => handlePopover('ionPickerWillDismiss'));

function handlePopover(eventType) {
  bodyEl.classList.add('backdrop-no-scroll');

  window.addEventListener(
    eventType,
    () => {
      bodyEl.classList.remove('backdrop-no-scroll');
    },
    { once: true }
  );
}
