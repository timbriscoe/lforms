// Existing sample data from FHIR
// Not used
var sdcCAP =
{
  "resourceType": "Questionnaire",
  "id": "questionnaire-sdc-profile-example-cap",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: questionnaire-sdc-profile-example-cap</p><p><b>url</b>: <a href=\"http://hl7.org/fhir/Questionnaire/questionnaire-sdc-profile-example-cap\">http://hl7.org/fhir/Questionnaire/questionnaire-sdc-profile-example-cap</a></p><p><b>status</b>: published</p><p><b>title</b>: (Ask Richard)</p><blockquote><p><b>item</b></p><p><b>linkId</b>: 1</p><p><b>text</b>: MARGINS</p><p><b>type</b>: group</p><p><b>required</b>: true</p><h3>Items</h3><table class=\"grid\"><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>item</b></p><p><b>linkId</b>: 2</p><p><b>text</b>: ACCESSORY FINDINGS</p><p><b>type</b>: group</p><p><b>required</b>: true</p><h3>Items</h3><table class=\"grid\"><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>"
  },
  "url": "http://hl7.org/fhir/Questionnaire/questionnaire-sdc-profile-example-cap",
  "status": "published",
  "title": "(Ask Richard)",
  "item": [
    {
      "linkId": "1",
      "text": "MARGINS",
      "type": "group",
      "required": true,
      "item": [
        {
          "linkId": "1.1",
          "text": "Status of surgical margin involvement by tumor (observable entity)",
          "type": "choice",
          "required": true,
          "option": [
            {
              "valueCoding": {
                "code": "M1",
                "display": "Margins univolved by tumor"
              }
            },
            {
              "valueCoding": {
                "code": "M2",
                "display": "Margin(s) involved by tumor"
              }
            },
            {
              "valueCoding": {
                "code": "M3",
                "display": "Cannot be determined"
              }
            },
            {
              "valueCoding": {
                "code": "M4",
                "display": "Not applicable"
              }
            }
          ],
          "item": [
            {
              "linkId": "1.1.1",
              "type": "group",
              "enableWhen": [
                {
                  "question": "1.1",
                  "answerCoding": {
                    "code": "M1"
                  }
                }
              ],
              "required": true,
              "item": [
                {
                  "linkId": "1.1.1.1",
                  "text": "Distance from Closest Margin",
                  "type": "choice",
                  "option": [
                    {
                      "valueCoding": {
                        "code": "D1",
                        "display": "Specify (mm)"
                      }
                    },
                    {
                      "valueCoding": {
                        "code": "D2",
                        "display": "Cannot be assessed (explain)"
                      }
                    }
                  ],
                  "item": [
                    {
                      "extension": [
                        {
                          "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                          "valueDecimal": 0.01
                        },
                        {
                          "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                          "valueDecimal": 1000
                        },
                        {
                          "url": "http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces",
                          "valueInteger": 2
                        }
                      ],
                      "linkId": "1.1.1.1.1.1",
                      "text": "Specify (mm)",
                      "type": "decimal",
                      "required": true
                    },
                    {
                      "linkId": "1.1.1.1.2.1",
                      "text": "Cannot be assessed (explain)",
                      "type": "string",
                      "required": true
                    }
                  ]
                },
                {
                  "linkId": "1.1.1.2",
                  "text": "Specify Margin, if possible",
                  "type": "choice",
                  "option": [
                    {
                      "valueCoding": {
                        "code": "W1",
                        "display": "Specify margin"
                      }
                    },
                    {
                      "valueCoding": {
                        "code": "W2",
                        "display": "Cannot be determined (explain)"
                      }
                    }
                  ],
                  "item": [
                    {
                      "linkId": "1.1.1.2.1.1",
                      "text": "Specify margin",
                      "type": "string",
                      "required": true
                    },
                    {
                      "linkId": "1.1.1.2.2.1",
                      "text": "Cannot be determined (explain)",
                      "type": "string",
                      "required": true
                    }
                  ]
                }
              ]
            },
            {
              "linkId": "1.1.2.1",
              "text": "Specify Margin(s), if possible",
              "type": "choice",
              "required": true,
              "option": [
                {
                  "valueCoding": {
                    "code": "I1",
                    "display": "Specify margin(s)"
                  }
                },
                {
                  "valueCoding": {
                    "code": "I2",
                    "display": "Cannot be determined (explain)"
                  }
                }
              ],
              "item": [
                {
                  "linkId": "1.1.2.1.1.1",
                  "text": "Specify margin(s)",
                  "type": "string",
                  "required": true
                },
                {
                  "linkId": "1.1.2.1.2.1",
                  "text": "Cannot be determined (explain)",
                  "type": "string",
                  "required": true
                }
              ]
            },
            {
              "linkId": "1.1.3.1",
              "text": "Cannot be determined",
              "type": "string",
              "required": true
            },
            {
              "linkId": "1.1.4.1",
              "text": "Not Applicable",
              "type": "string",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "linkId": "2",
      "text": "ACCESSORY FINDINGS",
      "type": "group",
      "required": true,
      "item": [
        {
          "linkId": "2.1",
          "text": "Treatment Effect (applicable to carcinomas treated with neoadjuvant therapy)",
          "type": "choice",
          "option": [
            {
              "valueCoding": {
                "code": "E1",
                "display": "Not identified"
              }
            },
            {
              "valueCoding": {
                "code": "E2",
                "display": "Present (specify)"
              }
            },
            {
              "valueCoding": {
                "code": "E3",
                "display": "Indeterminate"
              }
            }
          ],
          "item": [
            {
              "linkId": "2.1.1.1",
              "text": "Not identified",
              "type": "string",
              "required": true
            },
            {
              "linkId": "2.1.2.1",
              "text": "Present (specify)",
              "type": "string",
              "required": true
            },
            {
              "linkId": "2.1.3.1",
              "text": "Indeterminate",
              "type": "string",
              "required": true
            }
          ]
        },
        {
          "linkId": "2.2",
          "text": "Tumor Description",
          "type": "choice",
          "repeats": true,
          "option": [
            {
              "valueCoding": {
                "code": "U1",
                "display": "Hemorrhagic"
              }
            },
            {
              "valueCoding": {
                "code": "U2",
                "display": "Necrotic"
              }
            },
            {
              "valueCoding": {
                "code": "U3",
                "display": "Invasion"
              }
            },
            {
              "valueCoding": {
                "code": "U4",
                "display": "Other (specify)"
              }
            }
          ],
          "item": [
            {
              "linkId": "2.2.1.1",
              "text": "??",
              "type": "choice",
              "repeats": true,
              "option": [
                {
                  "valueCoding": {
                    "code": "V1",
                    "display": "Capsule"
                  }
                },
                {
                  "valueCoding": {
                    "code": "V2",
                    "display": "Vessels"
                  }
                },
                {
                  "valueCoding": {
                    "code": "V3",
                    "display": "Extra-adrenal (specify)"
                  }
                }
              ],
              "item": [
                {
                  "linkId": "2.2.1.1.1.1",
                  "text": "Extra-adrenal (specify)",
                  "type": "string",
                  "required": true
                }
              ]
            },
            {
              "linkId": "2.2.2.1",
              "text": "Other (specify)",
              "type": "string",
              "required": true
            }
          ]
        }
      ]
    }
  ]
}