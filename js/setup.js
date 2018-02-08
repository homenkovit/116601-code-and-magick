'use strict';

var setupWindow = document.querySelector('.setup');
var openSetupWindowButton = document.querySelector('.setup-open');
var closeSetupWindowButton = setupWindow.querySelector('.setup-close');
var setupUserNameField = setupWindow.querySelector('.setup-user-name');
var setupWizard = setupWindow.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
var similarWizardBlock = setupWindow.querySelector('.setup-similar');
var similarWizardList = setupWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var FIRST_NAMES_ARRAY = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES_ARRAY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS_ARRAY = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS_ARRAY = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS_ARRAY = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardsAmount = 4;
var wizards = [];

var getRandomElementOfArray = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
};

var createWizard = function (firstNamesArray, secondNamesArray, coatColorsArray, eyesColorsArray) {
  var wizardName = (getRandomElementOfArray(firstNamesArray) + ' ' + getRandomElementOfArray(secondNamesArray));

  var wizard = {
    name: wizardName,
    coatColor: getRandomElementOfArray(coatColorsArray),
    eyesColor: getRandomElementOfArray(eyesColorsArray)
  };

  return wizard;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Create wizards array
for (var i = 0; i < wizardsAmount; i++) {
  wizards[i] = createWizard(FIRST_NAMES_ARRAY, SECOND_NAMES_ARRAY, COAT_COLORS_ARRAY, EYES_COLORS_ARRAY);
}

// Create wizard elements and render from template
var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarWizardList.appendChild(fragment);

similarWizardBlock.classList.remove('hidden');

var setupWindowEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetupWindowHandler();
  }
};
var openSetupWindowHandler = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', setupWindowEscHandler);
};
var closeSetupWindowHandler = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', setupWindowEscHandler);
};

openSetupWindowButton.addEventListener('click', openSetupWindowHandler);
closeSetupWindowButton.addEventListener('click', closeSetupWindowHandler);

openSetupWindowButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupWindowHandler();
  }
});
closeSetupWindowButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupWindowHandler();
  }
});

setupUserNameField.addEventListener('focus', function () {
  document.removeEventListener('keydown', setupWindowEscHandler);
});

setupWizardCoat.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomElementOfArray(COAT_COLORS_ARRAY);
});
setupWizardEyes.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandomElementOfArray(EYES_COLORS_ARRAY);
});
setupWizardFireball.addEventListener('click', function (evt) {
  evt.target.style.backgroundColor = getRandomElementOfArray(FIREBALL_COLORS_ARRAY);
});
