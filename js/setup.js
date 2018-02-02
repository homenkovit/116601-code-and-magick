'use strict';

var setupWindow = document.querySelector('.setup');
var similarWizardBlock = setupWindow.querySelector('.setup-similar');
var similarWizardList = setupWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var FIRST_NAMES_ARRAY = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES_ARRAY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS_ARRAY = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS_ARRAY = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsAmount = 4;
var wizards = [];

var createWizard = function (firstNamesArray, secondNamesArray, coatColorsArray, eyesColorsArray) {
  var randomFirstNameIndex = Math.floor(Math.random() * firstNamesArray.length);
  var randomSecondNameIndex = Math.floor(Math.random() * secondNamesArray.length);
  var randomCoatColorIndex = Math.floor(Math.random() * coatColorsArray.length);
  var randomEyesColorIndex = Math.floor(Math.random() * eyesColorsArray.length);
  var wizardName = (firstNamesArray[randomFirstNameIndex] + ' ' + secondNamesArray[randomSecondNameIndex]);

  var wizard = {
    name: wizardName,
    coatColor: coatColorsArray[randomCoatColorIndex],
    eyesColor: eyesColorsArray[randomEyesColorIndex]
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
setupWindow.classList.remove('hidden');
