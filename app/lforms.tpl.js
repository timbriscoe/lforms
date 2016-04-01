angular.module('lformsWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cne-field.html',
    "<div ng-switch on=\"item.displayControl.answerLayout\">\n" +
    "  <!--list style-->\n" +
    "  <div ng-switch-when=\"list\">\n" +
    "    <label ng-repeat=\"answer in item.answers\">\n" +
    "      <input type=\"checkbox\" ng-if=\"item._multipleAnswers\" ng-click=\"toggleCheckbox(item, answer)\">\n" +
    "      <input type=\"radio\" ng-model=\"item.value\" ng-value=\"answer\" ng-if=\"!item._multipleAnswers\">\n" +
    "      {{answer.text}}\n" +
    "    </label>\n" +
    "  </div>\n" +
    "  <!--combo style-->\n" +
    "  <div ng-switch-when=\"combo\">\n" +
    "    <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "           ng-required=\"item._answerRequired\"\n" +
    "           ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "           ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "           id=\"{{item._elementId}}\">\n" +
    "  </div>\n" +
    "  <!--default is 'combo'-->\n" +
    "  <div ng-switch-default>\n" +
    "    <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "           ng-required=\"item._answerRequired\"\n" +
    "           ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "           ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "           id=\"{{item._elementId}}\">\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('cwe-field.html',
    "<div ng-switch on=\"item.displayControl.answerLayout\">\n" +
    "  <!--list style-->\n" +
    "  <div ng-switch-when=\"list\">\n" +
    "    <label ng-repeat=\"answer in item.answers\">\n" +
    "      <input type=\"checkbox\" ng-if=\"item._multipleAnswers\" ng-click=\"toggleCheckbox(item, answer)\">\n" +
    "      <input type=\"radio\" ng-model=\"item.value\" ng-value=\"answer\" ng-if=\"!item._multipleAnswers\">\n" +
    "      {{answer.text}}\n" +
    "    </label>\n" +
    "    <!--extra field, multiple answers-->\n" +
    "    <label ng-if=\"item._multipleAnswers\">\n" +
    "      <input type=\"checkbox\" ng-click=\"toggleCheckbox(item, {'code':item.valueOther,'text':item.valueOther})\">\n" +
    "      OTHER:\n" +
    "    </label>\n" +
    "    <label ng-if=\"item._multipleAnswers\"><input type=\"text\" ng-model=\"item.valueOther\"></label>\n" +
    "    <!--extra field, single answer-->\n" +
    "    <label ng-if=\"!item._multipleAnswers\">\n" +
    "      <input type=\"radio\" ng-model=\"item.value\" ng-value=\"{'code':item.valueOther,'text':item.valueOther}\">\n" +
    "      OTHER:\n" +
    "    </label>\n" +
    "    <!--extra field-->\n" +
    "    <label ng-if=\"!item._multipleAnswers\"><input type=\"text\" ng-model=\"item.valueOther\"></label>\n" +
    "  </div>\n" +
    "  <!--default is 'combo'-->\n" +
    "  <div ng-switch-default>\n" +
    "    <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "           ng-required=\"item._answerRequired\"\n" +
    "           ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "           ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "           id=\"{{item._elementId}}\">\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('form-header.html',
    "<div class=\"stopped\" ng-show=\"isFormDone()\"><img ng-src=\"{{::blankGifDataUrl}}\" class=\"stop-sign\"><span>This form is complete.</span></div>\n" +
    "<div class=\"row\" ng-if=\"!lfData.templateOptions.hideHeader\">\n" +
    "  <div class=\"col-md-3 col-xs-3\">\n" +
    "    <div ng-hide=\"lfData.templateOptions.hideCheckBoxes\" class=\"checkbox\">\n" +
    "      <label><input type=\"checkbox\" value=\"\" ng-model=\"lfData.templateOptions.showQuestionCode\">Display Question Code</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-3 col-xs-3\">\n" +
    "    <div ng-hide=\"lfData.templateOptions.hideCheckBoxes\" class=\"checkbox\">\n" +
    "      <label><input type=\"checkbox\" value=\"\" ng-model=\"lfData.templateOptions.showCodingInstruction\">Show Help/Description</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-3 col-xs-3\">\n" +
    "    <div ng-hide=\"lfData.templateOptions.hideCheckBoxes\" class=\"checkbox\">\n" +
    "      <label><input type=\"checkbox\" value=\"\" ng-model=\"lfData.templateOptions.tabOnInputFieldsOnly\">Keyboard Navigation On Input Fields</label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-3 col-xs-3 text-right\">\n" +
    "    <div class=\"text-info\" >Total # of Questions: {{getNumberOfQuestions()}}</div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('form-view-a.html',
    "<form class=\"lf-form\" novalidate autocomplete=\"false\" ng-keydown=\"handleNavigationKeyEventByTab($event)\">\n" +
    "  <div class=\"lf-form-view\" ng-if=\"lfData\">\n" +
    "    <div class=\"lf-form-header\" ng-include=\"'form-header.html'\"></div>\n" +
    "\n" +
    "    <h3 class=\"lf-form-title\">\n" +
    "      <span>{{lfData.name}}</span>\n" +
    "      <span class=\"item-code\" ng-if=\"lfData.templateOptions.showQuestionCode\">\n" +
    "        <a ng-if=\"lfData._linkToDef\" href=\"{{ lfData._linkToDef }}\" target=\"_blank\">[{{ lfData.code }}]</a>\n" +
    "        <span ng-if=\"!lfData._linkToDef\">[{{ lfData.code }}]</span>\n" +
    "      </span>\n" +
    "      <button ng-if=\"lfData.copyrightNotice\" id=\"copyright-{{lfData.code}}\" type=\"button\"\n" +
    "              class=\"copyright-button\" uib-popover=\"{{lfData.copyrightNotice}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    </h3>\n" +
    "    <div class=\"lf-form-body\">\n" +
    "      <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "        <colgroup ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <col ng-repeat=\"item in lfData.templateOptions.obrItems\" ng-style=\"{{getTableColumnStyle(item)}}\">\n" +
    "        </colgroup>\n" +
    "        <thead ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "        <tr>\n" +
    "          <th class=\"lf-form-table-header\"\n" +
    "              ng-repeat=\"item in lfData.templateOptions.obrItems\"><label\n" +
    "            for=\"{{item.questionCode}}\">{{item.question}}</label></th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr class=\"lf-form-table-row\" ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <td class=\"rowEditText hasTooltip\" ng-repeat=\"item in lfData.templateOptions.obrItems\"\n" +
    "              ng-switch on=\"item.dataType\">\n" +
    "            <ng-form name=\"innerForm\">\n" +
    "              <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                <input ng-switch-when=\"CWE\" name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\" placeholder=\"Select or type a value\"\n" +
    "                       ng-model=\"item.value\"\n" +
    "                       autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-when=\"DT\" name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" lf-date=\"dateOptions\"\n" +
    "                       placeholder=\"MM/DD/YYYY\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-default name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" placeholder=\"Type a value\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "              </div>\n" +
    "            </ng-form>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr class=\"lf-form-table-row lf-form-body\">\n" +
    "          <td colspan=\"5\">\n" +
    "            <div>\n" +
    "              <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "                <colgroup>\n" +
    "                  <col ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\" ng-style=\"{{getTableColumnStyle(obxCol)}}\">\n" +
    "                </colgroup>\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                  <th class=\"lf-form-table-header\" ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\"\n" +
    "                      id=\"th_{{obxCol.name}}\">{{obxCol.name}}</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody class=\"\">\n" +
    "                <!-- data row -->\n" +
    "                <tr ng-repeat-start=\"item in lfData.itemList\" ng-if=\"item.dataType!=='TITLE' && targetShown(item)\"\n" +
    "                    class=\"data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "                    ng-click=\"setActiveRow(item)\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span ng-show=\"item._questionRepeatable\" class=\"sn\">{{getRepeatingSN(item) }}</span>\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span class=\"item-code\" ng-show=\"lfData.templateOptions.showQuestionCode\">\n" +
    "                              <a ng-if=\"item._linkToDef\" href=\"{{ item._linkToDef }}\" target=\"_blank\">[{{ item.questionCode }}]</a>\n" +
    "                              <span ng-if=\"!item._linkToDef\">[{{ item.questionCode }}]</span>\n" +
    "                            </span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\">\n" +
    "                    <button ng-if=\"!hasOneRepeatingItem(item)\" class=\"float-button\"\n" +
    "                            ng-click=\"removeOneRepeatingItem(item)\" id=\"del-{{item._elementId}}\"\n" +
    "                            type=\"button\" title=\"Remove this '{{ item.question }}'\">-</button>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"item.dataType\" class=\"hasTooltip\">\n" +
    "                    <ng-form name=\"innerForm2\">\n" +
    "                      <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                        <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                        <span ng-switch-when=\"SECTION\" id=\"{{item._elementId}}\"> </span>\n" +
    "                        <input ng-switch-when=\"CNE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"CWE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"REAL\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"INT\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"DT\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" lf-date=\"dateOptions\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <textarea ng-switch-when=\"TX\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                                  ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                                  id=\"{{item._elementId}}\" ng-keyup=\"autoExpand($event)\" ng-blur=\"autoExpand($event)\" rows=\"1\">\n" +
    "                        </textarea>\n" +
    "                        <input ng-switch-default name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                      </div>\n" +
    "                    </ng-form>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"checkUnits(item)\">\n" +
    "                    <input class=\"units\" ng-switch-when=\"list\"\n" +
    "                           ng-model=\"item.unit\" autocomplete-lhc=\"item._unitAutocompOptions\"\n" +
    "                           placeholder=\"Select one\" aria-labelledby=\"th_Units\">\n" +
    "                    <span ng-switch-when=\"none\" > </span>\n" +
    "                  </td>\n" +
    "                  <!--<td>{{item.range}}</td>-->\n" +
    "                </tr>\n" +
    "                <!-- title row -->\n" +
    "                <tr ng-if=\"item.dataType==='TITLE' && targetShown(item)\"\n" +
    "                    class=\"title-row data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"name has-treeline\" colspan=\"6\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!-- extra question -->\n" +
    "                <tr ng-if=\"needExtra(item) && targetShown(item)\" ng-click=\"setActiveRow(item)\"\n" +
    "                    class=\"extra-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span>&nbsp;</span>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\"></td>\n" +
    "                  <td colspan=\"5\" class=\"extra-field\">\n" +
    "                    <input ng-model=\"item.valueOther\" placeholder=\"Please specify\" ng-readonly=\"item._readOnly\">\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!--a button row at the end of each repeating section-->\n" +
    "                <tr ng-repeat-end ng-if=\"item._repeatingSectionList && targetShown(item)\"\n" +
    "                    class=\"button-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">\n" +
    "                  <td colspan=\"6\" class=\"name has-treeline\" >\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label has-popover-warning\">\n" +
    "                              <button ng-repeat=\"repeatingItem in item._repeatingSectionList\" type=\"button\"\n" +
    "                                      class=\"float-button\" id=\"add-{{repeatingItem._elementId}}\"\n" +
    "                                      title=\"Add another '{{ repeatingItem.question }}'\"\n" +
    "                                      ng-click=\"addOneRepeatingItem(repeatingItem)\"\n" +
    "                                      ng-blur=\"hideUnusedItemWarning(repeatingItem)\"\n" +
    "                                      uib-popover='Please enter info in the blank \"{{ repeatingItem.question }}\".'\n" +
    "                                      popover-placement=\"top-left\" popover-title=\"Warning\"\n" +
    "                                      popover-trigger=\"none\"\n" +
    "                                      popover-is-open=\"repeatingItem._showUnusedItemWarning\">\n" +
    "                                Add another '{{repeatingItem.question}}'\n" +
    "                              </button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"onclick()\">Click to debug Panel Controller</button>\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"getFormData()\">Click to get form data</button>\n"
  );


  $templateCache.put('form-view.html',
    "<div ng-controller=\"LFormsCtrl\" ng-switch on=\"lfData.template\">\n" +
    "  <!--for backward compatibility-->\n" +
    "  <div ng-switch-when=\"form-view-a\">\n" +
    "    <div ng-include=\"'template-table.html'\"></div>\n" +
    "  </div>\n" +
    "  <!--for backward compatibility-->\n" +
    "  <div ng-switch-when=\"form-view-b\">\n" +
    "    <div ng-include=\"'template-table.html'\"></div>\n" +
    "  </div>\n" +
    "  <div ng-switch-when=\"table\">\n" +
    "    <div ng-include=\"'template-table.html'\"></div>\n" +
    "  </div>\n" +
    "  <div ng-switch-when=\"matrix\">\n" +
    "    <div ng-include=\"'template-matrix.html'\"></div>\n" +
    "  </div>\n" +
    "  <div ng-switch-when=\"list\">\n" +
    "    <div ng-include=\"'template-list.html'\"></div>\n" +
    "  </div>\n" +
    "  <div ng-switch-default>\n" +
    "    <div ng-include=\"'template-table.html'\"></div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('horizontal-table.html',
    "  <table class=\"t-treeline-field\" >\n" +
    "    <tr>\n" +
    "      <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "          class=\"t-treeline \"\n" +
    "          ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\" > &nbsp; </td>\n" +
    "      <td>\n" +
    "        <div class=\"name-label\">\n" +
    "          <div class=\"lf-form-horizontal-table-title\">\n" +
    "            {{item.question}}\n" +
    "          </div>\n" +
    "\n" +
    "          <table class=\"lf-form-table lf-form-horizontal-table\">\n" +
    "            <colgroup>\n" +
    "              <col class=\"button-col\">\n" +
    "              <col ng-repeat=\"col in lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders\"\n" +
    "                   ng-style=\"{{getTableColumnStyle(col)}}\">\n" +
    "            </colgroup>\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "              <th class=\"lf-form-table-header\"></th>\n" +
    "              <th ng-repeat=\"col in lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders\"\n" +
    "                  class=\"lf-form-table-header\"\n" +
    "                  id=\"{{col.id}}\">{{col.label}}</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody id=\"\" class=\"\">\n" +
    "            <tr ng-repeat=\"row in lfData._horizontalTableInfo[item._horizontalTableId].tableRows track by $index\"\n" +
    "                class=\"data-row has-ng-animate\">\n" +
    "              <td class=\"button-col\">\n" +
    "                <button ng-if=\"!hasOneRepeatingItem(item)\" type=\"button\"\n" +
    "                        id=\"del-{{row.header._elementId}}\"\n" +
    "                        class=\"float-button\" ng-click=\"removeOneRepeatingItem(row.header)\"\n" +
    "                        title=\"Remove this row of '{{ row.header.question }}'\">-</button>\n" +
    "              </td>\n" +
    "\n" +
    "              <td ng-repeat=\"cell in row.cells\"\n" +
    "                  class=\"hasTooltip\"\n" +
    "                  ng-switch on=\"cell.dataType\">\n" +
    "                <ng-form name=\"innerForm2\">\n" +
    "                  <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                    <span class=\"tooltipContent\">\n" +
    "                      <div class=\"errorMsg errorRequired\">\"{{ cell.question }}\" requires a value.</div>\n" +
    "                      <div class=\"errorMsg errorPattern\">\"{{ cell.question }}\" requires a text pattern.</div>\n" +
    "                      <div class=\"errorMsg errorMax\">\"{{ cell.question }}\" requires a maximum value of ??.</div>\n" +
    "                      <div class=\"errorMsg errorMin\">\"{{ cell.question }}\" requires a minimum value of ??.</div>\n" +
    "                      <div class=\"errorMsg errorMaxlength\">\"{{ cell.question }}\" requires a maximum length of ??.</div>\n" +
    "                      <div class=\"errorMsg errorMinlength\">\"{{ cell.question }}\" requires a minimum length of ??.</div>\n" +
    "                      <div class=\"errorMsg errorURL\">\"{{ cell.question }}\" requires a url.</div>\n" +
    "                      <div class=\"errorMsg errorEmail\">\"{{ cell.question }}\" requires an email.</div>\n" +
    "                      <div class=\"errorMsg errorNumber\">\"{{ cell.question }}\" requires a numeric value.</div>\n" +
    "                      <div class=\"errorMsg errorREAL\">\"{{ cell.question }}\" requires a decimal value.</div>\n" +
    "                      <div class=\"errorMsg errorINT\">\"{{ cell.question }}\" requires a integer value.</div>\n" +
    "                      <div class=\"errorMsg errorTM\">\"{{ cell.question }}\" requires a time value.</div>\n" +
    "                      <div class=\"errorMsg errorDT\">\"{{ cell.question }}\" requires a date value.</div>\n" +
    "                    </span>  <!-- validation error messages -->\n" +
    "                    <span ng-switch-when=\"\" > </span>\n" +
    "                    <input ng-switch-when=\"CNE\" name=\"{{cell.question + '_' + $id}}\"\n" +
    "                           ng-required=\"cell._answerRequired\" ng-model=\"cell.value\"\n" +
    "                           autocomplete-lhc=\"cell._autocompOptions\"\n" +
    "                           ng-readonly=\"cell._readOnly\" placeholder=\"{{cell._toolTip}}\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                    <input ng-switch-when=\"CWE\" name=\"{{cell.question + '_' + $id}}\"\n" +
    "                           ng-required=\"cell._answerRequired\" ng-model=\"cell.value\"\n" +
    "                           autocomplete-lhc=\"cell._autocompOptions\"\n" +
    "                           ng-readonly=\"cell._readOnly\" placeholder=\"{{cell._toolTip}}\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                    <input ng-switch-when=\"REAL\" name=\"{{cell.question}}\" type=\"number\"\n" +
    "                           ng-required=\"cell._answerRequired\" ng-model=\"cell.value\"\n" +
    "                           placeholder=\"{{cell._toolTip}}\" ng-readonly=\"cell._readOnly\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                    <input ng-switch-when=\"INT\" name=\"{{cell.question}}\" type=\"number\"\n" +
    "                           ng-required=\"cell._answerRequired\" ng-model=\"cell.value\"\n" +
    "                           placeholder=\"{{cell._toolTip}}\" ng-readonly=\"cell._readOnly\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                    <input ng-switch-when=\"DT\" name=\"{{cell.question}}\"\n" +
    "                           ng-required=\"cell._answerRequired\" ng-model=\"cell.value\"\n" +
    "                           lf-date=\"dateOptions\" placeholder=\"{{cell._toolTip}}\" ng-readonly=\"cell._readOnly\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                    <textarea ng-switch-when=\"TX\" name=\"{{cell.question}}\" ng-required=\"cell._answerRequired\"\n" +
    "                              ng-model=\"cell.value\" placeholder=\"{{cell._toolTip}}\" ng-readonly=\"cell._readOnly\"\n" +
    "                              id=\"{{cell._elementId}}\"\n" +
    "                              aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\"\n" +
    "                              ng-keyup=\"autoExpand($event)\" rows=\"1\"></textarea>\n" +
    "                    <input ng-switch-default name=\"{{cell.question}}\" ng-required=\"cell._answerRequired\"\n" +
    "                           ng-model=\"cell.value\" placeholder=\"{{cell._toolTip}}\" ng-readonly=\"cell._readOnly\"\n" +
    "                           id=\"{{cell._elementId}}\"\n" +
    "                           aria-labelledby=\"{{lfData._horizontalTableInfo[item._horizontalTableId].columnHeaders[$index].id}}\">\n" +
    "                  </div>\n" +
    "                </ng-form>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </table>\n"
  );


  $templateCache.put('item.html',
    "<!--question-->\n" +
    "<div class=\"name-label\">\n" +
    "  <span ng-show=\"item._questionRepeatable\" class=\"sn\">{{getRepeatingSN(item) }}</span>\n" +
    "  <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "    <span class=\"item-code\" ng-show=\"lfData.templateOptions.showQuestionCode\">\n" +
    "      <a ng-if=\"item._linkToDef\" href=\"{{ item._linkToDef }}\" target=\"_blank\">[{{ item.questionCode }}]</a>\n" +
    "      <span ng-if=\"!item._linkToDef\">[{{ item.questionCode }}]</span>\n" +
    "    </span>\n" +
    "    <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "      <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "      <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "      <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "              type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "      <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "              type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "    </span>\n" +
    "  <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "          class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "          popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "  <!--buttons-->\n" +
    "  <!--<div class=\"button-col\">-->\n" +
    "  <button ng-if=\"!hasOneRepeatingItem(item)\" class=\"float-button\"\n" +
    "          ng-click=\"removeOneRepeatingItem(item)\" id=\"del-{{item._elementId}}\"\n" +
    "          type=\"button\" title=\"Remove this '{{ item.question }}'\">-</button>\n" +
    "  <!--</div>-->\n" +
    "</div>\n" +
    "<ng-form name=\"innerForm2\" class=\"hasTooltip\">\n" +
    "  <div class=\"lf-form-item-data tooltipContainer\" ng-switch on=\"item.dataType\">\n" +
    "    <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "    <!--<span class=\"tooltipContent\" lf-validation></span>-->\n" +
    "    <span ng-switch-when=\"SECTION\" id=\"{{item._elementId}}\"> </span>\n" +
    "    <span ng-switch-when=\"TTILE\" id=\"{{item._elementId}}\"> </span>\n" +
    "    <div ng-switch-when=\"CNE\">\n" +
    "      <!--<div ng-include=\"'cne-field.html'\"></div>-->\n" +
    "      <lf-cne item=\"item\"></lf-cne>\n" +
    "    </div>\n" +
    "    <div ng-switch-when=\"CWE\">\n" +
    "      <!--<div ng-include=\"'cwe-field.html'\"></div>-->\n" +
    "      <lf-cwe item=\"item\"></lf-cwe>\n" +
    "    </div>\n" +
    "    <input ng-switch-when=\"REAL\" name=\"{{item.question}}\" type=\"number\"\n" +
    "           ng-required=\"item._answerRequired\"\n" +
    "           ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "           ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "    <input ng-switch-when=\"INT\" name=\"{{item.question}}\" type=\"number\"\n" +
    "           ng-required=\"item._answerRequired\"\n" +
    "           ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "           ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "    <input ng-switch-when=\"DT\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "           ng-model=\"item.value\" lf-date=\"dateOptions\" placeholder=\"{{item._toolTip}}\"\n" +
    "           ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "      <textarea ng-switch-when=\"TX\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                id=\"{{item._elementId}}\" ng-keyup=\"autoExpand($event)\" ng-blur=\"autoExpand($event)\" rows=\"1\">\n" +
    "      </textarea>\n" +
    "    <input ng-switch-default name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "           ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "           id=\"{{item._elementId}}\">\n" +
    "  </div>\n" +
    "</ng-form>\n" +
    "<div ng-switch on=\"checkUnits(item)\">\n" +
    "  <input class=\"units\" ng-switch-when=\"list\" type=\"text\"\n" +
    "         ng-model=\"item.unit\" autocomplete-lhc=\"item._unitAutocompOptions\"\n" +
    "         placeholder=\"Select one\" aria-labelledby=\"th_Units\">\n" +
    "  <span ng-switch-when=\"none\" > </span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"needExtra(item) && targetShown(item)\" ng-click=\"setActiveRow(item)\"\n" +
    "     class=\"extra-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "  <input ng-model=\"item.valueOther\" placeholder=\"Please specify\" ng-readonly=\"item._readOnly\">\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-if=\"item.items\" class=\"section\">\n" +
    "\n" +
    "  <!--<div ng-repeat=\"subItem in item.items\" ng-if=\"targetShown(subItem)\"-->\n" +
    "       <!--class=\"data-row has-ng-animate {{getRowClass(subItem)}} {{getSkipLogicClass(subItem)}} {{getActiveRowClass(subItem)}}\">-->\n" +
    "    <!--<lf-item item-data=\"subItem\"></lf-item>-->\n" +
    "  <!--</div>-->\n" +
    "  <div ng-repeat=\"item in item.items\" ng-if=\"targetShown(item)\"\n" +
    "       class=\"data-row has-ng-animate {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "    <lf-item item=\"item\"></lf-item>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--a button at the end of each repeating section-->\n" +
    "  <div ng-if=\"item._lastRepeatingItem && targetShown(item)\"\n" +
    "       class=\"button-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">\n" +
    "    <div class=\"name-label has-popover-warning\">\n" +
    "      <button type=\"button\"\n" +
    "              class=\"float-button\" id=\"add-{{item._elementId}}\"\n" +
    "              title=\"Add another '{{ item.question }}'\"\n" +
    "              ng-click=\"addOneRepeatingItem(item)\"\n" +
    "              ng-blur=\"hideUnusedItemWarning(item)\"\n" +
    "              uib-popover='Please enter info in the blank \"{{ item.question }}\".'\n" +
    "              popover-placement=\"top-left\" popover-title=\"Warning\"\n" +
    "              popover-trigger=\"none\"\n" +
    "              popover-is-open=\"item._showUnusedItemWarning\">\n" +
    "        Add another '{{item.question}}'\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('popover.html',
    "<div ng-bind-html=\"getTrustedCodingInstructions(item)\"></div>\n"
  );


  $templateCache.put('template-list.html',
    "<form class=\"lf-form template-list\" novalidate autocomplete=\"false\">\n" +
    "  <div class=\"lf-form-view\" ng-if=\"lfData\">\n" +
    "    <div class=\"lf-form-header\" ng-include=\"'form-header.html'\"></div>\n" +
    "\n" +
    "    <h3 class=\"lf-form-title\">\n" +
    "      <span>{{lfData.name}}</span>\n" +
    "      <span class=\"item-code\" ng-if=\"lfData.templateOptions.showQuestionCode\">\n" +
    "        <a ng-if=\"lfData._linkToDef\" href=\"{{ lfData._linkToDef }}\" target=\"_blank\">[{{ lfData.code }}]</a>\n" +
    "        <span ng-if=\"!lfData._linkToDef\">[{{ lfData.code }}]</span>\n" +
    "      </span>\n" +
    "      <button ng-if=\"lfData.copyrightNotice\" id=\"copyright-{{lfData.code}}\" type=\"button\"\n" +
    "              class=\"copyright-button\" uib-popover=\"{{lfData.copyrightNotice}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div class=\"lf-form-body\">\n" +
    "      <!-- data row -->\n" +
    "      <div ng-if=\"lfData.items\" class=\"section\">\n" +
    "        <div ng-repeat=\"item in lfData.items\" ng-if=\"targetShown(item)\"\n" +
    "             class=\"data-row has-ng-animate {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "          <lf-item item=\"item\"></lf-item>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"onclick()\">Click to debug Panel Controller</button>\n"
  );


  $templateCache.put('template-list.ng-include.html',
    "<script type=\"text/ng-template\" id=\"cne-template\">\n" +
    "  <div ng-switch on=\"item.displayControl.answerLayout\">\n" +
    "    <div ng-switch-when=\"list\">\n" +
    "      <label ng-repeat=\"answer in item.answers\">\n" +
    "        <input type=\"checkbox\" ng-if=\"item._multipleAnswers\" ng-click=\"toggleCheckbox(item, answer)\">\n" +
    "        <input type=\"radio\" ng-model=\"item.value\" ng-value=\"answer\" ng-if=\"!item._multipleAnswers\">\n" +
    "        {{answer.text}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-switch-when=\"combo\">\n" +
    "      <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "             ng-required=\"item._answerRequired\"\n" +
    "             ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "             ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "             id=\"{{item._elementId}}\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!--default is 'combo'-->\n" +
    "    <div ng-switch-default>\n" +
    "      <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "             ng-required=\"item._answerRequired\"\n" +
    "             ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "             ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "             id=\"{{item._elementId}}\">\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"cwe-template\">\n" +
    "  <div ng-switch on=\"item.displayControl.answerLayout\">\n" +
    "\n" +
    "    <div ng-switch-when=\"list\">\n" +
    "      <label ng-repeat=\"answer in item.answers\">\n" +
    "        <input type=\"checkbox\" ng-if=\"item._multipleAnswers\" ng-click=\"toggleCheckbox(item, answer)\">\n" +
    "        <input type=\"radio\" ng-model=\"item.value\" ng-value=\"answer\" ng-if=\"!item._multipleAnswers\">\n" +
    "        {{answer.text}}\n" +
    "      </label>\n" +
    "\n" +
    "      <label ng-if=\"item._multipleAnswers\">\n" +
    "        <input type=\"checkbox\" ng-click=\"toggleCheckbox(item, {'code':item.valueOther,'text':item.valueOther})\">\n" +
    "        OTHER:\n" +
    "      </label>\n" +
    "      <label ng-if=\"item._multipleAnswers\"><input type=\"text\" ng-model=\"item.valueOther\"></label>\n" +
    "\n" +
    "      <label ng-if=\"!item._multipleAnswers\">\n" +
    "        <input type=\"radio\" ng-model=\"item.value\" ng-value=\"{'code':item.valueOther,'text':item.valueOther}\">\n" +
    "        OTHER:\n" +
    "      </label>\n" +
    "      <label ng-if=\"!item._multipleAnswers\"><input type=\"text\" ng-model=\"item.valueOther\"></label>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--default is 'combo'-->\n" +
    "    <div ng-switch-default>\n" +
    "      <input name=\"{{item.question +'_'+ $id}}\" type=\"text\"\n" +
    "             ng-required=\"item._answerRequired\"\n" +
    "             ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "             ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "             id=\"{{item._elementId}}\">\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"item-template\">\n" +
    "  <!--question-->\n" +
    "  <div class=\"name-label\">\n" +
    "    <span ng-show=\"item._questionRepeatable\" class=\"sn\">{{getRepeatingSN(item) }}</span>\n" +
    "    <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "    <span class=\"item-code\" ng-show=\"lfData.templateOptions.showQuestionCode\">\n" +
    "      <a ng-if=\"item._linkToDef\" href=\"{{ item._linkToDef }}\" target=\"_blank\">[{{ item.questionCode }}]</a>\n" +
    "      <span ng-if=\"!item._linkToDef\">[{{ item.questionCode }}]</span>\n" +
    "    </span>\n" +
    "    <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "      <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "      <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "      <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "              type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "      <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "              type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "    </span>\n" +
    "    <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "            class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "            popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    <!--buttons-->\n" +
    "    <!--<div class=\"button-col\">-->\n" +
    "      <button ng-if=\"!hasOneRepeatingItem(item)\" class=\"float-button\"\n" +
    "              ng-click=\"removeOneRepeatingItem(item)\" id=\"del-{{item._elementId}}\"\n" +
    "              type=\"button\" title=\"Remove this '{{ item.question }}'\">-</button>\n" +
    "    <!--</div>-->\n" +
    "  </div>\n" +
    "  <ng-form name=\"innerForm2\" class=\"hasTooltip\">\n" +
    "    <div class=\"lf-form-item-data tooltipContainer\" ng-switch on=\"item.dataType\">\n" +
    "      <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "      <span ng-switch-when=\"SECTION\" id=\"{{item._elementId}}\"> </span>\n" +
    "      <span ng-switch-when=\"TTILE\" id=\"{{item._elementId}}\"> </span>\n" +
    "\n" +
    "      <!--<input ng-switch-when=\"CNE\" name=\"{{item.question +'_'+ $id}}\"-->\n" +
    "             <!--ng-required=\"item._answerRequired\"-->\n" +
    "             <!--ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"-->\n" +
    "             <!--ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"-->\n" +
    "             <!--id=\"{{item._elementId}}\">-->\n" +
    "      <!--<input ng-switch-when=\"CWE\" name=\"{{item.question +'_'+ $id}}\"-->\n" +
    "             <!--ng-required=\"item._answerRequired\"-->\n" +
    "             <!--ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"-->\n" +
    "             <!--ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"-->\n" +
    "             <!--id=\"{{item._elementId}}\">-->\n" +
    "      <div ng-switch-when=\"CNE\">\n" +
    "        <div ng-include=\"'cne-template'\"></div>\n" +
    "      </div>\n" +
    "      <div ng-switch-when=\"CWE\">\n" +
    "        <div ng-include=\"'cwe-template'\"></div>\n" +
    "      </div>\n" +
    "      <input ng-switch-when=\"REAL\" name=\"{{item.question}}\" type=\"number\"\n" +
    "             ng-required=\"item._answerRequired\"\n" +
    "             ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "             ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "      <input ng-switch-when=\"INT\" name=\"{{item.question}}\" type=\"number\"\n" +
    "             ng-required=\"item._answerRequired\"\n" +
    "             ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "             ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "      <input ng-switch-when=\"DT\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "             ng-model=\"item.value\" lf-date=\"dateOptions\" placeholder=\"{{item._toolTip}}\"\n" +
    "             ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "      <textarea ng-switch-when=\"TX\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                id=\"{{item._elementId}}\" ng-keyup=\"autoExpand($event)\" ng-blur=\"autoExpand($event)\" rows=\"1\">\n" +
    "      </textarea>\n" +
    "      <input ng-switch-default name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "             ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "             id=\"{{item._elementId}}\">\n" +
    "    </div>\n" +
    "  </ng-form>\n" +
    "  <div ng-switch on=\"checkUnits(item)\">\n" +
    "    <input class=\"units\" ng-switch-when=\"list\" type=\"text\"\n" +
    "           ng-model=\"item.unit\" autocomplete-lhc=\"item._unitAutocompOptions\"\n" +
    "           placeholder=\"Select one\" aria-labelledby=\"th_Units\">\n" +
    "    <span ng-switch-when=\"none\" > </span>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"needExtra(item) && targetShown(item)\" ng-click=\"setActiveRow(item)\"\n" +
    "       class=\"extra-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "    <input ng-model=\"item.valueOther\" placeholder=\"Please specify\" ng-readonly=\"item._readOnly\">\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div ng-if=\"item.items\" class=\"section\">\n" +
    "    <div ng-repeat=\"item in item.items\" ng-if=\"targetShown(item)\"\n" +
    "         class=\"data-row has-ng-animate {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "         ng-include=\"'item-template'\">\n" +
    "    </div>\n" +
    "    <!--a button at the end of each repeating section-->\n" +
    "    <div ng-if=\"item._lastRepeatingItem && targetShown(item)\"\n" +
    "         class=\"button-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">\n" +
    "      <div class=\"name-label has-popover-warning\">\n" +
    "        <button type=\"button\"\n" +
    "                class=\"float-button\" id=\"add-{{item._elementId}}\"\n" +
    "                title=\"Add another '{{ item.question }}'\"\n" +
    "                ng-click=\"addOneRepeatingItem(item)\"\n" +
    "                ng-blur=\"hideUnusedItemWarning(item)\"\n" +
    "                uib-popover='Please enter info in the blank \"{{ item.question }}\".'\n" +
    "                popover-placement=\"top-left\" popover-title=\"Warning\"\n" +
    "                popover-trigger=\"none\"\n" +
    "                popover-is-open=\"item._showUnusedItemWarning\">\n" +
    "          Add another '{{item.question}}'\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--&lt;!&ndash;a button row at the end of each repeating section&ndash;&gt;-->\n" +
    "  <!--<div ng-if=\"item._repeatingSectionList && targetShown(item)\"-->\n" +
    "       <!--class=\"button-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">-->\n" +
    "    <!--<div class=\"name-label has-popover-warning\">-->\n" +
    "      <!--<button ng-repeat=\"repeatingItem in item._repeatingSectionList\" type=\"button\"-->\n" +
    "              <!--class=\"float-button\" id=\"add-{{repeatingItem._elementId}}\"-->\n" +
    "              <!--title=\"Add another '{{ repeatingItem.question }}'\"-->\n" +
    "              <!--ng-click=\"addOneRepeatingItem(repeatingItem)\"-->\n" +
    "              <!--ng-blur=\"hideUnusedItemWarning(repeatingItem)\"-->\n" +
    "              <!--uib-popover='Please enter info in the blank \"{{ repeatingItem.question }}\".'-->\n" +
    "              <!--popover-placement=\"top-left\" popover-title=\"Warning\"-->\n" +
    "              <!--popover-trigger=\"none\"-->\n" +
    "              <!--popover-is-open=\"repeatingItem._showUnusedItemWarning\">-->\n" +
    "        <!--Add another '{{repeatingItem.question}}'-->\n" +
    "      <!--</button>-->\n" +
    "    <!--</div>-->\n" +
    "  <!--</div>-->\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "<form class=\"lf-form template-list\" novalidate autocomplete=\"false\">\n" +
    "  <div class=\"lf-form-view\" ng-if=\"lfData\">\n" +
    "    <div class=\"lf-form-header\" ng-include=\"'form-header.html'\"></div>\n" +
    "\n" +
    "    <h3 class=\"lf-form-title\">\n" +
    "      <span>{{lfData.name}}</span>\n" +
    "      <span class=\"item-code\" ng-if=\"lfData.templateOptions.showQuestionCode\">\n" +
    "        <a ng-if=\"lfData._linkToDef\" href=\"{{ lfData._linkToDef }}\" target=\"_blank\">[{{ lfData.code }}]</a>\n" +
    "        <span ng-if=\"!lfData._linkToDef\">[{{ lfData.code }}]</span>\n" +
    "      </span>\n" +
    "      <button ng-if=\"lfData.copyrightNotice\" id=\"copyright-{{lfData.code}}\" type=\"button\"\n" +
    "              class=\"copyright-button\" uib-popover=\"{{lfData.copyrightNotice}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    </h3>\n" +
    "\n" +
    "    <div class=\"lf-form-body\">\n" +
    "      <!-- data row -->\n" +
    "      <div ng-if=\"lfData.items\" class=\"section\">\n" +
    "        <div ng-repeat=\"item in lfData.items\" ng-if=\"targetShown(item)\"\n" +
    "             class=\"data-row has-ng-animate {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "             ng-include=\"'item-template'\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"onclick()\">Click to debug Panel Controller</button>\n"
  );


  $templateCache.put('template-matrix.html',
    "<form class=\"lf-form\" novalidate autocomplete=\"false\" ng-keydown=\"handleNavigationKeyEventByTab($event)\">\n" +
    "  <div class=\"lf-form-view\" ng-if=\"lfData\">\n" +
    "    <div class=\"lf-form-header\" ng-include=\"'form-header.html'\"></div>\n" +
    "\n" +
    "    <h3 class=\"lf-form-title\">\n" +
    "      <span>{{lfData.name}}</span>\n" +
    "      <span class=\"item-code\" ng-if=\"lfData.templateOptions.showQuestionCode\">\n" +
    "        <a ng-if=\"lfData._linkToDef\" href=\"{{ lfData._linkToDef }}\" target=\"_blank\">[{{ lfData.code }}]</a>\n" +
    "        <span ng-if=\"!lfData._linkToDef\">[{{ lfData.code }}]</span>\n" +
    "      </span>\n" +
    "      <button ng-if=\"lfData.copyrightNotice\" id=\"copyright-{{lfData.code}}\" type=\"button\"\n" +
    "              class=\"copyright-button\" uib-popover=\"{{lfData.copyrightNotice}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    </h3>\n" +
    "    <div class=\"lf-form-body\">\n" +
    "      <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "        <colgroup ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <col ng-repeat=\"item in lfData.templateOptions.obrItems\" ng-style=\"{{getTableColumnStyle(item)}}\">\n" +
    "        </colgroup>\n" +
    "        <thead ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "        <tr>\n" +
    "          <th class=\"lf-form-table-header\"\n" +
    "              ng-repeat=\"item in lfData.templateOptions.obrItems\"><label\n" +
    "            for=\"{{item.questionCode}}\">{{item.question}}</label></th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr class=\"lf-form-table-row\" ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <td class=\"rowEditText hasTooltip\" ng-repeat=\"item in lfData.templateOptions.obrItems\"\n" +
    "              ng-switch on=\"item.dataType\">\n" +
    "            <ng-form name=\"innerForm\">\n" +
    "              <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                <input ng-switch-when=\"CWE\" name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\" placeholder=\"Select or type a value\"\n" +
    "                       ng-model=\"item.value\"\n" +
    "                       autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-when=\"DT\" name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" lf-date=\"dateOptions\"\n" +
    "                       placeholder=\"MM/DD/YYYY\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-default name=\"{{item.question}}\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" placeholder=\"Type a value\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "              </div>\n" +
    "            </ng-form>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr class=\"lf-form-table-row lf-form-body\">\n" +
    "          <td colspan=\"5\">\n" +
    "            <div>\n" +
    "              <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "                <colgroup>\n" +
    "                  <col ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\" ng-style=\"{{getTableColumnStyle(obxCol)}}\">\n" +
    "                </colgroup>\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                  <th class=\"lf-form-table-header\" ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\"\n" +
    "                      id=\"th_{{obxCol.name}}\">{{obxCol.name}}</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody class=\"\">\n" +
    "                <!-- data row -->\n" +
    "                <tr ng-repeat-start=\"item in lfData.itemList\" ng-if=\"item.dataType!=='TITLE' && targetShown(item)\"\n" +
    "                    class=\"data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "                    ng-click=\"setActiveRow(item)\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span ng-show=\"item._questionRepeatable\" class=\"sn\">{{getRepeatingSN(item) }}</span>\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span class=\"item-code\" ng-show=\"lfData.templateOptions.showQuestionCode\">\n" +
    "                              <a ng-if=\"item._linkToDef\" href=\"{{ item._linkToDef }}\" target=\"_blank\">[{{ item.questionCode }}]</a>\n" +
    "                              <span ng-if=\"!item._linkToDef\">[{{ item.questionCode }}]</span>\n" +
    "                            </span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\">\n" +
    "                    <button ng-if=\"!hasOneRepeatingItem(item)\" class=\"float-button\"\n" +
    "                            ng-click=\"removeOneRepeatingItem(item)\" id=\"del-{{item._elementId}}\"\n" +
    "                            type=\"button\" title=\"Remove this '{{ item.question }}'\">-</button>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"item.dataType\" class=\"hasTooltip\">\n" +
    "                    <ng-form name=\"innerForm2\">\n" +
    "                      <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                        <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                        <span ng-switch-when=\"SECTION\" id=\"{{item._elementId}}\"> </span>\n" +
    "                        <input ng-switch-when=\"CNE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"CWE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"REAL\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"INT\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"DT\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" lf-date=\"dateOptions\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <textarea ng-switch-when=\"TX\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                                  ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                                  id=\"{{item._elementId}}\" ng-keyup=\"autoExpand($event)\" ng-blur=\"autoExpand($event)\" rows=\"1\">\n" +
    "                        </textarea>\n" +
    "                        <input ng-switch-default name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                      </div>\n" +
    "                    </ng-form>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"checkUnits(item)\">\n" +
    "                    <input class=\"units\" ng-switch-when=\"list\"\n" +
    "                           ng-model=\"item.unit\" autocomplete-lhc=\"item._unitAutocompOptions\"\n" +
    "                           placeholder=\"Select one\" aria-labelledby=\"th_Units\">\n" +
    "                    <span ng-switch-when=\"none\" > </span>\n" +
    "                  </td>\n" +
    "                  <!--<td>{{item.range}}</td>-->\n" +
    "                </tr>\n" +
    "                <!-- title row -->\n" +
    "                <tr ng-if=\"item.dataType==='TITLE' && targetShown(item)\"\n" +
    "                    class=\"title-row data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"name has-treeline\" colspan=\"6\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!-- extra question -->\n" +
    "                <tr ng-if=\"needExtra(item) && targetShown(item)\" ng-click=\"setActiveRow(item)\"\n" +
    "                    class=\"extra-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span>&nbsp;</span>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\"></td>\n" +
    "                  <td colspan=\"5\" class=\"extra-field\">\n" +
    "                    <input ng-model=\"item.valueOther\" placeholder=\"Please specify\" ng-readonly=\"item._readOnly\">\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!--a button row at the end of each repeating section-->\n" +
    "                <tr ng-repeat-end ng-if=\"item._repeatingSectionList && targetShown(item)\"\n" +
    "                    class=\"button-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">\n" +
    "                  <td colspan=\"6\" class=\"name has-treeline\" >\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label has-popover-warning\">\n" +
    "                              <button ng-repeat=\"repeatingItem in item._repeatingSectionList\" type=\"button\"\n" +
    "                                      class=\"float-button\" id=\"add-{{repeatingItem._elementId}}\"\n" +
    "                                      title=\"Add another '{{ repeatingItem.question }}'\"\n" +
    "                                      ng-click=\"addOneRepeatingItem(repeatingItem)\"\n" +
    "                                      ng-blur=\"hideUnusedItemWarning(repeatingItem)\"\n" +
    "                                      uib-popover='Please enter info in the blank \"{{ repeatingItem.question }}\".'\n" +
    "                                      popover-placement=\"top-left\" popover-title=\"Warning\"\n" +
    "                                      popover-trigger=\"none\"\n" +
    "                                      popover-is-open=\"repeatingItem._showUnusedItemWarning\">\n" +
    "                                Add another '{{repeatingItem.question}}'\n" +
    "                              </button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"onclick()\">Click to debug Panel Controller</button>\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"getFormData()\">Click to get form data</button>\n"
  );


  $templateCache.put('template-table.html',
    "<form class=\"lf-form\" novalidate autocomplete=\"false\" ng-keydown=\"handleNavigationKeyEventByTab($event)\">\n" +
    "  <div class=\"lf-form-view\" ng-if=\"lfData\" >\n" +
    "    <div ng-include=\"'form-header.html'\"></div>\n" +
    "\n" +
    "    <h3 class=\"lf-form-title\">\n" +
    "      <span>{{lfData.name}}</span>\n" +
    "      <span class=\"item-code\" ng-if=\"lfData.templateOptions.showQuestionCode\">\n" +
    "        <a ng-if=\"lfData._linkToDef\" href=\"{{ lfData._linkToDef }}\" target=\"_blank\">[{{ lfData.code }}]</a>\n" +
    "        <span ng-if=\"!lfData._linkToDef\">[{{ lfData.code }}]</span>\n" +
    "      </span>\n" +
    "      <button ng-if=\"lfData.copyrightNotice\" id=\"copyright-{{lfData.code}}\" type=\"button\"\n" +
    "              class=\"copyright-button\" uib-popover=\"{{lfData.copyrightNotice}}\"\n" +
    "              popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "    </h3>\n" +
    "    <div class=\"lf-form-body\">\n" +
    "      <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "        <colgroup ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <col ng-repeat=\"item in lfData.templateOptions.obrItems\" ng-style=\"{{getTableColumnStyle(item)}}\">\n" +
    "        </colgroup>\n" +
    "        <thead ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "        <tr>\n" +
    "          <th class=\"lf-form-table-header\"\n" +
    "              ng-repeat=\"item in lfData.templateOptions.obrItems\"><label\n" +
    "            for=\"{{item.questionCode}}\">{{item.question}}</label></th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr class=\"lf-form-table-row\" ng-if=\"lfData.templateOptions.obrHeader\">\n" +
    "          <td class=\"rowEditText hasTooltip\" ng-repeat=\"item in lfData.templateOptions.obrItems\"\n" +
    "              ng-switch on=\"item.dataType\">\n" +
    "            <ng-form name=\"innerForm\">\n" +
    "              <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                <input ng-switch-when=\"CWE\" name=\"{{item.question}}\" type=\"text\"\n" +
    "                       ng-required=\"item._answerRequired\" placeholder=\"Select or type a value\"\n" +
    "                       ng-model=\"item.value\"\n" +
    "                       autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-when=\"DT\" name=\"{{item.question}}\" type=\"text\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" lf-date=\"dateOptions\"\n" +
    "                       placeholder=\"MM/DD/YYYY\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "                <input ng-switch-default name=\"{{item.question}}\" type=\"text\"\n" +
    "                       ng-required=\"item._answerRequired\"\n" +
    "                       ng-model=\"item.value\" placeholder=\"Type a value\"\n" +
    "                       id=\"{{item.questionCode}}\">\n" +
    "              </div>\n" +
    "            </ng-form>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr class=\"lf-form-table-row lf-form-body\">\n" +
    "          <td colspan=\"5\">\n" +
    "            <div>\n" +
    "              <table cellspacing=\"0\" cellpadding=\"0\" class=\"lf-form-table\">\n" +
    "                <colgroup>\n" +
    "                  <col ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\" ng-style=\"{{getTableColumnStyle(obxCol)}}\">\n" +
    "                </colgroup>\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                  <th class=\"lf-form-table-header\" ng-repeat=\"obxCol in lfData.templateOptions.obxTableColumns\"\n" +
    "                      id=\"th_{{obxCol.name}}\">{{obxCol.name}}</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody class=\"\">\n" +
    "                <!-- data row -->\n" +
    "                <tr ng-repeat-start=\"item in lfData.itemList \"\n" +
    "                    ng-if=\"!item._inHorizontalTable && item.dataType!=='TITLE' && targetShown(item)\"\n" +
    "                    class=\"data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "                    ng-click=\"setActiveRow(item)\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\" ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span ng-show=\"item._questionRepeatable\" class=\"sn\">{{getRepeatingSN(item) }}</span>\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span class=\"item-code\" ng-show=\"lfData.templateOptions.showQuestionCode\">\n" +
    "                              <a ng-if=\"item._linkToDef\" href=\"{{ item._linkToDef }}\" target=\"_blank\">[{{ item.questionCode }}]</a>\n" +
    "                              <span ng-if=\"!item._linkToDef\">[{{ item.questionCode }}]</span>\n" +
    "                            </span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\">\n" +
    "                    <button ng-if=\"!hasOneRepeatingItem(item)\" class=\"float-button\" type=\"button\"\n" +
    "                            ng-click=\"removeOneRepeatingItem(item)\" id=\"del-{{item._elementId}}\"\n" +
    "                            title=\"Remove this '{{ item.question }}'\">-</button>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"item.dataType\" class=\"hasTooltip\">\n" +
    "                    <ng-form name=\"innerForm2\">\n" +
    "                      <div class=\"lf-form-item-data tooltipContainer\">\n" +
    "                        <span class=\"tooltipContent\" ng-include=\"'validation.html'\"></span>  <!-- validation error messages -->\n" +
    "                        <span ng-switch-when=\"SECTION\" id=\"{{item._elementId}}\"> </span>\n" +
    "                        <input ng-switch-when=\"CNE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"CWE\" name=\"{{item.question +'_'+ $id}}\"\n" +
    "                               ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "                               ng-model=\"item.value\" autocomplete-lhc=\"item._autocompOptions\"\n" +
    "                               ng-readonly=\"item._readOnly\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"REAL\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"INT\" name=\"{{item.question}}\" type=\"number\"\n" +
    "                               ng-required=\"item._answerRequired\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <input ng-switch-when=\"DT\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "                               ng-model=\"item.value\" lf-date=\"dateOptions\" placeholder=\"{{item._toolTip}}\"\n" +
    "                               ng-readonly=\"item._readOnly\" id=\"{{item._elementId}}\">\n" +
    "                        <textarea ng-switch-when=\"TX\" name=\"{{item.question}}\" ng-required=\"item._answerRequired\"\n" +
    "                                  ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                                  id=\"{{item._elementId}}\" ng-keyup=\"autoExpand($event)\" ng-blur=\"autoExpand($event)\" rows=\"1\">\n" +
    "                        </textarea>\n" +
    "                        <input ng-switch-default name=\"{{item.question}}\" ng-required=\"item._answerRequired\" type=\"text\"\n" +
    "                               ng-model=\"item.value\" placeholder=\"{{item._toolTip}}\" ng-readonly=\"item._readOnly\"\n" +
    "                               id=\"{{item._elementId}}\">\n" +
    "                      </div>\n" +
    "                    </ng-form>\n" +
    "                  </td>\n" +
    "                  <td ng-switch on=\"checkUnits(item)\">\n" +
    "                    <input class=\"units\" ng-switch-when=\"list\" type=\"text\"\n" +
    "                           ng-model=\"item.unit\" autocomplete-lhc=\"item._unitAutocompOptions\"\n" +
    "                           placeholder=\"Select one\" aria-labelledby=\"th_Units\">\n" +
    "                    <span ng-switch-when=\"none\" > </span>\n" +
    "                  </td>\n" +
    "                  <!--<td>{{item.range}}</td>-->\n" +
    "                </tr>\n" +
    "                <!-- horizontal table -->\n" +
    "                <tr ng-if=\"item._horizontalTableHeader && item.dataType!=='TITLE' && targetShown(item)\"\n" +
    "                    class=\"data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"horizontal has-treeline\" colspan=\"5\"\n" +
    "                      ng-include=\"'horizontal-table.html'\"></td>\n" +
    "                </tr>\n" +
    "                <!-- title row -->\n" +
    "                <tr ng-if=\"!item._inHorizontalTable && item.dataType==='TITLE' && targetShown(item)\"\n" +
    "                    class=\"title-row data-row has-ng-animate lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\">\n" +
    "                  <td class=\"name has-treeline\" colspan=\"6\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span><label for=\"{{item._elementId}}\">{{item.question}}</label></span>\n" +
    "                            <span ng-switch on=\"getCodingInstructionsDisplayType(item)\">\n" +
    "                              <span ng-switch-when=\"inline-html\" class=\"prompt\" ng-bind-html=\"getTrustedCodingInstructions(item)\"></span>\n" +
    "                              <span ng-switch-when=\"inline-escaped\" class=\"prompt\" ng-bind=\"item.codingInstructions\"></span>\n" +
    "                              <button ng-switch-when=\"popover-html\" class=\"help-button\" uib-popover-template=\"'popover.html'\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                              <button ng-switch-when=\"popover-escaped\" class=\"help-button\" uib-popover=\"{{item.codingInstructions}}\"\n" +
    "                                      popover-trigger=\"focus\" popover-placement=\"right\"  popover-title=\"Instruction\"\n" +
    "                                      type=\"button\" id=\"help-{{item._elementId}}\">?</button>\n" +
    "                            </span>\n" +
    "                            <button ng-if=\"item.copyrightNotice\" id=\"copyright-{{item._elementId}}\" type=\"button\"\n" +
    "                                    class=\"copyright-button\" uib-popover=\"{{item.copyrightNotice}}\"\n" +
    "                                    popover-trigger=\"focus\" popover-placement=\"right\" popover-title=\"Copyright\">&#9400;</button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!-- extra question -->\n" +
    "                <tr ng-if=\"!item._inHorizontalTable && needExtra(item) && targetShown(item)\"\n" +
    "                    class=\"extra-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}} {{getActiveRowClass(item)}}\"\n" +
    "                    ng-click=\"setActiveRow(item)\">\n" +
    "                  <td class=\"name has-treeline\">\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label\">\n" +
    "                            <span>&nbsp;</span>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                  <td class=\"button-col\"></td>\n" +
    "                  <td colspan=\"5\" class=\"extra-field\">\n" +
    "                    <input ng-model=\"item.valueOther\" placeholder=\"Please specify\" ng-readonly=\"item._readOnly\" type=\"text\">\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                <!--a button row at the end of each repeating section-->\n" +
    "                <tr ng-repeat-end ng-if=\"item._repeatingSectionList && targetShown(item)\"\n" +
    "                    class=\"button-row lf-form-table-row {{getRowClass(item)}} {{getSkipLogicClass(item)}}\">\n" +
    "                  <td colspan=\"6\" class=\"name has-treeline\" >\n" +
    "                    <table class=\"t-treeline-field\" >\n" +
    "                      <tr>\n" +
    "                        <td ng-repeat=\"lastStatus in item._lastSiblingList track by $index\"\n" +
    "                            class=\"t-treeline \" ng-class=\"getExtraRowTreeLevelClass($index, item._lastSiblingList)\"> &nbsp; </td>\n" +
    "                        <td>\n" +
    "                          <div class=\"name-label has-popover-warning\">\n" +
    "                            <button ng-repeat=\"repeatingItem in item._repeatingSectionList\" type=\"button\"\n" +
    "                                    class=\"float-button\" id=\"add-{{repeatingItem._elementId}}\"\n" +
    "                                    title=\"Add another '{{ repeatingItem.question }}'\"\n" +
    "                                    ng-click=\"addOneRepeatingItem(repeatingItem)\"\n" +
    "                                    ng-blur=\"hideUnusedItemWarning(repeatingItem)\"\n" +
    "                                    uib-popover='Please enter info in the blank \"{{ repeatingItem.question }}\".'\n" +
    "                                    popover-placement=\"top-left\" popover-title=\"Warning\"\n" +
    "                                    popover-trigger=\"none\"\n" +
    "                                    popover-is-open=\"repeatingItem._showUnusedItemWarning\">\n" +
    "                              Add another '{{repeatingItem.question}}'\n" +
    "                            </button>\n" +
    "                          </div>\n" +
    "                        </td>\n" +
    "                      </tr>\n" +
    "                    </table>\n" +
    "                  </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "<button type=\"button\" ng-if=\"debug\" ng-click=\"onclick()\">Click to debug Panel Controller</button>\n"
  );


  $templateCache.put('validation.html',
    "<div class=\"errorMsg errorRequired\">\"{{ item.question }}\" requires a value.</div>\n" +
    "<div class=\"errorMsg errorPattern\">\"{{ item.question }}\" requires a text pattern.</div>\n" +
    "<div class=\"errorMsg errorMax\">\"{{ item.question }}\" requires a maximum value of ??.</div>\n" +
    "<div class=\"errorMsg errorMin\">\"{{ item.question }}\" requires a minimum value of ??.</div>\n" +
    "<div class=\"errorMsg errorMaxlength\">\"{{ item.question }}\" requires a maximum length of ??.</div>\n" +
    "<div class=\"errorMsg errorMinlength\">\"{{ item.question }}\" requires a minimum length of ??.</div>\n" +
    "<div class=\"errorMsg errorURL\">\"{{ item.question }}\" requires a url.</div>\n" +
    "<div class=\"errorMsg errorEmail\">\"{{ item.question }}\" requires an email.</div>\n" +
    "<div class=\"errorMsg errorNumber\">\"{{ item.question }}\" requires a numeric value.</div>\n" +
    "<div class=\"errorMsg errorREAL\">\"{{ item.question }}\" requires a decimal value.</div>\n" +
    "<div class=\"errorMsg errorINT\">\"{{ item.question }}\" requires a integer value.</div>\n" +
    "<div class=\"errorMsg errorTM\">\"{{ item.question }}\" requires a time value.</div>\n" +
    "<div class=\"errorMsg errorDT\">\"{{ item.question }}\" requires a date value.</div>\n" +
    "<div class=\"errorMsg errorInvalidParse\">\"{{ item.question }}\" requires a selection from the list.</div>\n"
  );

}]);
