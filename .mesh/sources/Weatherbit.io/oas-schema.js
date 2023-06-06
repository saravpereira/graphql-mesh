module.exports = [
  {
    "openapi": "3.0.1",
    "info": {
      "title": "Usales API",
      "description": "Usales application"
    },
    "servers": [
      {
        "url": "/"
      }
    ],
    "security": [
      {
        "bearer-jwt": []
      }
    ],
    "paths": {
      "/usales/zoommeetingwhitelist/update": {
        "put": {
          "tags": [
            "zoom-meeting-whitelist-controller"
          ],
          "operationId": "updateZoomMeetingWhitelist",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/zoommeetingwhitelist/invoke-bot": {
        "put": {
          "tags": [
            "zoom-meeting-whitelist-controller"
          ],
          "operationId": "updateZoomMeetingInvokeBot",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ZoomMeetingWhitelistRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/preferences": {
        "put": {
          "tags": [
            "user-ui-preference-controller"
          ],
          "operationId": "createOrUpdatePreference",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserUiPreferenceRequestDto"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UserUiPreferenceResponseDto"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/media-clip-rel": {
        "put": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "updatePlaylistMediaClipRel",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlaylistMediaClipRelRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/media-clip-rel-bulk": {
        "put": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "addBulkPlaylistMediaClipRel",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PlaylistMediaClipRelRequestDTO"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/delete-media-clip-rel": {
        "put": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "deletePlaylistMediaClipRel",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/PlaylistMediaClipRelRequestDTO"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/tag": {
        "put": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "createOrUpdateKeywordTag",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/KeywordTagRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/KeywordTagResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/tag/update-status": {
        "put": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "updateStatusByIds",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "object"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrases": {
        "put": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "resetKeyPhrases",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/categ": {
        "get": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "getKeywordCategories",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "createOrUpdateKeywordCateg",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/KeywordCategRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/KeywordCategResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keymoments": {
        "put": {
          "tags": [
            "key-moment-controller"
          ],
          "operationId": "updateKeyMoment",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvKeyMomentRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvKeyMomentResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/events": {
        "put": {
          "tags": [
            "calendar-event-controller"
          ],
          "operationId": "updateCalendarEvent",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarEventRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CalendarEvent"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emleqs": {
        "get": {
          "tags": [
            "eml-eq-controller"
          ],
          "operationId": "getEmlEqByEmailObj",
          "parameters": [
            {
              "name": "emlObjId",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EmlEqResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "eml-eq-controller"
          ],
          "operationId": "updateEmlEq",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EmlEqRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmlEqResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "eml-eq-controller"
          ],
          "operationId": "createEmlEq",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EmlEqRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmlEqResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConversation",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConversationRequest"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "updateConversation",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConversationDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationRequest"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/meeting-attendee": {
        "put": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getAttendeeByMeetingTranscript",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "payload",
                    "transcript"
                  ],
                  "type": "object",
                  "properties": {
                    "transcript": {
                      "type": "string",
                      "format": "binary"
                    },
                    "payload": {
                      "$ref": "#/components/schemas/MeetingRequest"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "uniqueItems": true,
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/external-meeting": {
        "put": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "uploadExternalMeeting",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "required": [
                    "file",
                    "payload"
                  ],
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    },
                    "transcript": {
                      "type": "string",
                      "format": "binary"
                    },
                    "payload": {
                      "$ref": "#/components/schemas/MeetingRequest"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv-topic-episodes": {
        "put": {
          "tags": [
            "conv-topic-episode-controller"
          ],
          "operationId": "updateConvTopicEpisode",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvTopicEpisodeRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvTopicEpisodeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "conv-topic-episode-controller"
          ],
          "operationId": "createConvTopicEpisode",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvTopicEpisodeRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvTopicEpisodeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/configprops": {
        "get": {
          "tags": [
            "config-prop-controller"
          ],
          "operationId": "getAllCurrentSystemProp",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConfigPropResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "config-prop-controller"
          ],
          "operationId": "upsertConfigProp",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConfigPropRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConfigPropResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "config-prop-controller"
          ],
          "operationId": "getSystemProps",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConfigPropResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/companyprofile/keyword-categ-select": {
        "put": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "selectCompanyKeywordCategory",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/companyprofile/access-consent": {
        "get": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "getAccessConsent",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "boolean"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "updateAccessConsent",
          "parameters": [
            {
              "name": "consent",
              "in": "query",
              "required": true,
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/company-param": {
        "get": {
          "tags": [
            "company-param-controller"
          ],
          "operationId": "getCurrentCompanyProp",
          "parameters": [
            {
              "name": "prop",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "company-param-controller"
          ],
          "operationId": "upsertCompanyParam",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CompanyParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/alerts": {
        "get": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "getAlertByUser",
          "parameters": [
            {
              "name": "status",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AlertResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "put": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "updateAlert",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AlertRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AlertResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "createAlert",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AlertRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AlertResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/account-oppty-eq": {
        "put": {
          "tags": [
            "account-oppty-eq-controller"
          ],
          "operationId": "updateAccountOpptyEQ",
          "parameters": [
            {
              "name": "Pegasus-Job-Key",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "account-oppty-eq-controller"
          ],
          "operationId": "getDealEQOnRiskScale",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountOpptyEQResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/account-oppty-eq-1": {
        "put": {
          "tags": [
            "account-oppty-eq-controller"
          ],
          "operationId": "updateAccountOpptyEQ1",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/teams": {
        "put": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "updateTeamAccess",
          "parameters": [
            {
              "name": "enable",
              "in": "query",
              "required": true,
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/v1/transcript/search": {
        "post": {
          "tags": [
            "transcript-search-controller"
          ],
          "operationId": "search",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ESSearch"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/v1/transcript/populate": {
        "post": {
          "tags": [
            "transcript-search-controller"
          ],
          "operationId": "populate",
          "parameters": [
            {
              "name": "Pegasus-Job-Key",
              "in": "header",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ESPopulateRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/zoommeetingwhitelist/search": {
        "post": {
          "tags": [
            "zoom-meeting-whitelist-controller"
          ],
          "operationId": "search_1",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ZoomMeetingWhitelistDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getUsersCount",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "createOrUpdateUser",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/{managerId}/team": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "updateTeamMembersManagerDetails",
          "parameters": [
            {
              "name": "managerId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/search": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "searchUsers",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/proxy": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "updateUserProxy",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDelegateRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDelegateResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/meetings/sharedwithme": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getMeetingsSharedWithUser",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AdvSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/enable": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "operationId": "updateQDetails",
          "parameters": [
            {
              "name": "all",
              "in": "query",
              "required": false,
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/UserRequestDTO"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/assessments": {
        "post": {
          "tags": [
            "seller-assessment-controller"
          ],
          "operationId": "getAssessments",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/usales/timeline/{conv_id}": {
        "get": {
          "tags": [
            "conversation-timeline-controller"
          ],
          "operationId": "getTimeline",
          "parameters": [
            {
              "name": "conv_id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvTimeline"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "conversation-timeline-controller"
          ],
          "operationId": "convert",
          "parameters": [
            {
              "name": "conv_id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Timeline"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/timeline/generate/{conv_id}": {
        "post": {
          "tags": [
            "conversation-timeline-controller"
          ],
          "operationId": "generateTimeline",
          "parameters": [
            {
              "name": "conv_id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/teams/userstat": {
        "post": {
          "tags": [
            "teams-coaching-controller"
          ],
          "operationId": "getAllTeamsUserStats",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TeamsAccountOpptyUsersStat"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/teams/usersstat": {
        "post": {
          "tags": [
            "teams-coaching-controller"
          ],
          "operationId": "getAccountTeamsUsersStats",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TeamUsersStat"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/teams/oppty/userstat": {
        "post": {
          "tags": [
            "teams-coaching-controller"
          ],
          "operationId": "getOpptyUsersStat",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TeamOpptyUsersStats"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/teams/convostat": {
        "post": {
          "tags": [
            "teams-coaching-controller"
          ],
          "operationId": "getUsersConvoStat",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TeamUsersStat"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/teams/account/userstat": {
        "post": {
          "tags": [
            "teams-coaching-controller"
          ],
          "operationId": "getAccountUsersStat",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/TeamAccountUsersStat"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/shares/share-meeting-internal/{type}": {
        "post": {
          "tags": [
            "share-controller"
          ],
          "operationId": "shareMeetingInternalUser",
          "parameters": [
            {
              "name": "type",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ShareMeetingDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/shares/share-meeting-external": {
        "post": {
          "tags": [
            "share-controller"
          ],
          "operationId": "shareMeetingExternalUser",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ShareMeetingDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/shares/share-clip-external": {
        "post": {
          "tags": [
            "share-controller"
          ],
          "operationId": "shareClipExternalUser",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ShareClipDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/shares/playlist": {
        "post": {
          "tags": [
            "share-controller"
          ],
          "operationId": "sharePlaylist",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ShareMeetingDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/search/meetings": {
        "post": {
          "tags": [
            "adv-search-controller"
          ],
          "operationId": "searchMeetingsByAccountOrOppty",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AdvSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/preferences/search": {
        "post": {
          "tags": [
            "user-ui-preference-controller"
          ],
          "operationId": "searchPreference",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/UserUiPreferenceResponseDto"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/preferences/favorite-meeting": {
        "post": {
          "tags": [
            "user-ui-preference-controller"
          ],
          "operationId": "getFavoriteMeeting",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UserUiPreferenceResponseDto"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists": {
        "post": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "upsert",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlaylistRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PlaylistResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/stats": {
        "post": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylistStats",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/PlaylistStatsResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/search": {
        "post": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "search_2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PlaylistResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/search/count": {
        "post": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylistsCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlist/param": {
        "post": {
          "tags": [
            "playlist-param-controller"
          ],
          "operationId": "upsert_1",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlaylistParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/PlaylistParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlist/param/last-viewed": {
        "post": {
          "tags": [
            "playlist-param-controller"
          ],
          "operationId": "upsertLastViewed",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlaylistParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PlaylistParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{id}/details": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealDetailsByMode",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "mode",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string",
                "default": "daily"
              }
            },
            {
              "name": "tz",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSummaryDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "findDealDetailsByMode",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "mode",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string",
                "default": "daily"
              }
            },
            {
              "name": "tz",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSummaryDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{id}/activities": {
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealActivities",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DealActivitiesSummaryResponse"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/topics": {
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealTopics",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealTopicCoverageResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/teams": {
        "get": {
          "tags": [
            "oppty-team-controller"
          ],
          "operationId": "getOpptyTeam",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/OpptyTeamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "oppty-team-controller"
          ],
          "operationId": "createOrUpdateOpptyTeam",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OpptyTeamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyTeamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{opptyId}": {
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "createOrUpdateOppty",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OpptyRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getOpptys",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/OpptyDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "createOrUpdateOppty_1",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OpptyRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mindtickle/query": {
        "post": {
          "tags": [
            "mind-tickle-controller"
          ],
          "operationId": "postDataByUri",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MindTickleReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/meeting/custom-disclaimer": {
        "post": {
          "tags": [
            "company-param-controller"
          ],
          "operationId": "saveMessage",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "string"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip": {
        "post": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "upsert_2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MediaClipRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MediaClipResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip/stats": {
        "post": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "getMediaClipStats",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/MediaClipStatsResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip/search": {
        "post": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "search_3",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MediaClipResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip/search/count": {
        "post": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "getMediaClipCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaClip/param": {
        "post": {
          "tags": [
            "media-clip-param-controller"
          ],
          "operationId": "upsert_3",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MediaClipParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/MediaClipParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaClip/param/last-viewed": {
        "post": {
          "tags": [
            "media-clip-param-controller"
          ],
          "operationId": "upsertLastViewed_1",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MediaClipParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MediaClipParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/tag/search": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "searchKeywordTag",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeywordTagResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/tag/search/count": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "searchKeywordTagCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrase/trending": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "findKeyphraseTrendingTopicCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/components/schemas/KeyPhraseTrendingTopicResponseDTO"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrase/topic/count": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "keyPhras1eOccurences",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeyphraseTotalCountAttrDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrase/occurences": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "keyPhraseOccurences",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeyPhraseOccurenceResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrase/custom/trending": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "findCustomKeyphraseTrendingTopicCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "object",
                      "additionalProperties": {
                        "$ref": "#/components/schemas/KeyPhraseTrendingTopicResponseDTO"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/categ/search": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "searchKeywordCateg",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeywordCategResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/categ/search/notags": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "searchKeywordCategWithoutTags",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeywordCategResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/categ/search/count": {
        "post": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "searchKeywordCategCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keymoments/search": {
        "post": {
          "tags": [
            "key-moment-controller"
          ],
          "operationId": "search_4",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/KeyMomentResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/events/search": {
        "post": {
          "tags": [
            "calendar-event-controller"
          ],
          "operationId": "searchEvents",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CalenderEventSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/events/search/count": {
        "post": {
          "tags": [
            "calendar-event-controller"
          ],
          "operationId": "searchEventsCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/empathyandhesitationturns/getforuserandrange": {
        "post": {
          "tags": [
            "tonal-empathy-turns-controller"
          ],
          "operationId": "getEmpathyAndHesitationTurns",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EmpathyAndHesitationSearchCriterion"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmpathyAndHesitationTurnsReportForConvList"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/empathy-moment-recommendation": {
        "post": {
          "tags": [
            "empathy-moment-recommendation-controller"
          ],
          "operationId": "createOrUpdateRecommendation",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EmpathyMomentRecommendationDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmpathyMomentRecommendationDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/empathy-moment-recommendation/search": {
        "post": {
          "tags": [
            "empathy-moment-recommendation-controller"
          ],
          "operationId": "searchMoments",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmpathyChangeMomentResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "getEmails",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EmlResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails/{emlObjId}": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "getEmailByEmlObjId",
          "parameters": [
            {
              "name": "emlObjId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmlResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails/threadcount": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "threadCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ThreadCountResponse"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails/team-activity": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "searchTeamActivity",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TeamEmailActivityResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails/search": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "search_5",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EmlResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emails/search-summary": {
        "post": {
          "tags": [
            "email-controller"
          ],
          "operationId": "searchEmailSummary",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EmailSummaryResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/deals": {
        "post": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDeals",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/custweblinks": {
        "get": {
          "tags": [
            "cust-web-link-controller"
          ],
          "operationId": "getCustWebLinks",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CustWebLinkResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "cust-web-link-controller"
          ],
          "operationId": "createOrUpdate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustWebLinkRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CustWebLinkResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/custweblinks/search": {
        "post": {
          "tags": [
            "cust-web-link-controller"
          ],
          "operationId": "search_6",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CustWebLinkResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/keyword/search": {
        "post": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getMomentsHavingKeyword",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Criterion"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationKeywordSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{convId}/viewed": {
        "post": {
          "tags": [
            "conv-param-controller"
          ],
          "operationId": "upsertExternal",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/userstat": {
        "post": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConversationUserStat",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvUserStatDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/promise": {
        "post": {
          "tags": [
            "conv-promise-controller"
          ],
          "operationId": "upsert_4",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvPromiseRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvPromiseResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/promise/search": {
        "post": {
          "tags": [
            "conv-promise-controller"
          ],
          "operationId": "search_7",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvPromiseResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/param": {
        "post": {
          "tags": [
            "conv-param-controller"
          ],
          "operationId": "upsert_5",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/param/last-viewed": {
        "post": {
          "tags": [
            "conv-param-controller"
          ],
          "operationId": "upsertLastViewed_2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvParamRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvParamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/lastmeeting": {
        "post": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getLastMeeting",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConversationRequest"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/attendees": {
        "get": {
          "tags": [
            "conv-attendee-controller"
          ],
          "operationId": "getConvAttendeeTeam",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvAttendeeResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "conv-attendee-controller"
          ],
          "operationId": "createOrUpdateConvAttendee",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvAttendeeRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvAttendeeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv/attendees/{id}": {
        "post": {
          "tags": [
            "conv-attendee-controller"
          ],
          "operationId": "createOrUpdateConvAttendee_1",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvAttendeeRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvAttendeeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv-topic-episodes/search": {
        "post": {
          "tags": [
            "conv-topic-episode-controller"
          ],
          "operationId": "search_8",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvTopicEpisodeResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contacts/search": {
        "post": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "searchAccountAndContact",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountContactSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contacts/search/count": {
        "post": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "searchAccountAndContactCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contact/search": {
        "post": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "searchContact",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ContactSearchResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/companyprofile": {
        "get": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "getCompanyProfile",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CompanyProfileDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "upsertCompanyProfile",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyProfileDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CompanyProfileDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/companyprofile/businesscategs": {
        "get": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "getCompanyCategAndSubCateg",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeywordCategResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "company-profile-controller"
          ],
          "operationId": "upsertCompanyProfileWithKeywordCategRel",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyProfileKeywordCategRelDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CompanyProfileKeywordCategRelDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/company/assessments": {
        "post": {
          "tags": [
            "seller-assessment-controller"
          ],
          "operationId": "getAssessmentByCompany",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/company-params": {
        "get": {
          "tags": [
            "company-param-controller"
          ],
          "operationId": "getAllCompanyParams",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CompanyParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "company-param-controller"
          ],
          "operationId": "getCompanyParams",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CompanyParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/comments": {
        "post": {
          "tags": [
            "comment-controller"
          ],
          "operationId": "createOrUpdate_1",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CommentResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/comments/search": {
        "post": {
          "tags": [
            "comment-controller"
          ],
          "operationId": "search_9",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CommentResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/clips": {
        "post": {
          "tags": [
            "clip-controller"
          ],
          "operationId": "createOrUpdate_2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/VideoCutterRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/VideoSharingHistoryDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/bookmarks": {
        "post": {
          "tags": [
            "conv-bookmark-controller"
          ],
          "operationId": "createOrUpdate_3",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConvBookmarkRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvBookmarkResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/users/callmetrics": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getUserCallMetrics",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/users/calldetails": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getUserCallMetr",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/users-auth": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getUsersAuth",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/page-visits": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getTopPageVisitDetails",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PageVisitsDto"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/meetingstat": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getCompanyMeetingStats",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OverallMeetingStatsResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/meetings": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getMeetingListBasedOnType",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConversationRequest"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/invited-users": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getInvitedUsers",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/companystat": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getCompanyQUsage",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OverallQUsageResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/usage/active-users": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getAllActiveUsers",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/QUsageUserPageVisitDto"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/sellereq": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getSellerEQ",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSellerPerformanceResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/meeting/sentiments": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getMeetingSentiments",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/AnalyticsTopMeetingSentimentResponse"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/meeting/mostviewed": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getMostViewedMeeting",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MostViewedConvAttr"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/meeting/most-shared": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getMostSharedMeetings",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MostSharedConvAttr"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/keytopics/popular": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getMostPopularKeymoments",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/MostPopularKeymomentResponse"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/keyphrase/sentiment": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "companyKeyPhraseOccurrencesBySentiment",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/KeyPhraseOccurenceContentResponseDTO"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/keyphrase/occurrences": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "companyKeyPhraseOccurrences",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeyPhraseOccurenceContentResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/customer-pulse": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getCustomerPulse",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSellerPerformanceResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/customer-pulse/closed-deals": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getClosedDealDetails",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AnalyticsCustomerPulseDealResponse"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/contacts": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getContacts",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/AnalyticsContactResponse"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/company/deals": {
        "post": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getCompanyDeals",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/alerts/search": {
        "post": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "searchAlerts",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AlertResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/advSearch": {
        "post": {
          "tags": [
            "adv-search-controller"
          ],
          "operationId": "searchMeetings",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AdvSearchResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/advSearch/count": {
        "post": {
          "tags": [
            "adv-search-controller"
          ],
          "operationId": "searchMeetingsCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts": {
        "get": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getAccounts",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "account-controller"
          ],
          "operationId": "createOrUpdateAccount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/{id}/activities": {
        "post": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getConversationByAccount",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountActivityResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/search": {
        "post": {
          "tags": [
            "account-controller"
          ],
          "operationId": "searchAccounts",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/search/count": {
        "post": {
          "tags": [
            "account-controller"
          ],
          "operationId": "searchAccountsCount",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "integer",
                      "format": "int32"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/deals": {
        "post": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getDealCountByAccounts",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountDealRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountDealResponse"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/account-oppty-eq/company": {
        "post": {
          "tags": [
            "account-oppty-eq-controller"
          ],
          "operationId": "getCompanyDealsEQOnRiskScale",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdvSearchRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountOpptyEQResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/slack/sendmessage": {
        "post": {
          "tags": [
            "slack-controller"
          ],
          "operationId": "sendMessage",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MessageRequestDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cspviolations": {
        "post": {
          "tags": [
            "csp-violation-report-controller"
          ],
          "operationId": "saveReport",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CspViolationReq"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "/auth/users/details": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "revoke",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/social": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "getAuthUrl_4",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "getAuthUrl",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/revoke/{provider}": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "revokeAuth",
          "parameters": [
            {
              "name": "provider",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "revoke_1",
          "parameters": [
            {
              "name": "provider",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/outlook": {
        "get": {
          "tags": [
            "outlook-auth-controller"
          ],
          "operationId": "getAuthUrl_5",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "outlook-auth-controller"
          ],
          "operationId": "getAuthUrl_1",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/outlook/callback": {
        "post": {
          "tags": [
            "outlook-auth-controller"
          ],
          "operationId": "getAuthCodeAndGenerateToken",
          "parameters": [
            {
              "name": "code",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "id_token",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "state",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/logout": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "logout",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/login": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "authenticateUser",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/login2": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "authenticateUser2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/google": {
        "get": {
          "tags": [
            "google-auth-controller"
          ],
          "operationId": "getAuthUrl_6",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "post": {
          "tags": [
            "google-auth-controller"
          ],
          "operationId": "getAuthUrl_2",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/v1/transcript/populate/{convId}": {
        "get": {
          "tags": [
            "transcript-search-controller"
          ],
          "operationId": "populate_1",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/{oppty_stage}/eqscore": {
        "get": {
          "tags": [
            "oppty-eq-controller"
          ],
          "operationId": "getOpptyEqbyStage",
          "parameters": [
            {
              "name": "oppty_stage",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyEqbyStageResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/{usersId}/proxy": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getUserProxy",
          "parameters": [
            {
              "name": "usersId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDelegateResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/{receiverUserId}/comments": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getMentionedUserComments",
          "parameters": [
            {
              "name": "userId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CommentResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/team/{usersId}": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getTeamMembers",
          "parameters": [
            {
              "name": "usersId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/me": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getCurrentUserDetail",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/users/me/emails/count": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "operationId": "getUserEmailsCount",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/sys": {
        "get": {
          "tags": [
            "config-prop-controller"
          ],
          "operationId": "getCurrentSystemProp",
          "parameters": [
            {
              "name": "prop",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/sharedviewdata-name/{name}": {
        "get": {
          "tags": [
            "conv-shared-view-data-controller"
          ],
          "operationId": "getTimeline_1",
          "parameters": [
            {
              "name": "name",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvSharedViewData"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/sharedviewdata-conv/{conv_id}": {
        "get": {
          "tags": [
            "conv-shared-view-data-controller"
          ],
          "operationId": "getSharedViewData",
          "parameters": [
            {
              "name": "conv_id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvSharedViewData"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/reports/summary": {
        "get": {
          "tags": [
            "reports-controller"
          ],
          "operationId": "getSummary",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/SummaryReportDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/re/{code}": {
        "get": {
          "tags": [
            "short-url-controller"
          ],
          "operationId": "redirectUrl",
          "parameters": [
            {
              "name": "code",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/preferences/mine": {
        "get": {
          "tags": [
            "user-ui-preference-controller"
          ],
          "operationId": "getPreferences_1",
          "parameters": [
            {
              "name": "type",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/UserUiPreferenceResponseDto"
                      },
                      {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/UserUiPreferenceResponseDto"
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/{id}": {
        "get": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylistById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/PlaylistResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "delete": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylistsCount_1",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/sharedwithme": {
        "get": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getMediaClipPlaylistSharedWithUser",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/shared-members": {
        "get": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylistSharedMembers",
          "parameters": [
            {
              "name": "playlistId",
              "in": "query",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "history",
              "in": "query",
              "required": false,
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/SharedMemberDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlists/myplaylists": {
        "get": {
          "tags": [
            "playlist-controller"
          ],
          "operationId": "getPlaylists",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PlaylistResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/playlist/param/{playlistId}": {
        "get": {
          "tags": [
            "playlist-param-controller"
          ],
          "operationId": "getPlaylistParamsByPlaylistId_1",
          "parameters": [
            {
              "name": "playlistId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "name",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/PlaylistParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{opptyId}/promises": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getOpptyPromises",
          "parameters": [
            {
              "name": "opptyId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{id}": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getOpptyById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/{id}/trend": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealByIdTrend",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "type",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "key",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSummaryTrendResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/teams/{id}": {
        "get": {
          "tags": [
            "oppty-team-controller"
          ],
          "operationId": "getOpptyTeamById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyTeamResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/summary/{id}": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealSummaryById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealSummaryResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/oppty/keyMoments": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getOpptyKeyMoments",
          "parameters": [
            {
              "name": "opptyId",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "type",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "keyTag",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "granularity",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "period",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/OpptyDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mindtickle/querybyuri/{url}": {
        "get": {
          "tags": [
            "mind-tickle-controller"
          ],
          "operationId": "getDataByUri",
          "parameters": [
            {
              "name": "uri",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/mindtickle/coursesbyemail/{email}": {
        "get": {
          "tags": [
            "mind-tickle-controller"
          ],
          "operationId": "getCoursesForUserEmail",
          "parameters": [
            {
              "name": "email",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/usales/metrics/convs/{convId}/convostats": {
        "get": {
          "tags": [
            "conversation-metrics-controller"
          ],
          "operationId": "getConvostats",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvoStatResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip/{id}": {
        "get": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "getMediaClipById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/MediaClipResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "delete": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "getPlaylistsCount_2",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaclip/myclips": {
        "get": {
          "tags": [
            "media-clip-controller"
          ],
          "operationId": "getMyMediaClips",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MediaClipResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/mediaClip/param/{mediaClipId}": {
        "get": {
          "tags": [
            "media-clip-param-controller"
          ],
          "operationId": "getMediaClipParamsByMediaClipId_1",
          "parameters": [
            {
              "name": "mediaClipId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "name",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/MediaClipParamResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/keyphrase/fetch-expert/{tagId}": {
        "get": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "fetchKeyPhraseExpert",
          "parameters": [
            {
              "name": "tagId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeyPhraseExpertResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/categ/{category}": {
        "get": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "getKeywordCategories_1",
          "parameters": [
            {
              "name": "category",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/KeywordCategResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keymoments/{convKeyMomentId}/comments": {
        "get": {
          "tags": [
            "comment-controller"
          ],
          "operationId": "getCommentByConvKeyMomentId",
          "parameters": [
            {
              "name": "convKeyMomentId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CommentResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/events/{id}": {
        "get": {
          "tags": [
            "calendar-event-controller"
          ],
          "operationId": "getEventById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CalendarEvent"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/empathyandhesitationturns/get/conv": {
        "get": {
          "tags": [
            "tonal-empathy-turns-controller"
          ],
          "operationId": "getEmpathyTurns",
          "parameters": [
            {
              "name": "convId",
              "in": "query",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/EmpathyAndHesitationTurnsReport"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/emleqs/{id}": {
        "get": {
          "tags": [
            "eml-eq-controller"
          ],
          "operationId": "getEmlEqById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "delete": {
          "tags": [
            "eml-eq-controller"
          ],
          "operationId": "delete_1",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/diarization/{conv_id}": {
        "get": {
          "tags": [
            "conversation-timeline-controller"
          ],
          "operationId": "getDiarization",
          "parameters": [
            {
              "name": "conv_id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/Diarization"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/deals/{opptyId}/eqscore": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getDealEQScore",
          "parameters": [
            {
              "name": "opptyId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/deals/{opptyId}/convtrends": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getConvTrends",
          "parameters": [
            {
              "name": "opptyId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvEQResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/deals/{opptyId}/contacts/{contactId}/eqscore": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getEQbyContact",
          "parameters": [
            {
              "name": "contactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "opptyId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/deals/stages": {
        "get": {
          "tags": [
            "deal-controller"
          ],
          "operationId": "getDealStageList",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConversationById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationRequest"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/slide-first": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getSlideFirstByConversation",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvSlideFirstResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/preview": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConversationPreviewByConversation",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/participantsWithMetrics": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getAttendees",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationAttendeesResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/metrics": {
        "get": {
          "tags": [
            "conversation-metrics-controller"
          ],
          "operationId": "getAggrConvMetricsByParticipant",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "participantId",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AggrConvMetrics"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/keyPhrases": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getKeyMomentsForConvId",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/KeyPhraseResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{id}/details": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConversationDetail",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "type",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string",
                "default": "customer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{convId}/eqscore": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getEQbyConv",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvEQResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{convId}/contact_eqscore": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getEQbyConv_1",
          "parameters": [
            {
              "name": "contact",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/{convId}/comments": {
        "get": {
          "tags": [
            "comment-controller"
          ],
          "operationId": "getCommentByConvId",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CommentResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/summary/{id}": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getMeeting",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConversationSummaryResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/status": {
        "get": {
          "tags": [
            "conversation-controller"
          ],
          "operationId": "getConvStatus",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/convs/attendees/{id}": {
        "get": {
          "tags": [
            "conv-attendee-controller"
          ],
          "operationId": "getConvAttendeeTeamById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvAttendeeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv/metrics/{id}": {
        "get": {
          "tags": [
            "conversation-metrics-controller"
          ],
          "operationId": "getAggrConvMetrics",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AggrConvMetrics"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv/metrics/aggr/{id}": {
        "get": {
          "tags": [
            "conversation-metrics-controller"
          ],
          "operationId": "getConvMetrics",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvMetricsResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/conv-topic-episodes/{id}": {
        "get": {
          "tags": [
            "conv-topic-episode-controller"
          ],
          "operationId": "getConvTopicEpisodeById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvTopicEpisodeResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "delete": {
          "tags": [
            "conv-topic-episode-controller"
          ],
          "operationId": "delete_3",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contacts/{contact}/emails/count": {
        "get": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "getContactEmailsCount",
          "parameters": [
            {
              "name": "contactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "integer",
                    "format": "int32"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contact/summary/{contactId}": {
        "get": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "searchContact_1",
          "parameters": [
            {
              "name": "contactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ContactResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/contact/metrics/{contactId}": {
        "get": {
          "tags": [
            "contact-controller"
          ],
          "operationId": "getContactMetrics",
          "parameters": [
            {
              "name": "contactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "opptyId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "ganularity",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ContactMetricsResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/bookmarks/keymoments/{convKeyMomentId}": {
        "get": {
          "tags": [
            "conv-bookmark-controller"
          ],
          "operationId": "getBookmarksByConvKeyMomentId",
          "parameters": [
            {
              "name": "convKeyMomentId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvBookmarkResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/bookmarks/convs/{convId}": {
        "get": {
          "tags": [
            "conv-bookmark-controller"
          ],
          "operationId": "getBookmarksByConvId",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConvBookmarkResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/analytics/company/slide-first": {
        "get": {
          "tags": [
            "analytics-controller"
          ],
          "operationId": "getCompanySlideFirst",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CompanySlideFirstResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/alerts/{id}": {
        "get": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "getAlertById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AlertResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        },
        "delete": {
          "tags": [
            "alert-controller"
          ],
          "operationId": "delete_6",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/{id}": {
        "get": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getAccountById",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/{id}/team": {
        "get": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getAccountTeamByAccount",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/AccountTeamResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/{id}/oppty": {
        "get": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getAccountOpptyByAccount",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/OpptyDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/{accountId}/convtrends": {
        "get": {
          "tags": [
            "conv-eq-controller"
          ],
          "operationId": "getEQbyAccount",
          "parameters": [
            {
              "name": "accountId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/ConvEQResponseDTO"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/accounts/promises": {
        "get": {
          "tags": [
            "account-controller"
          ],
          "operationId": "getConvPromises",
          "parameters": [
            {
              "name": "userIds",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/AccountPromisesResponseDTO"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/slack/redirect": {
        "get": {
          "tags": [
            "slack-controller"
          ],
          "operationId": "redirectMethod",
          "parameters": [
            {
              "name": "code",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "state",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/slack/authurl": {
        "get": {
          "tags": [
            "slack-controller"
          ],
          "operationId": "getAuthUrl_3",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/token/revoke/refresh": {
        "get": {
          "tags": [
            "cq-token-controller"
          ],
          "operationId": "revokeRefreshToken",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/cq/token/revoke/access": {
        "get": {
          "tags": [
            "cq-token-controller"
          ],
          "operationId": "revokeAccessToken",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      },
      "/cq/token/refresh": {
        "get": {
          "tags": [
            "cq-token-controller"
          ],
          "operationId": "generateRefreshToken",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/cq/token/access": {
        "get": {
          "tags": [
            "cq-token-controller"
          ],
          "operationId": "generateAccessToken",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/cq/seller/{sellerEmailId}/{days}/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getSellerEQ_1",
          "parameters": [
            {
              "name": "sellerEmailId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "days",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TeamOpptyUsersStats"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/seller/{sellerEmailId}/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getSellerEQ_2",
          "parameters": [
            {
              "name": "sellerEmailId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TeamOpptyUsersStats"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/opportunity/{crmOpportunityId}/trend": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getTrendEQForOppty",
          "parameters": [
            {
              "name": "crmOpportunityId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "days",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TrendEQForOpptyResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/opportunity/{crmOpportunityId}/current": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getCurrentEQForOppty",
          "parameters": [
            {
              "name": "crmOpportunityId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "days",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/CurrentEQForOpptyResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/opportunity/{crmOpportunityId}/contact/{crmContactId}/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getContactEQForOppty",
          "parameters": [
            {
              "name": "crmOpportunityId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "crmContactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Contact"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/opportunity/{crmOpportunityId}/contact/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getContactsEQForOppty",
          "parameters": [
            {
              "name": "crmOpportunityId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Contact"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/manager/{managerEmailId}/{startMMddyyyy}/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getManagerEQ",
          "parameters": [
            {
              "name": "managerEmailId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "startMMddyyyy",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/TeamOpptyUsersStats"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/contact/{crmContactId}/eq": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getCurrentEQForContact",
          "parameters": [
            {
              "name": "crmContactId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/account/{crmAccountId}/trend": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getTrendEqForAccount",
          "parameters": [
            {
              "name": "crmAccountId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "days",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DealDetailResponse"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/cq/account/{crmAccountId}/current": {
        "get": {
          "tags": [
            "cq-resource-controller"
          ],
          "operationId": "getCurrentEqForAccount",
          "parameters": [
            {
              "name": "crmAccountId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "days",
              "in": "query",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "$ref": "#/components/schemas/DealDetailResponse"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/conv/mod/{convId}": {
        "get": {
          "tags": [
            "conversation-attribution-log-controller"
          ],
          "operationId": "getConvModLog",
          "parameters": [
            {
              "name": "convId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ConversationAttributionLogRsp"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/auth/google/callback": {
        "get": {
          "tags": [
            "google-auth-controller"
          ],
          "operationId": "getAuthCodeAndGenerateToken_1",
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/auth/accessToken": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "operationId": "accessTokenForAuthenticatedUser",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/zoommeetingwhitelist": {
        "delete": {
          "tags": [
            "zoom-meeting-whitelist-controller"
          ],
          "operationId": "delete",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/keyword/tags": {
        "delete": {
          "tags": [
            "keyword-controller"
          ],
          "operationId": "deleteTags",
          "parameters": [
            {
              "name": "ids",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/custweblinks/{id}": {
        "delete": {
          "tags": [
            "cust-web-link-controller"
          ],
          "operationId": "delete_2",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/comments/{id}": {
        "delete": {
          "tags": [
            "comment-controller"
          ],
          "operationId": "delete_4",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      },
      "/usales/bookmarks/{id}": {
        "delete": {
          "tags": [
            "conv-bookmark-controller"
          ],
          "operationId": "delete_5",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          },
          "security": [
            {
              "bearer-jwt": []
            }
          ]
        }
      }
    },
    "components": {
      "schemas": {
        "MeetingWhiteList": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "invokeBot": {
              "type": "boolean"
            }
          }
        },
        "ZoomMeetingWhitelistRequest": {
          "type": "object",
          "properties": {
            "meetingWhiteLists": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MeetingWhiteList"
              }
            }
          }
        },
        "UserUiPreferenceRequestDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "preferenceType": {
              "type": "string"
            },
            "savedJson": {
              "type": "string"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "uiPreferenceParamMap": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            }
          }
        },
        "AdvSearchResponse": {
          "type": "object",
          "properties": {
            "totalCount": {
              "type": "integer",
              "format": "int64"
            },
            "searchResults": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SearchResult"
              }
            }
          }
        },
        "CalenderEventEntity": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/Entity"
            }
          ]
        },
        "CompanyProfileDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "companyName": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "externalId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConversationEntity": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/Entity"
            }
          ]
        },
        "Entity": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SearchEntity"
              }
            }
          },
          "discriminator": {
            "propertyName": "type"
          }
        },
        "IdNameDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "KeyMomentEntity": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/Entity"
            }
          ]
        },
        "SearchEntity": {
          "type": "object"
        },
        "SearchResult": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string"
            },
            "resultCount": {
              "type": "integer",
              "format": "int32"
            },
            "entities": {
              "type": "array",
              "items": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/CalenderEventEntity"
                  },
                  {
                    "$ref": "#/components/schemas/ConversationEntity"
                  },
                  {
                    "$ref": "#/components/schemas/KeyMomentEntity"
                  }
                ]
              }
            }
          }
        },
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "zoomToken": {
              "type": "string"
            },
            "firstname": {
              "type": "string"
            },
            "lastname": {
              "type": "string"
            },
            "fullname": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "role": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/IdNameDTO"
              }
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "userType": {
              "type": "string"
            },
            "orgType": {
              "type": "string"
            },
            "expired": {
              "type": "boolean"
            },
            "externalIdToken": {
              "type": "array",
              "items": {
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              }
            },
            "isSsoLogin": {
              "type": "boolean"
            },
            "isEmailAuthorized": {
              "type": "boolean"
            },
            "isGmailAuthorized": {
              "type": "boolean"
            },
            "isOutlookAuthorized": {
              "type": "boolean"
            },
            "isCalendarAuthorized": {
              "type": "boolean"
            },
            "isGoogleCalendarAuthorized": {
              "type": "boolean"
            },
            "isOutlookCalendarAuthorized": {
              "type": "boolean"
            },
            "isSlackAuthorized": {
              "type": "boolean"
            },
            "isWebexAuthorized": {
              "type": "boolean"
            },
            "isZoomAuthorized": {
              "type": "boolean"
            },
            "isTeamAuthorized": {
              "type": "boolean"
            },
            "isBlueJeansAuthorized": {
              "type": "boolean"
            },
            "scopes": {
              "type": "string"
            },
            "invited": {
              "type": "boolean"
            },
            "firstTimeLogin": {
              "type": "boolean"
            },
            "companyProfileDTO": {
              "$ref": "#/components/schemas/CompanyProfileDTO"
            },
            "qEnabled": {
              "type": "boolean"
            },
            "invitedAt": {
              "type": "string",
              "format": "date-time"
            },
            "isPasswordSet": {
              "type": "boolean"
            },
            "isPasswordResetRequired": {
              "type": "boolean"
            },
            "status": {
              "type": "string"
            },
            "manager": {
              "$ref": "#/components/schemas/UserManagerDTO"
            },
            "source": {
              "type": "string"
            }
          }
        },
        "UserManagerDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "firstname": {
              "type": "string"
            },
            "lastname": {
              "type": "string"
            },
            "email": {
              "type": "string"
            }
          }
        },
        "UserUiPreferenceResponseDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "preferenceType": {
              "type": "string"
            },
            "savedJson": {
              "type": "string"
            },
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "uiPreferenceParamMap": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "favoriteMeetings": {
              "$ref": "#/components/schemas/AdvSearchResponse"
            }
          }
        },
        "PlaylistMediaClipRelRequestDTO": {
          "type": "object",
          "properties": {
            "mediaClipRelId": {
              "type": "integer",
              "format": "int64"
            },
            "playlistId": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "pos": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "KeywordTagRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagVal": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "keywordCateg": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "KeywordCategResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordCategName": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "keywordTags": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeywordTagResponseDTO"
              }
            },
            "source": {
              "type": "string"
            }
          }
        },
        "KeywordTagResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagVal": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "keywordCateg": {
              "$ref": "#/components/schemas/KeywordCategResponseDTO"
            }
          }
        },
        "KeywordCategRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "keyword_categ_name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvKeyMomentRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "conversation": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "keywordTagId1": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId2": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId3": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId4": {
              "type": "integer",
              "format": "int64"
            },
            "time": {
              "type": "string"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            },
            "kmStartTime": {
              "type": "string"
            },
            "kmEndTime": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "kmStartUtteranceId": {
              "type": "integer",
              "format": "int64"
            },
            "kmEndUtteranceId": {
              "type": "integer",
              "format": "int64"
            },
            "upVote": {
              "type": "integer",
              "format": "int64"
            },
            "downVote": {
              "type": "integer",
              "format": "int64"
            },
            "upVoteUser": {
              "type": "string"
            },
            "downVoteUser": {
              "type": "string"
            },
            "contentImages": {
              "type": "string"
            }
          }
        },
        "ConvKeyMomentResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "kmStartTime": {
              "type": "string"
            },
            "kmEndTime": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "line": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "keywordTagId1": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId2": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId3": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagId4": {
              "type": "integer",
              "format": "int64"
            },
            "startOffset": {
              "type": "integer",
              "format": "int64"
            },
            "endOffset": {
              "type": "integer",
              "format": "int64"
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "upVote": {
              "type": "integer",
              "format": "int64"
            },
            "downVote": {
              "type": "integer",
              "format": "int64"
            },
            "upVoteUser": {
              "type": "string"
            },
            "downVoteUser": {
              "type": "string"
            },
            "contentImages": {
              "type": "string"
            }
          }
        },
        "CalendarEventRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "botInstrFromCalendar": {
              "type": "boolean"
            },
            "calUid": {
              "type": "string"
            },
            "source": {
              "type": "string"
            }
          }
        },
        "Account": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          }
        },
        "Attendee": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "contactId": {
              "type": "integer",
              "format": "int64"
            },
            "jobTitle": {
              "type": "string"
            },
            "hostImage": {
              "type": "string"
            },
            "rank": {
              "type": "integer",
              "format": "int32"
            },
            "wonOver": {
              "type": "boolean"
            },
            "type": {
              "type": "string",
              "enum": [
                "CUSTOMER",
                "EMPLOYEE"
              ]
            },
            "score": {
              "$ref": "#/components/schemas/UniScore"
            },
            "metrics": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AttendeeMetric"
              }
            },
            "timeline": {
              "type": "array",
              "items": {
                "type": "array",
                "items": {
                  "type": "number",
                  "format": "double"
                }
              }
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "politeness": {
              "type": "number",
              "format": "double"
            },
            "speakingPace": {
              "type": "number",
              "format": "double"
            },
            "hesitation": {
              "type": "number",
              "format": "double"
            },
            "talkRatio": {
              "type": "number",
              "format": "double"
            },
            "description": {
              "type": "string"
            }
          }
        },
        "AttendeeMetric": {
          "type": "object",
          "properties": {
            "value": {
              "type": "number",
              "format": "double"
            },
            "time": {
              "type": "string"
            },
            "type": {
              "type": "string",
              "enum": [
                "POSITIVE",
                "NEGATIVE",
                "NEUTRAL"
              ]
            }
          }
        },
        "CalendarEvent": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "account": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "subjectLine": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "eventStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "eventEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "botInstrFromCalendar": {
              "type": "boolean"
            },
            "calUid": {
              "type": "boolean"
            },
            "oppty": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/IdNameDTO"
              }
            },
            "eventAttendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CalendarEventAttendee"
              }
            },
            "lastMeeting": {
              "$ref": "#/components/schemas/ConversationDetailResponse"
            },
            "opptyDetail": {
              "$ref": "#/components/schemas/DealSummaryDetailResponse"
            }
          }
        },
        "CalendarEventAttendee": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            }
          }
        },
        "Contact": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ContactActivity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "jobTitle": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "emails": {
              "type": "integer",
              "format": "int32"
            },
            "conversations": {
              "type": "integer",
              "format": "int32"
            },
            "lastActivityType": {
              "type": "string"
            },
            "lastActivityTypeId": {
              "type": "integer",
              "format": "int64"
            },
            "lastActivityDate": {
              "type": "string",
              "format": "date-time"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "conversation": {
              "$ref": "#/components/schemas/Conversation"
            }
          }
        },
        "ConvAccountDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          }
        },
        "ConvBookmarkResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "convID": {
              "$ref": "#/components/schemas/ConvDTO"
            },
            "keyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "createdBy": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "timeStart": {
              "type": "integer",
              "format": "int64"
            },
            "timeEnd": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "meetingTopic": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "confidential": {
              "type": "boolean"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConvNextAction": {
          "type": "object",
          "properties": {
            "rank": {
              "type": "integer",
              "format": "int32"
            },
            "description": {
              "type": "string"
            }
          }
        },
        "ConvPromiseResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "speaker": {
              "type": "string"
            },
            "speakerUsersId": {
              "type": "integer",
              "format": "int64"
            },
            "promiseText": {
              "type": "string"
            },
            "promiseStartTime": {
              "type": "string"
            },
            "promiseEndTime": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "classification": {
              "type": "string"
            },
            "promiseNextAction": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "actionStatus": {
              "type": "string"
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "confidential": {
              "type": "boolean"
            }
          }
        },
        "ConvTopicEpisodeResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "conversation": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "keytopicId1": {
              "type": "string"
            },
            "keytopicId2": {
              "type": "string"
            },
            "keytopicId3": {
              "type": "string"
            },
            "keytopicId4": {
              "type": "string"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount1": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount2": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount3": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount4": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "version": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedTopic1": {
              "type": "string"
            },
            "unsupervisedTopic2": {
              "type": "string"
            },
            "unsupervisedTopic3": {
              "type": "string"
            },
            "unsupervisedTopic4": {
              "type": "string"
            },
            "unsupervisedCount1": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount2": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount3": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount4": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConvUsersDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "fullname": {
              "type": "string"
            }
          }
        },
        "Conversation": {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationData"
              }
            }
          }
        },
        "ConversationData": {
          "type": "object",
          "properties": {
            "endDate": {
              "type": "string"
            },
            "emails": {
              "type": "integer",
              "format": "int32"
            },
            "conversations": {
              "type": "integer",
              "format": "int32"
            },
            "emailIds": {
              "type": "array",
              "items": {
                "uniqueItems": true,
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            },
            "convIds": {
              "type": "array",
              "items": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            }
          }
        },
        "ConversationDetailResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            },
            "freezeImage": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            },
            "accountID": {
              "$ref": "#/components/schemas/DealAccount"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "hostName": {
              "type": "string"
            },
            "meetingTopic": {
              "type": "string"
            },
            "opptyID": {
              "$ref": "#/components/schemas/DealOppty"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "nextActions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvNextAction"
              }
            },
            "confidential": {
              "type": "boolean"
            },
            "opportunities": {
              "$ref": "#/components/schemas/DealSummaryDetailResponse"
            },
            "topics": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvTopicEpisodeResponseDTO"
              }
            },
            "actionItems": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvPromiseResponseDTO"
              }
            },
            "shareCount": {
              "type": "integer",
              "format": "int64"
            },
            "recordingDate": {
              "type": "string",
              "format": "date-time"
            },
            "maskVideoLink": {
              "type": "string"
            },
            "galleryVideoLink": {
              "type": "string"
            },
            "keyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            },
            "bookmarks": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvBookmarkResponseDTO"
              }
            },
            "tonalProcDone": {
              "type": "boolean"
            },
            "textSentProcDone": {
              "type": "boolean"
            },
            "textKmProcDone": {
              "type": "boolean"
            },
            "dataFusionProcDone": {
              "type": "boolean"
            },
            "cvProcDone": {
              "type": "boolean"
            }
          }
        },
        "ConversationRequest": {
          "type": "object",
          "properties": {
            "entity": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "hostID": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "opptyID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "accountID": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "externalConvId": {
              "type": "string"
            },
            "meetingTopic": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "tonalProcDone": {
              "type": "boolean"
            },
            "textSentProcDone": {
              "type": "boolean"
            },
            "cvProcDone": {
              "type": "boolean"
            },
            "dataFusionProcDone": {
              "type": "boolean"
            },
            "textKmProcDone": {
              "type": "boolean"
            },
            "uuid": {
              "type": "string"
            },
            "lastChunk": {
              "type": "integer",
              "format": "int64"
            },
            "processedFlag": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "recordingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "KeyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            },
            "promises": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvPromiseResponseDTO"
              }
            },
            "thumbnail": {
              "type": "string"
            },
            "confidential": {
              "type": "boolean"
            },
            "hasComments": {
              "type": "boolean"
            },
            "hasClips": {
              "type": "boolean"
            },
            "isShared": {
              "type": "boolean"
            },
            "views": {
              "type": "integer",
              "format": "int64"
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            }
          }
        },
        "DealAccount": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          }
        },
        "DealOppty": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "closeDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "DealSummaryDetailResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "opptyStage": {
              "type": "string"
            },
            "contact": {
              "$ref": "#/components/schemas/Contact"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "contactId": {
              "type": "integer",
              "format": "int64"
            },
            "crmOpptyId": {
              "type": "string"
            },
            "opptyAmount": {
              "type": "integer",
              "format": "int32"
            },
            "opptyName": {
              "type": "integer",
              "format": "int32"
            },
            "opptyCreateDate": {
              "type": "string"
            },
            "opptyCloseDate": {
              "type": "string"
            },
            "opptySource": {
              "type": "string"
            },
            "opptyStatus": {
              "type": "string"
            },
            "opptyTeamId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "contacts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactActivity"
              }
            },
            "metrics": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "sellers": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserActivity"
              }
            },
            "conversations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            }
          }
        },
        "KeyMoment": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "keyCategory": {
              "type": "string",
              "enum": [
                "Customer Pain Points",
                "Customer Objections",
                "Budget",
                "Project Metrics of Success",
                "Competitors",
                "Product Features",
                "Pricing",
                "Decision Criteria"
              ]
            },
            "text": {
              "type": "string"
            },
            "highlightText": {
              "type": "string"
            },
            "time": {
              "type": "string"
            },
            "bookmarks": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvBookmarkResponseDTO"
              }
            },
            "criticality": {
              "type": "string"
            },
            "keyMomentScore": {
              "type": "string"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "startOffset": {
              "type": "integer",
              "format": "int64"
            },
            "endOffset": {
              "type": "integer",
              "format": "int64"
            },
            "kmStartOffset": {
              "type": "string"
            },
            "kmEndOffset": {
              "type": "string"
            },
            "contributedBy": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "upVote": {
              "type": "integer",
              "format": "int64"
            },
            "downVote": {
              "type": "integer",
              "format": "int64"
            },
            "keyMomentTexts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMomentText"
              }
            },
            "keyTags": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyTag"
              }
            },
            "contentImages": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "subtype": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "upVoteUser": {
              "type": "string"
            },
            "downVoteUser": {
              "type": "string"
            }
          }
        },
        "KeyMomentText": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "line": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "KeyTag": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "category": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            }
          }
        },
        "Score": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "trend": {
              "type": "string"
            }
          }
        },
        "Trends": {
          "type": "object",
          "properties": {
            "t1": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t2": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t3": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t4": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t5": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t6": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t7": {
              "$ref": "#/components/schemas/UniScore"
            },
            "t8": {
              "$ref": "#/components/schemas/UniScore"
            }
          }
        },
        "UniScore": {
          "type": "object",
          "properties": {
            "wonOver": {
              "type": "boolean"
            },
            "trends": {
              "$ref": "#/components/schemas/Trends"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            }
          }
        },
        "UserActivity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "jobTitle": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "emails": {
              "type": "integer",
              "format": "int32"
            },
            "lastActivityType": {
              "type": "string"
            },
            "lastActivityDate": {
              "type": "string",
              "format": "date-time"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "conversation": {
              "$ref": "#/components/schemas/Conversation"
            }
          }
        },
        "EmlEqRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "emlObjId": {
              "type": "integer",
              "format": "int64"
            },
            "senderName": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "AccountTeam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "users3": {
              "$ref": "#/components/schemas/Users"
            },
            "setOfAccountTeamParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountTeamParam"
              }
            },
            "listOfAccount": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Account"
              }
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "crmRelId": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "AccountTeamParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "members": {
              "type": "integer",
              "format": "int32"
            },
            "accountTeam": {
              "$ref": "#/components/schemas/AccountTeam"
            }
          }
        },
        "Alert": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "description": {
              "type": "string"
            },
            "archive": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "users": {
              "$ref": "#/components/schemas/Users"
            },
            "objId": {
              "type": "integer",
              "format": "int64"
            },
            "objSubId": {
              "type": "integer",
              "format": "int64"
            },
            "objType": {
              "type": "string"
            },
            "exp": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ContactMethod": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "phoneNumber": {
              "type": "string"
            },
            "emailAddress": {
              "type": "string"
            },
            "social": {
              "type": "string"
            },
            "preference": {
              "type": "string"
            },
            "setOfContactMethodParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactMethodParam"
              }
            },
            "contact": {
              "$ref": "#/components/schemas/Contact"
            }
          }
        },
        "ContactMethodParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "preference": {
              "type": "string"
            },
            "contactMethod": {
              "$ref": "#/components/schemas/ContactMethod"
            }
          }
        },
        "CustomerDomainWhiteList": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "users": {
              "$ref": "#/components/schemas/Users"
            },
            "setOfCustomerDomainWhiteListParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CustomerDomainWhiteListParam"
              }
            }
          }
        },
        "CustomerDomainWhiteListParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "domain": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "customerDomainWhiteList": {
              "$ref": "#/components/schemas/CustomerDomainWhiteList"
            }
          }
        },
        "EmlBody": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "body": {
              "type": "string"
            },
            "setOfEmlBodyParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlBodyParam"
              }
            },
            "emlObj": {
              "$ref": "#/components/schemas/EmlObj"
            }
          }
        },
        "EmlBodyParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "emlBody": {
              "$ref": "#/components/schemas/EmlBody"
            }
          }
        },
        "EmlEq": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "emlObj": {
              "$ref": "#/components/schemas/EmlObj"
            },
            "senderUser": {
              "type": "integer",
              "format": "int64"
            },
            "senderName": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "rawMetrics": {
              "type": "string"
            }
          }
        },
        "EmlEqResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "senderName": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "float"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "emlObj": {
              "$ref": "#/components/schemas/EmlObjResponseDTO"
            },
            "senderUser": {
              "$ref": "#/components/schemas/User"
            }
          }
        },
        "EmlMetadata": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "setOfEmlMetadataParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlMetadataParam"
              }
            },
            "emlObj": {
              "$ref": "#/components/schemas/EmlObj"
            }
          }
        },
        "EmlMetadataParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "emlMetadata": {
              "$ref": "#/components/schemas/EmlMetadata"
            }
          }
        },
        "EmlObj": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "to": {
              "type": "string"
            },
            "from": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "cc": {
              "type": "string"
            },
            "sendDatetime": {
              "type": "string",
              "format": "date-time"
            },
            "threadId": {
              "type": "string"
            },
            "listOfEmlBody": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlBody"
              }
            },
            "listOfEmlMetadata": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlMetadata"
              }
            },
            "conversation": {
              "$ref": "#/components/schemas/Conversation"
            },
            "setOfEmlObjParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlObjParam"
              }
            },
            "emlEqs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlEq"
              }
            }
          }
        },
        "EmlObjParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "emlObj": {
              "$ref": "#/components/schemas/EmlObj"
            }
          }
        },
        "EmlObjResponseDTO": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "info": {
              "type": "integer",
              "format": "int64"
            },
            "emlBody": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlBody"
              }
            },
            "emlMetadata": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlMetadata"
              }
            },
            "conversation": {
              "$ref": "#/components/schemas/ConvDTO"
            },
            "emlObjParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmlObjParam"
              }
            }
          }
        },
        "MeetingMetadata": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "meetingTopic": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "oppty": {
              "$ref": "#/components/schemas/Oppty"
            },
            "contact": {
              "$ref": "#/components/schemas/Contact"
            },
            "setOfMeetingMetadataParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MeetingMetadataParam"
              }
            }
          }
        },
        "MeetingMetadataParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "meetingMetadata": {
              "$ref": "#/components/schemas/MeetingMetadata"
            }
          }
        },
        "Oppty": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "crmOpptyId": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "amount": {
              "type": "number"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "opptyStatus": {
              "type": "string"
            },
            "opptyCreateDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyStage": {
              "type": "string"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "opptySource": {
              "type": "string"
            },
            "opptyTeam": {
              "$ref": "#/components/schemas/OpptyTeam"
            },
            "setOfOpptyParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyParam"
              }
            },
            "listOfConversation": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Conversation"
              }
            },
            "listOfMeetingMetadata": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MeetingMetadata"
              }
            },
            "listOfOpptyContactRel": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyContactRel"
              }
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            }
          }
        },
        "OpptyContactRel": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "contact": {
              "$ref": "#/components/schemas/Contact"
            },
            "oppty": {
              "$ref": "#/components/schemas/Oppty"
            },
            "crmRelId": {
              "type": "string"
            }
          }
        },
        "OpptyParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "product": {
              "type": "string"
            },
            "probability": {
              "type": "number"
            },
            "score": {
              "type": "number"
            },
            "timespent": {
              "type": "number"
            },
            "oppty": {
              "$ref": "#/components/schemas/Oppty"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            }
          }
        },
        "OpptyTeam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "users3": {
              "$ref": "#/components/schemas/Users"
            },
            "setOfOpptyTeamParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyTeamParam"
              }
            },
            "listOfOppty": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Oppty"
              }
            },
            "oppty": {
              "$ref": "#/components/schemas/Oppty"
            },
            "crmRelId": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "OpptyTeamParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "members": {
              "type": "integer",
              "format": "int32"
            },
            "opptyTeam": {
              "$ref": "#/components/schemas/OpptyTeam"
            }
          }
        },
        "UserUiPreference": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "preferenceType": {
              "type": "string"
            },
            "savedJson": {
              "type": "string"
            },
            "users": {
              "$ref": "#/components/schemas/Users"
            },
            "setOfUserUiPreferenceParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserUiPreferenceParam"
              }
            }
          }
        },
        "UserUiPreferenceParam": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "userUiPreference": {
              "$ref": "#/components/schemas/UserUiPreference"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            }
          }
        },
        "Users": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "userType": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "firstname": {
              "type": "string"
            },
            "lastname": {
              "type": "string"
            },
            "fullname": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "orgType": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "provider": {
              "type": "string"
            },
            "providerId": {
              "type": "string"
            },
            "zoomToken": {
              "type": "string"
            },
            "zoomHostId": {
              "type": "string"
            },
            "inviteSent": {
              "type": "string"
            },
            "invitedAt": {
              "type": "string",
              "format": "date-time"
            },
            "managerId": {
              "type": "integer",
              "format": "int64"
            },
            "crmUserId": {
              "type": "string"
            },
            "expired": {
              "type": "boolean"
            },
            "firstTimeLogin": {
              "type": "boolean"
            },
            "status": {
              "type": "string"
            },
            "listOfUserUiPreference3": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserUiPreference"
              }
            },
            "listOfOpptyTeam3": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyTeam"
              }
            },
            "listOfAccountTeam3": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountTeam"
              }
            },
            "listOfUserRoles": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UsersRoleRel"
              }
            },
            "customerDomainWhiteList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CustomerDomainWhiteList"
              }
            },
            "alertList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Alert"
              }
            },
            "qenabled": {
              "type": "boolean"
            }
          }
        },
        "UsersRoleRel": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "roleId": {
              "type": "integer",
              "format": "int64"
            },
            "users": {
              "$ref": "#/components/schemas/Users"
            }
          }
        },
        "ConversationDTO": {
          "type": "object",
          "properties": {
            "entity": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "externalConvId": {
              "type": "string"
            },
            "meetingTopic": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "recordingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "confidential": {
              "type": "boolean"
            }
          }
        },
        "AttendeeRequest": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "attendeeType": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        },
        "MeetingRequest": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "recordingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "attendeeList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AttendeeRequest"
              }
            },
            "doNotProcess": {
              "type": "boolean"
            }
          }
        },
        "ConvTopicEpisodeRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "conversation": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "keytopicId1": {
              "type": "string"
            },
            "keytopicId2": {
              "type": "string"
            },
            "keytopicId3": {
              "type": "string"
            },
            "keytopicId4": {
              "type": "string"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount1": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount2": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount3": {
              "type": "integer",
              "format": "int64"
            },
            "keytopicCount4": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "version": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedTopic1": {
              "type": "string"
            },
            "unsupervisedTopic2": {
              "type": "string"
            },
            "unsupervisedTopic3": {
              "type": "string"
            },
            "unsupervisedTopic4": {
              "type": "string"
            },
            "unsupervisedCount1": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount2": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount3": {
              "type": "integer",
              "format": "int64"
            },
            "unsupervisedCount4": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConfigPropRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "setId": {
              "type": "integer",
              "format": "int64"
            },
            "setName": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        },
        "ConfigPropResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "defaultValue": {
              "type": "string"
            },
            "defaultValueInt": {
              "type": "integer",
              "format": "int32"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "isVisible": {
              "type": "string"
            },
            "configPropset": {
              "$ref": "#/components/schemas/IdNameDTO"
            }
          }
        },
        "AdvSearchRequest": {
          "type": "object",
          "properties": {
            "searchString": {
              "type": "string"
            },
            "entity": {
              "type": "string"
            },
            "durationFlag": {
              "type": "string"
            },
            "criteria": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Criterion"
              }
            },
            "sort": {
              "$ref": "#/components/schemas/Sort"
            },
            "pagination": {
              "$ref": "#/components/schemas/Pagination"
            }
          }
        },
        "Criterion": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "operator": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "valueType": {
              "type": "string"
            }
          }
        },
        "Pagination": {
          "type": "object",
          "properties": {
            "page": {
              "type": "integer",
              "format": "int32"
            },
            "size": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "Sort": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "asc": {
              "type": "boolean"
            }
          }
        },
        "CompanyParamRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            }
          }
        },
        "CompanyParamResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            }
          }
        },
        "AlertRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "description": {
              "type": "string"
            },
            "archive": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "objId": {
              "type": "integer",
              "format": "int64"
            },
            "objSubId": {
              "type": "integer",
              "format": "int64"
            },
            "objType": {
              "type": "string"
            },
            "exp": {
              "type": "integer",
              "format": "int64"
            },
            "version": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "AlertResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "description": {
              "type": "string"
            },
            "archive": {
              "type": "boolean"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "objId": {
              "type": "integer",
              "format": "int64"
            },
            "objSubId": {
              "type": "integer",
              "format": "int64"
            },
            "objType": {
              "type": "string"
            },
            "exp": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "digitalSource": {
              "type": "string"
            }
          }
        },
        "ESSearch": {
          "type": "object",
          "properties": {
            "criteria": {
              "type": "string"
            }
          }
        },
        "ESPopulateRequest": {
          "type": "object",
          "properties": {
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "daysToProcess": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ZoomMeetingWhitelistDTO": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "invokeBot": {
              "type": "boolean"
            },
            "zoomMeetingId": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "zoomHostId": {
              "type": "string"
            },
            "zoomHostEmail": {
              "type": "string"
            },
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "authorizedForTeams": {
              "type": "boolean"
            },
            "authorizedForWebex": {
              "type": "boolean"
            }
          }
        },
        "UserRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "firstname": {
              "type": "string"
            },
            "lastname": {
              "type": "string"
            },
            "fullname": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "role": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "userType": {
              "type": "string"
            },
            "orgType": {
              "type": "string"
            },
            "expired": {
              "type": "boolean"
            },
            "zoomToken": {
              "type": "string"
            },
            "managerId": {
              "type": "integer",
              "format": "int64"
            },
            "firstTimeLogin": {
              "type": "boolean"
            },
            "externalIdToken": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "source": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "qenabled": {
              "type": "boolean"
            }
          }
        },
        "UserDelegateRequestDTO": {
          "type": "object",
          "properties": {
            "proxyOwner": {
              "type": "integer",
              "format": "int64"
            },
            "proxyUsers": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "UserDelegateResponseDTO": {
          "type": "object",
          "properties": {
            "proxyUsers": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            },
            "proxyOwners": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        },
        "Timeline": {
          "type": "object",
          "properties": {
            "timeline": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TimelineData"
              }
            }
          }
        },
        "TimelineData": {
          "type": "object",
          "properties": {
            "ts": {
              "type": "number",
              "format": "double"
            },
            "users": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        },
        "AccountResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "crmAccountId": {
              "type": "string"
            },
            "accountTeamID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            },
            "sticker": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "oppties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Oppty"
              }
            },
            "conversations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            },
            "contacts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactActivity"
              }
            },
            "standing": {
              "type": "string"
            }
          }
        },
        "CommentResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "keyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "convID": {
              "$ref": "#/components/schemas/ConvDTO"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "name": {
              "type": "string"
            },
            "comment": {
              "type": "string"
            },
            "mentions": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "updateTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "OpptyDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "crmOpptyId": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "amount": {
              "type": "number"
            },
            "opptyStatus": {
              "type": "string"
            },
            "opptyCreateDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyStage": {
              "type": "string"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "opptySource": {
              "type": "string"
            },
            "opptyTeamID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "accountID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "contact": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "metrics": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "conversation": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            }
          }
        },
        "TeamOpptyUsersStat": {
          "type": "object",
          "properties": {
            "oppty": {
              "$ref": "#/components/schemas/OpptyDTO"
            },
            "conversations": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            },
            "comments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CommentResponseDTO"
              }
            },
            "usersStats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamUsersStat"
              }
            }
          }
        },
        "TeamUsersStat": {
          "type": "object",
          "properties": {
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "customerSentiment": {
              "type": "number",
              "format": "double"
            },
            "customerEngagement": {
              "type": "number",
              "format": "double"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "politeness": {
              "type": "number",
              "format": "double"
            },
            "talkSpeed": {
              "type": "number",
              "format": "double"
            },
            "speakingRate": {
              "type": "number",
              "format": "double"
            },
            "talkRatio": {
              "type": "number",
              "format": "double"
            },
            "hesitation": {
              "type": "number",
              "format": "double"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            },
            "usersStats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UsersStat"
              }
            }
          }
        },
        "TeamsAccountOpptyUsersStat": {
          "type": "object",
          "properties": {
            "account": {
              "$ref": "#/components/schemas/AccountResponseDTO"
            },
            "deals": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamOpptyUsersStat"
              }
            }
          }
        },
        "UsersStat": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "convType": {
              "type": "string"
            },
            "convStatus": {
              "type": "string"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "politeness": {
              "type": "number",
              "format": "double"
            },
            "talkSpeed": {
              "type": "number",
              "format": "double"
            },
            "speakingRate": {
              "type": "number",
              "format": "double"
            },
            "talkRatio": {
              "type": "number",
              "format": "double"
            },
            "participantName": {
              "type": "string"
            },
            "convEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "convStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "hesitation": {
              "type": "number",
              "format": "double"
            },
            "accountID": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            }
          }
        },
        "IdealConvEQ": {
          "type": "object",
          "properties": {
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "talkRatio": {
              "type": "number",
              "format": "double"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "TeamOpptyUsersStats": {
          "type": "object",
          "properties": {
            "overAll": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamUsersStat"
              }
            },
            "unattributed": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamUnattributedUsersStat"
              }
            },
            "teamOpptyUsersStats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamOpptyUsersStat"
              }
            },
            "idealConvEQ": {
              "$ref": "#/components/schemas/IdealConvEQ"
            }
          }
        },
        "TeamUnattributedUsersStat": {
          "type": "object",
          "properties": {
            "user": {
              "$ref": "#/components/schemas/TeamUsersStat"
            },
            "conversations": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            },
            "comments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CommentResponseDTO"
              }
            }
          }
        },
        "TeamAccountUsersStat": {
          "type": "object",
          "properties": {
            "account": {
              "$ref": "#/components/schemas/AccountResponseDTO"
            },
            "conversations": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            },
            "comments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CommentResponseDTO"
              }
            },
            "usersStats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TeamUsersStat"
              }
            },
            "oppties": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyDTO"
              }
            }
          }
        },
        "ShareMeetingDTO": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "playlistId": {
              "type": "integer",
              "format": "int64"
            },
            "videoSharingHistoryId": {
              "type": "integer",
              "format": "int64"
            },
            "duration": {
              "type": "integer",
              "format": "int64"
            },
            "currtime": {
              "type": "integer",
              "format": "int64"
            },
            "password": {
              "type": "string"
            },
            "recipients": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "description": {
              "type": "string"
            },
            "permission": {
              "type": "string"
            }
          }
        },
        "ShareClipDTO": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "description": {
              "type": "string"
            },
            "recipients": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "duration": {
              "type": "integer",
              "format": "int64"
            },
            "currtime": {
              "type": "integer",
              "format": "int64"
            },
            "password": {
              "type": "string"
            },
            "clipStartTime": {
              "type": "integer",
              "format": "int32"
            },
            "clipLength": {
              "type": "integer",
              "format": "int32"
            },
            "clipTitle": {
              "type": "string"
            }
          }
        },
        "PlaylistRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "isPublic": {
              "type": "boolean"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvOpptyDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "MediaClipResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipRelId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "convID": {
              "$ref": "#/components/schemas/ConvDTO"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "accountID": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "meetingTopic": {
              "type": "string"
            },
            "transcript": {
              "type": "string"
            },
            "meetingTime": {
              "type": "string",
              "format": "date-time"
            },
            "comments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CommentResponseDTO"
              }
            },
            "keytags": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeywordTagResponseDTO"
              }
            },
            "position": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "thumbnail": {
              "type": "string"
            },
            "opptyName": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "userID": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "opptyID": {
              "$ref": "#/components/schemas/ConvOpptyDTO"
            },
            "usersViewed": {
              "type": "string"
            },
            "keyMoment": {
              "$ref": "#/components/schemas/ConvKeyMomentResponseDTO"
            },
            "shared": {
              "type": "integer",
              "format": "int64"
            },
            "views": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "PlaylistResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "userID": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "isPublic": {
              "type": "boolean"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "clips": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MediaClipResponseDTO"
              }
            },
            "permission": {
              "type": "string"
            },
            "shared": {
              "type": "integer",
              "format": "int64"
            },
            "views": {
              "type": "integer",
              "format": "int64"
            },
            "usersViewed": {
              "type": "string"
            }
          }
        },
        "PlaylistStatsAttr": {
          "type": "object",
          "properties": {
            "fullName": {
              "type": "string"
            },
            "views": {
              "type": "integer",
              "format": "int64"
            },
            "playlistId": {
              "type": "integer",
              "format": "int64"
            },
            "description": {
              "type": "string"
            },
            "shared": {
              "type": "integer",
              "format": "int64"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "title": {
              "type": "string"
            }
          }
        },
        "PlaylistStatsResponseDTO": {
          "type": "object",
          "properties": {
            "createdCount": {
              "type": "integer",
              "format": "int64"
            },
            "stats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PlaylistStatsAttr"
              }
            }
          }
        },
        "PlaylistParamRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "playlistId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "PlaylistParamResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "playlistId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "DealActivitiesSummaryResponse": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "activityDate": {
              "type": "string",
              "format": "date-time"
            },
            "type": {
              "type": "string"
            },
            "attendees": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "attendeesName": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ConvTopicsResponse": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "startDate": {
              "type": "string"
            },
            "endDate": {
              "type": "string"
            },
            "hostedBy": {
              "type": "string"
            },
            "topic": {
              "type": "string"
            },
            "totalDuration": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "DealSummaryResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "opptyStage": {
              "type": "string"
            },
            "contact": {
              "$ref": "#/components/schemas/Contact"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "contactId": {
              "type": "integer",
              "format": "int64"
            },
            "crmOpptyId": {
              "type": "string"
            },
            "opptyAmount": {
              "type": "integer",
              "format": "int32"
            },
            "opptyName": {
              "type": "integer",
              "format": "int32"
            },
            "opptyCreateDate": {
              "type": "string"
            },
            "opptyCloseDate": {
              "type": "string"
            },
            "opptySource": {
              "type": "string"
            },
            "opptyStatus": {
              "type": "string"
            },
            "opptyTeamId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "topicCoverageStatus": {
              "type": "string"
            },
            "accountUrl": {
              "type": "string"
            }
          }
        },
        "DealTopicCoverageResponse": {
          "type": "object",
          "properties": {
            "oppty": {
              "$ref": "#/components/schemas/DealSummaryResponse"
            },
            "suggestions": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "topics": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DealTopicData"
              }
            }
          }
        },
        "DealTopicData": {
          "type": "object",
          "properties": {
            "topic": {
              "type": "string"
            },
            "currentDealTopicCoverageValue": {
              "type": "number",
              "format": "double"
            },
            "idealDealStageWiningValue": {
              "type": "number",
              "format": "double"
            },
            "idealDealWinningValue": {
              "type": "number",
              "format": "double"
            },
            "unit": {
              "type": "string"
            },
            "currentDealTopicCoveragePercentage": {
              "type": "number",
              "format": "double"
            },
            "idealDealStageWiningPercentage": {
              "type": "number",
              "format": "double"
            },
            "idealDealWinningPercentage": {
              "type": "number",
              "format": "double"
            },
            "conversations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvTopicsResponse"
              }
            }
          }
        },
        "OpptyTeamRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "usersId": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "OpptyTeamResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "usersId": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "OpptyRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "crmOpptyId": {
              "type": "string"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "amount": {
              "type": "number"
            },
            "opptyStatus": {
              "type": "string"
            },
            "opptyCreateDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "opptyStage": {
              "type": "string"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "opptySource": {
              "type": "string"
            },
            "opptyTeam": {
              "type": "integer",
              "format": "int64"
            },
            "account": {
              "type": "integer",
              "format": "int64"
            },
            "contact": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            }
          }
        },
        "MindTickleReq": {
          "type": "object",
          "properties": {
            "uri": {
              "type": "string"
            },
            "filter": {
              "type": "string"
            },
            "format": {
              "type": "string"
            }
          }
        },
        "MediaClipRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "convKeymomentId": {
              "type": "integer",
              "format": "int64"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "transcript": {
              "type": "string"
            }
          }
        },
        "MediaClipStatsAttr": {
          "type": "object",
          "properties": {
            "views": {
              "type": "integer",
              "format": "int32"
            },
            "description": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "shared": {
              "type": "integer",
              "format": "int32"
            },
            "meetingTopic": {
              "type": "string"
            },
            "title": {
              "type": "string"
            }
          }
        },
        "MediaClipStatsResponseDTO": {
          "type": "object",
          "properties": {
            "createdCount": {
              "type": "integer",
              "format": "int64"
            },
            "stats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MediaClipStatsAttr"
              }
            }
          }
        },
        "MediaClipParamRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "MediaClipParamResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "KeyPhraseTrendingTopicResponseDTO": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "companyTotalCount": {
              "type": "integer",
              "format": "int64"
            },
            "companyAvgSentiment": {
              "type": "number",
              "format": "double"
            },
            "teamTotalcount": {
              "type": "integer",
              "format": "int64"
            },
            "teamAvgSentiment": {
              "type": "number",
              "format": "double"
            },
            "keytagIds": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "users": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Users"
              }
            }
          }
        },
        "KeyphraseTotalCountAttrDTO": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "totalCount": {
              "type": "integer",
              "format": "int64"
            },
            "tagvalue": {
              "type": "string"
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "keywordTagId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "KeyPhraseOccurence": {
          "type": "object",
          "properties": {
            "conversationId": {
              "type": "integer",
              "format": "int64"
            },
            "count": {
              "type": "integer",
              "format": "int64"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "KeyPhraseOccurenceResponseDTO": {
          "type": "object",
          "properties": {
            "keywordTagId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagVal": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subType": {
              "type": "string"
            },
            "companyKeyPhraseTotalCount": {
              "type": "integer",
              "format": "int64"
            },
            "companyKeyPhraseIdealValue": {
              "type": "integer",
              "format": "int64"
            },
            "teamKeyPhraseTotalCount": {
              "type": "integer",
              "format": "int64"
            },
            "teamKeyPhraseIdealValue": {
              "type": "integer",
              "format": "int64"
            },
            "companyAvgSentiment": {
              "type": "number",
              "format": "double"
            },
            "teamAvgSentiment": {
              "type": "number",
              "format": "double"
            },
            "users": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyPhraseUser"
              }
            }
          }
        },
        "KeyPhraseUser": {
          "type": "object",
          "properties": {
            "conversationId": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "roleName": {
              "type": "string"
            },
            "avgSentiment": {
              "type": "number",
              "format": "double"
            },
            "totalCount": {
              "type": "integer",
              "format": "int64"
            },
            "occurences": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyPhraseOccurence"
              }
            }
          }
        },
        "ConvKeyMoments": {
          "type": "object",
          "properties": {
            "convID": {
              "$ref": "#/components/schemas/ConversationDTO"
            },
            "keyMoments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            }
          }
        },
        "KeyMomentResponseDTO": {
          "type": "object",
          "properties": {
            "convKeyMoments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvKeyMoments"
              }
            }
          }
        },
        "CalenderEventSearchResponse": {
          "type": "object",
          "properties": {
            "searchResult": {
              "$ref": "#/components/schemas/SearchResult"
            }
          }
        },
        "EmpathyAndHesitationSearchCriterion": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingStartTime": {
              "type": "string"
            },
            "meetingEndTime": {
              "type": "string"
            }
          }
        },
        "EmpathyAndHesitationTurnsReport": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "empathyChangeDetailsList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmpathyChangeDetails"
              }
            },
            "hesitationChangeDetailsList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/HesitationChangeDetails"
              }
            },
            "empathyScore": {
              "type": "number",
              "format": "float"
            },
            "hesitationScore": {
              "type": "number",
              "format": "float"
            }
          }
        },
        "EmpathyAndHesitationTurnsReportForConvList": {
          "type": "object",
          "properties": {
            "empathyAndHesitationTurnsReportMap": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/components/schemas/EmpathyAndHesitationTurnsReport"
              }
            }
          }
        },
        "EmpathyChangeDetails": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "conv_id": {
              "type": "integer",
              "format": "int64"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "user_name": {
              "type": "string"
            },
            "conv_offset": {
              "type": "integer",
              "format": "int64"
            },
            "average_empathy": {
              "type": "number",
              "format": "double"
            },
            "prev_contact_name_on_turn": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "source": {
              "type": "string"
            }
          }
        },
        "HesitationChangeDetails": {
          "type": "object",
          "properties": {
            "conv_id": {
              "type": "integer",
              "format": "int64"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "user_name": {
              "type": "string"
            },
            "conv_offset": {
              "type": "integer",
              "format": "int64"
            },
            "average_hesitation": {
              "type": "number",
              "format": "double"
            },
            "prev_contact_name_on_turn": {
              "type": "string"
            }
          }
        },
        "EmpathyMomentRecommendationDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "empathyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "recommendation": {
              "type": "string"
            },
            "originalUtterance": {
              "type": "string"
            },
            "suggestedUtterance": {
              "type": "string"
            },
            "detectedBehaviour": {
              "type": "string"
            },
            "suggestedType": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvEmpathyChangeMoments": {
          "type": "object",
          "properties": {
            "convID": {
              "$ref": "#/components/schemas/ConversationDTO"
            },
            "empathyChangeMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmpathyChangeMoment"
              }
            }
          }
        },
        "EmpathyChangeMoment": {
          "type": "object",
          "properties": {
            "momentId": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "usersId": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "convStartOffset": {
              "type": "integer",
              "format": "int64"
            },
            "averageEmpathy": {
              "type": "number",
              "format": "double"
            },
            "type": {
              "type": "string"
            },
            "polarity": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "empathyMomentRecs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EmpathyMomentRec"
              }
            }
          }
        },
        "EmpathyChangeMomentResponseDTO": {
          "type": "object",
          "properties": {
            "convEmpathyChangeMoments": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvEmpathyChangeMoments"
              }
            }
          }
        },
        "EmpathyMomentRec": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "momentId": {
              "type": "integer",
              "format": "int64"
            },
            "recommendation": {
              "type": "string"
            },
            "originalUtterance": {
              "type": "string"
            },
            "suggestedUtterance": {
              "type": "string"
            },
            "detectedBehaviour": {
              "type": "string"
            },
            "suggestedType": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            }
          }
        },
        "EmlResponseDTO": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "to": {
              "type": "string"
            },
            "from": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "sendDatetime": {
              "type": "string",
              "format": "date-time"
            },
            "threadId": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "contactId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ThreadCountResponse": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "threadCount": {
              "type": "string"
            }
          }
        },
        "TeamEmailActivityResponseDTO": {
          "type": "object",
          "properties": {
            "dates": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "emails": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "EmailSummaryResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "to": {
              "type": "string"
            },
            "from": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "sendDatetime": {
              "type": "string",
              "format": "date-time"
            },
            "threadId": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "AccountOpptyEQResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "amount": {
              "type": "number"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "opptyStage": {
              "type": "string"
            },
            "opptyState": {
              "type": "string"
            },
            "opptyRisk": {
              "type": "string",
              "enum": [
                "AT_RISK",
                "ON_TRACK",
                "EXCEED"
              ]
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            },
            "empathy": {
              "type": "number",
              "format": "double"
            },
            "opptyName": {
              "type": "string"
            },
            "accountName": {
              "type": "string"
            },
            "accountUrl": {
              "type": "string"
            }
          }
        },
        "DealData": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "account": {
              "$ref": "#/components/schemas/DealAccount"
            },
            "opptyStage": {
              "type": "string"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "opptyCreateDate": {
              "type": "string"
            },
            "opptyCloseDate": {
              "type": "string"
            },
            "conversations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationRequest"
              }
            },
            "nextAction": {
              "$ref": "#/components/schemas/DealNextAction"
            },
            "contact": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            },
            "metrics": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "pastActivity": {
              "type": "string",
              "format": "date-time"
            },
            "accountOpptyEQ": {
              "$ref": "#/components/schemas/AccountOpptyEQResponseDTO"
            },
            "opptyStatus": {
              "type": "string"
            },
            "pendingPromisesCount": {
              "type": "integer",
              "format": "int32"
            },
            "totalPromisesCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "DealDetailResponse": {
          "type": "object",
          "properties": {
            "totalCount": {
              "type": "integer",
              "format": "int64"
            },
            "searchResult": {
              "$ref": "#/components/schemas/DealSearchResult"
            }
          }
        },
        "DealEntity": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DealData"
              }
            }
          }
        },
        "DealNextAction": {
          "type": "object",
          "properties": {
            "video": {
              "type": "boolean"
            },
            "email": {
              "type": "boolean"
            },
            "date": {
              "type": "string"
            }
          }
        },
        "DealSearchResult": {
          "type": "object",
          "properties": {
            "resultCount": {
              "type": "integer",
              "format": "int64"
            },
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "entities": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DealEntity"
              }
            }
          }
        },
        "CustWebLinkRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "usersId": {
              "type": "integer",
              "format": "int64"
            },
            "companyProfileId": {
              "type": "integer",
              "format": "int64"
            },
            "company": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          }
        },
        "CustWebLinkResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "usersId": {
              "type": "integer",
              "format": "int64"
            },
            "companyProfile": {
              "$ref": "#/components/schemas/CompanyProfileDTO"
            },
            "company": {
              "type": "string"
            },
            "url": {
              "type": "string"
            }
          }
        },
        "ConversationKeywordSearchResponse": {
          "type": "object",
          "properties": {
            "searchResult": {
              "$ref": "#/components/schemas/SearchResult"
            }
          }
        },
        "ConvParamResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "introVideoMediaLink": {
              "type": "string"
            },
            "frame": {
              "type": "string"
            },
            "spoken": {
              "type": "string"
            },
            "messages": {
              "type": "string"
            },
            "silences": {
              "type": "string"
            },
            "agentSpoken": {
              "type": "string"
            },
            "custSpoken": {
              "type": "string"
            },
            "questions": {
              "type": "string"
            },
            "probability": {
              "type": "string"
            },
            "score": {
              "type": "string"
            },
            "sentiment": {
              "type": "string"
            },
            "engagement": {
              "type": "string"
            },
            "performance": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "duration": {
              "type": "integer",
              "format": "int64"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvUserStatDTO": {
          "type": "object",
          "properties": {
            "meetingAttendedCount": {
              "type": "integer",
              "format": "int32"
            },
            "meetingSharedWithMeCount": {
              "type": "integer",
              "format": "int32"
            },
            "favoriteMeetingCount": {
              "type": "integer",
              "format": "int32"
            },
            "allMeetingCount": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "ConvPromiseRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "speaker": {
              "type": "string"
            },
            "speakerUsersId": {
              "type": "integer",
              "format": "int64"
            },
            "promiseText": {
              "type": "string"
            },
            "promiseStartTime": {
              "type": "string"
            },
            "promiseEndTime": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "classification": {
              "type": "string"
            },
            "promiseNextAction": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "actionStatus": {
              "type": "string"
            },
            "score": {
              "type": "string"
            }
          }
        },
        "ConvParamRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "introVideoMediaLink": {
              "type": "string"
            },
            "frame": {
              "type": "string"
            },
            "spoken": {
              "type": "string"
            },
            "messages": {
              "type": "string"
            },
            "silences": {
              "type": "string"
            },
            "agentSpoken": {
              "type": "string"
            },
            "custSpoken": {
              "type": "string"
            },
            "questions": {
              "type": "string"
            },
            "probability": {
              "type": "string"
            },
            "score": {
              "type": "string"
            },
            "sentiment": {
              "type": "string"
            },
            "engagement": {
              "type": "string"
            },
            "performance": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "duration": {
              "type": "integer",
              "format": "int64"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvAttendeeRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "conv": {
              "type": "integer",
              "format": "int64"
            },
            "attendeeEmail": {
              "type": "string"
            },
            "attendeeName": {
              "type": "string"
            },
            "employeeOrContactInd": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvAttendeeResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "convID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "attendeeEmail": {
              "type": "string"
            },
            "attendeeName": {
              "type": "string"
            },
            "employeeOrContactInd": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "AccountContactResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "crmAccountId": {
              "type": "string"
            },
            "accountTeamID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            },
            "sticker": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "opptyTeam": {
              "$ref": "#/components/schemas/OpptyTeam"
            },
            "contact": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactResponse"
              }
            }
          }
        },
        "AccountContactSearchResponse": {
          "type": "object",
          "properties": {
            "account": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountContactResponse"
              }
            }
          }
        },
        "ContactMethodDTO": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "phone_number": {
              "type": "string"
            },
            "email_address": {
              "type": "string"
            },
            "social": {
              "type": "string"
            },
            "preference": {
              "type": "string"
            },
            "setOfContactMethodParam": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactMethodParam"
              }
            },
            "contactId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ContactResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "timezone": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "avatarUrl": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "jobTitle": {
              "type": "string"
            },
            "accounts": {
              "type": "array",
              "items": {
                "type": "array",
                "items": {
                  "type": "object"
                }
              }
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "metrics": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "keyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            },
            "lastConv": {
              "$ref": "#/components/schemas/LastConv"
            },
            "nextConv": {
              "$ref": "#/components/schemas/NextConv"
            },
            "openOppty": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyDTO"
              }
            },
            "contactMethods": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactMethodDTO"
              }
            }
          }
        },
        "LastConv": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "startTime": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "NextConv": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "startTime": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "ContactSearchResponseDTO": {
          "type": "object",
          "properties": {
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertBy": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string",
              "format": "date-time"
            },
            "updateBy": {
              "type": "integer",
              "format": "int64"
            },
            "updateTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "oppty": {
              "$ref": "#/components/schemas/Oppty"
            },
            "contacts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            }
          }
        },
        "CompanyProfileKeywordCategRelDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "companyProfileId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordCategId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "insertTime": {
              "type": "string"
            }
          }
        },
        "CommentRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "keyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "convID": {
              "type": "integer",
              "format": "int64"
            },
            "comment": {
              "type": "string"
            },
            "mentions": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "startTime": {
              "type": "integer",
              "format": "int64"
            },
            "endTime": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "VideoCutterRequest": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "keyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "inputFile": {
              "type": "string"
            },
            "videoStartTime": {
              "type": "integer",
              "format": "int32"
            },
            "videoLength": {
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "VideoSharingHistoryDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "toUserId": {
              "type": "integer",
              "format": "int64"
            },
            "fromUserId": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "convKeymomentId": {
              "type": "integer",
              "format": "int64"
            },
            "outputFileLocation": {
              "type": "string"
            },
            "sourceFileLocation": {
              "type": "string"
            },
            "clipStartTimeInSeconds": {
              "type": "integer",
              "format": "int32"
            },
            "clipEndTimeInSeconds": {
              "type": "integer",
              "format": "int32"
            },
            "outputTinyUrl": {
              "type": "string"
            }
          }
        },
        "ConvBookmarkRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "keyMomentId": {
              "type": "integer",
              "format": "int64"
            },
            "convID": {
              "type": "integer",
              "format": "int64"
            },
            "timeStart": {
              "type": "integer",
              "format": "int64"
            },
            "timeEnd": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "PageVisitsDto": {
          "type": "object",
          "properties": {
            "pageName": {
              "type": "string"
            },
            "noOfVisits": {
              "type": "integer",
              "format": "int32"
            },
            "rank": {
              "type": "integer",
              "format": "int32"
            },
            "qUsersUsage": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/QUsageUserPageVisitDto"
              }
            }
          }
        },
        "QUsageUserPageVisitDto": {
          "type": "object",
          "properties": {
            "user": {
              "$ref": "#/components/schemas/User"
            },
            "lastVisit": {
              "type": "string",
              "format": "date-time"
            },
            "noOfVisits": {
              "type": "integer",
              "format": "int32"
            },
            "avgUsageTime": {
              "type": "number",
              "format": "double"
            },
            "daysActive": {
              "type": "integer",
              "format": "int32"
            },
            "usageTrending": {
              "type": "integer",
              "format": "int32"
            },
            "usageTimePerDay": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "OverallMeetingStatsResponse": {
          "type": "object",
          "properties": {
            "fullyProcessedCount": {
              "type": "integer",
              "format": "int64"
            },
            "internalMeetingsCount": {
              "type": "integer",
              "format": "int64"
            },
            "pausedOrRemovedCount": {
              "type": "integer",
              "format": "int64"
            },
            "playedCount": {
              "type": "integer",
              "format": "int64"
            },
            "reviewedCount": {
              "type": "integer",
              "format": "int64"
            },
            "otherMeetingsCount": {
              "type": "integer",
              "format": "int64"
            },
            "externallySharedCount": {
              "type": "integer",
              "format": "int64"
            },
            "fullyProcessedVennData": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/VennDiagramData"
              }
            },
            "cvmResponse": {
              "type": "string"
            }
          }
        },
        "VennDiagramData": {
          "type": "object",
          "properties": {
            "sets": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "value": {
              "type": "integer",
              "format": "int32"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "OverallQUsageResponse": {
          "type": "object",
          "properties": {
            "usersCount": {
              "type": "integer",
              "format": "int64"
            },
            "usersTrend": {
              "type": "string"
            },
            "usersTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "activeUsersCount": {
              "type": "integer",
              "format": "int64"
            },
            "activeUsersTrend": {
              "type": "string"
            },
            "activeUsersTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "realTimeUsersCount": {
              "type": "integer",
              "format": "int64"
            },
            "realTimeUsersTrend": {
              "type": "string"
            },
            "realTimeUsersTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "averageUsageTime": {
              "type": "integer",
              "format": "int64"
            },
            "averageUsageTimeTrend": {
              "type": "string"
            },
            "averageUsageTimeTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "zoomAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "teamsAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "webexAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "authorizationTrend": {
              "type": "string"
            },
            "authorizationTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "averageVisits": {
              "type": "integer",
              "format": "int64"
            },
            "averageVisitsTrend": {
              "type": "string"
            },
            "averageVisitsTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "invitedUsersCount": {
              "type": "integer",
              "format": "int64"
            },
            "invitedUsersTrend": {
              "type": "string"
            },
            "invitedUsersTrendPercentage": {
              "type": "number",
              "format": "double"
            },
            "passwordResetRequiredUsersCount": {
              "type": "integer",
              "format": "int32"
            },
            "gmailAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "outlookAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "outlookCalendarAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "googleCalendarAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "emailAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "calendarAuthorizationCount": {
              "type": "integer",
              "format": "int64"
            },
            "currentUsersCount": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "DealSellerPerformanceResponse": {
          "type": "object",
          "properties": {
            "dealsImpactedByQ": {
              "type": "integer",
              "format": "int32"
            },
            "lostCount": {
              "type": "integer",
              "format": "int32"
            },
            "wonCount": {
              "type": "integer",
              "format": "int32"
            },
            "lostAmount": {
              "type": "number",
              "format": "double"
            },
            "wonAmount": {
              "type": "number",
              "format": "double"
            },
            "dealValueImpactedByQ": {
              "type": "number",
              "format": "double"
            },
            "performance": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Performance"
              }
            }
          }
        },
        "Performance": {
          "type": "object",
          "properties": {
            "sentimentRange": {
              "type": "array",
              "items": {
                "type": "number",
                "format": "double"
              }
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "sellerPerformanceScore": {
              "type": "number",
              "format": "double"
            },
            "sellerSentiment": {
              "type": "number",
              "format": "double"
            },
            "wonPercentage": {
              "type": "number",
              "format": "double"
            },
            "dealCycle": {
              "type": "number",
              "format": "double"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "lostDeals": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "wonDeals": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "AnalyticsTopMeetingSentimentResponse": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingTopic": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "MostViewedConvAttr": {
          "type": "object",
          "properties": {
            "count": {
              "type": "integer",
              "format": "int64"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "description": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingTopic": {
              "type": "string"
            },
            "opptyName": {
              "type": "string"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "accountName": {
              "type": "string"
            },
            "accountUrl": {
              "type": "string"
            },
            "meetingSentiment": {
              "type": "number",
              "format": "double"
            },
            "convStatus": {
              "type": "string"
            }
          }
        },
        "MostSharedConvAttr": {
          "type": "object",
          "properties": {
            "count": {
              "type": "integer",
              "format": "int64"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "description": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingTopic": {
              "type": "string"
            },
            "opptyName": {
              "type": "string"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "accountName": {
              "type": "string"
            },
            "accountUrl": {
              "type": "string"
            },
            "meetingSentiment": {
              "type": "number",
              "format": "double"
            },
            "convStatus": {
              "type": "string"
            }
          }
        },
        "MostPopularKeymomentResponse": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingTopic": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "accountId": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "accountName": {
              "type": "string"
            },
            "accountUrl": {
              "type": "string"
            },
            "keymomentId": {
              "type": "integer",
              "format": "int64"
            },
            "polarity": {
              "type": "string"
            },
            "score": {
              "type": "number",
              "format": "double"
            },
            "kmStartOffset": {
              "type": "integer",
              "format": "int64"
            },
            "kmEndOffset": {
              "type": "integer",
              "format": "int64"
            },
            "line": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "viewVideoMediaLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            }
          }
        },
        "KeyPhraseOccurenceContentResponseDTO": {
          "type": "object",
          "properties": {
            "keywordTagId": {
              "type": "integer",
              "format": "int64"
            },
            "keywordTagVal": {
              "type": "string"
            },
            "count": {
              "type": "integer",
              "format": "int64"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "trend": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subType": {
              "type": "string"
            }
          }
        },
        "AnalyticsCustomerPulseDealResponse": {
          "type": "object",
          "properties": {
            "accountId": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "opptyCloseDate": {
              "type": "string",
              "format": "date-time"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "opptyStatus": {
              "type": "string"
            },
            "trend": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvEQAttr"
              }
            }
          }
        },
        "ConvEQAttr": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingEngagement": {
              "type": "number",
              "format": "double"
            },
            "meetingSentiment": {
              "type": "number",
              "format": "double"
            },
            "emotionalScore": {
              "type": "string"
            }
          }
        },
        "AnalyticsContactResponse": {
          "type": "object",
          "properties": {
            "contactId": {
              "type": "integer",
              "format": "int64"
            },
            "title": {
              "type": "string"
            },
            "timezone": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "avatarUrl": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "jobTitle": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "participantName": {
              "type": "string"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "accountName": {
              "type": "string"
            }
          }
        },
        "AccountRequestDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "crmAccountId": {
              "type": "string"
            },
            "accountTeam": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            },
            "sticker": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "AccountActivityResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "crmAccountId": {
              "type": "string"
            },
            "accountTeamID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "name": {
              "type": "string"
            },
            "domain": {
              "type": "string"
            },
            "url": {
              "type": "string"
            },
            "sticker": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "oppties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Oppty"
              }
            },
            "conversations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConversationResponseDTO"
              }
            },
            "contacts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactActivity"
              }
            },
            "email": {
              "type": "integer",
              "format": "int32"
            },
            "conversation": {
              "type": "integer",
              "format": "int32"
            },
            "standing": {
              "type": "string"
            }
          }
        },
        "ConversationResponseDTO": {
          "type": "object",
          "properties": {
            "entity": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "hostID": {
              "$ref": "#/components/schemas/ConvUsersDTO"
            },
            "opptyID": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "accountID": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "externalConvId": {
              "type": "string"
            },
            "meetingTopic": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "tonalProcDone": {
              "type": "boolean"
            },
            "textSentProcDone": {
              "type": "boolean"
            },
            "cvProcDone": {
              "type": "boolean"
            },
            "dataFusionProcDone": {
              "type": "boolean"
            },
            "textKmProcDone": {
              "type": "boolean"
            },
            "uuid": {
              "type": "string"
            },
            "lastChunk": {
              "type": "integer",
              "format": "int64"
            },
            "processedFlag": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "recordingStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "meetingEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "source": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "KeyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            },
            "promises": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvPromiseResponseDTO"
              }
            },
            "thumbnail": {
              "type": "string"
            },
            "confidential": {
              "type": "boolean"
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            }
          }
        },
        "AccountDealRequest": {
          "type": "object",
          "properties": {
            "accounts": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "AccountDealResponse": {
          "type": "object",
          "properties": {
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "dealCount": {
              "type": "integer",
              "format": "int32"
            },
            "deals": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "ClipRequest": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "keymomentId": {
              "type": "integer",
              "format": "int64"
            },
            "startInSeconds": {
              "type": "integer",
              "format": "int64"
            },
            "stopInSeconds": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "MessageRequestDTO": {
          "type": "object",
          "properties": {
            "emailList": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "mediaClipId": {
              "type": "integer",
              "format": "int64"
            },
            "type": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "keyMomentText": {
              "type": "string"
            },
            "clip": {
              "$ref": "#/components/schemas/ClipRequest"
            },
            "fullVideo": {
              "type": "boolean"
            },
            "meetingUrl": {
              "type": "string"
            }
          }
        },
        "CspReport": {
          "type": "object",
          "properties": {
            "document-uri": {
              "type": "string"
            },
            "referrer": {
              "type": "string"
            },
            "violated-directive": {
              "type": "string"
            },
            "effective-directive": {
              "type": "string"
            },
            "original-policy": {
              "type": "string"
            },
            "disposition": {
              "type": "string"
            },
            "blocked-uri": {
              "type": "string"
            },
            "line-number": {
              "type": "string"
            },
            "column-number": {
              "type": "string"
            },
            "source-file": {
              "type": "string"
            },
            "status-code": {
              "type": "string"
            },
            "script-sample": {
              "type": "string"
            }
          }
        },
        "CspViolationReq": {
          "type": "object",
          "properties": {
            "csp-report": {
              "$ref": "#/components/schemas/CspReport"
            }
          }
        },
        "AuthRequest": {
          "type": "object",
          "properties": {
            "scopes": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "LoginRequest": {
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          }
        },
        "OpptyEqbyStageResponseDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "emotional_score": {
              "type": "string"
            },
            "emotional_stage": {
              "type": "string"
            },
            "stage": {
              "type": "string"
            },
            "stage_start_date": {
              "type": "string"
            },
            "stage_end_date": {
              "type": "string"
            },
            "number_of_attendees": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConvTimeline": {
          "type": "object",
          "properties": {
            "conv_id": {
              "type": "integer",
              "format": "int64"
            },
            "data": {
              "type": "object",
              "additionalProperties": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TimelineTuple"
                }
              }
            }
          }
        },
        "TimelineTuple": {
          "type": "object",
          "properties": {
            "st": {
              "type": "number",
              "format": "double"
            },
            "et": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "ConvSharedViewData": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "startTime": {
              "type": "number",
              "format": "double"
            },
            "name": {
              "type": "string"
            },
            "endTime": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "SummaryReportDTO": {
          "type": "object",
          "properties": {
            "numOfConversations": {
              "type": "integer",
              "format": "int64"
            },
            "hrsProcessed": {
              "type": "number",
              "format": "double"
            },
            "uniqueDeals": {
              "type": "integer",
              "format": "int64"
            },
            "uniqueContacts": {
              "type": "integer",
              "format": "int64"
            },
            "uniqueKeyMoments": {
              "type": "integer",
              "format": "int64"
            },
            "amountImpacted": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "SharedMemberDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "videoSharingHistoryId": {
              "type": "integer",
              "format": "int64"
            },
            "firstname": {
              "type": "string"
            },
            "lastname": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "permission": {
              "type": "string"
            },
            "shareTime": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "DealConvoStat": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "stages": {
              "type": "object",
              "additionalProperties": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "DealStat": {
          "type": "object",
          "properties": {
            "sentiment": {
              "$ref": "#/components/schemas/Stages"
            },
            "engagement": {
              "$ref": "#/components/schemas/Stages"
            },
            "convostats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DealConvoStat"
              }
            }
          }
        },
        "DealSummaryTrendResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "status": {
              "type": "string"
            },
            "stage": {
              "type": "string"
            },
            "sentiment": {
              "$ref": "#/components/schemas/Stages"
            },
            "engagement": {
              "$ref": "#/components/schemas/Stages"
            },
            "convostats": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DealConvoStat"
              }
            },
            "wonOppty": {
              "$ref": "#/components/schemas/DealStat"
            }
          }
        },
        "Stages": {
          "type": "object",
          "properties": {
            "stages": {
              "type": "object",
              "additionalProperties": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        },
        "ConvoStatResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "host": {
              "type": "string"
            },
            "customer": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            },
            "freezeImage": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "meetingTopic": {
              "type": "string"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "nextActions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvNextAction"
              }
            },
            "recordingDate": {
              "type": "string",
              "format": "date-time"
            },
            "maskVideoLink": {
              "type": "string"
            },
            "galleryVideoLink": {
              "type": "string"
            },
            "KeyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            },
            "convoStats": {
              "$ref": "#/components/schemas/ConvoStats"
            }
          }
        },
        "ConvoStats": {
          "type": "object",
          "properties": {
            "talkRatio": {
              "type": "number",
              "format": "double"
            },
            "averageEmpathy": {
              "type": "number",
              "format": "double"
            },
            "averagePoliteness": {
              "type": "number",
              "format": "double"
            },
            "averagespeakingPace": {
              "type": "number",
              "format": "double"
            },
            "longestRepMonologue": {
              "type": "integer",
              "format": "int32"
            },
            "longestCustomerMonologue": {
              "type": "integer",
              "format": "int32"
            },
            "teamMembers": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            },
            "hesitation": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "KeyPhraseExpertResponseDTO": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "integer",
              "format": "int64"
            },
            "email": {
              "type": "string"
            },
            "fullName": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "Diarization": {
          "type": "object",
          "properties": {
            "tasks": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Task"
              }
            }
          }
        },
        "Option": {
          "type": "object",
          "properties": {
            "activate": {
              "type": "boolean"
            },
            "data": {
              "type": "object",
              "additionalProperties": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/TimelineTuple"
                }
              }
            }
          }
        },
        "Task": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "options": {
              "$ref": "#/components/schemas/Option"
            }
          }
        },
        "ConvEQResponseDTO": {
          "type": "object",
          "properties": {
            "vrankSum": {
              "type": "number",
              "format": "double"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "accountId": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "opptyId": {
              "type": "integer",
              "format": "int64"
            },
            "eqScore": {
              "type": "string"
            },
            "convStartTime": {
              "type": "string",
              "format": "date-time"
            },
            "convEndTime": {
              "type": "string",
              "format": "date-time"
            },
            "stage": {
              "type": "string"
            },
            "numberOfAttendees": {
              "type": "integer",
              "format": "int64"
            },
            "vRankSum": {
              "type": "number",
              "format": "double"
            },
            "meetingSentiment": {
              "type": "number",
              "format": "double"
            },
            "meetingEngagement": {
              "type": "number",
              "format": "double"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "updateTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            }
          }
        },
        "ConvSlideFirstResponse": {
          "type": "object",
          "properties": {
            "low": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SlideFirst"
              }
            },
            "high": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SlideFirst"
              }
            }
          }
        },
        "SlideFirst": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "accountID": {
              "$ref": "#/components/schemas/ConvAccountDTO"
            },
            "meetingName": {
              "type": "string"
            },
            "meetingStartTime": {
              "type": "string"
            },
            "meetingEndTime": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "kmId": {
              "type": "integer",
              "format": "int64"
            },
            "kmText": {
              "type": "string"
            },
            "kmStartTime": {
              "type": "string"
            },
            "kmEndTime": {
              "type": "string"
            },
            "url": {
              "type": "string"
            },
            "contentStartTime": {
              "type": "string"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "convList": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SlideFirst"
              }
            },
            "kmUsername": {
              "type": "string"
            }
          }
        },
        "ConversationAttendeesResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Attendee"
              }
            },
            "startDate": {
              "type": "string"
            },
            "endDate": {
              "type": "string"
            }
          }
        },
        "AggrConvMetrics": {
          "type": "object",
          "properties": {
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "participantId": {
              "type": "string"
            },
            "offset": {
              "type": "integer",
              "format": "int64"
            },
            "offsetTimestamp": {
              "type": "string",
              "format": "date-time"
            },
            "sentiment": {
              "type": "number",
              "format": "double"
            },
            "engagement": {
              "type": "number",
              "format": "double"
            },
            "isSpeaker": {
              "type": "boolean"
            },
            "sentimentSmooth": {
              "type": "number",
              "format": "double"
            },
            "engagementSmooth": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "KeyPhraseResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "keyMoments": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyMoment"
              }
            }
          }
        },
        "ConvAttendeeAttr": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ConversationSummaryResponse": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "string"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Datum"
              }
            }
          }
        },
        "Datum": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "host": {
              "type": "string"
            },
            "hostImage": {
              "type": "string"
            },
            "mediaLink": {
              "type": "string"
            },
            "mediaThumbnail": {
              "type": "string"
            },
            "opportunity": {
              "$ref": "#/components/schemas/Opportunity"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "startDate": {
              "type": "string"
            },
            "endDate": {
              "type": "string"
            },
            "aiViewVideoMediaLink": {
              "type": "string"
            },
            "audioMediaLink": {
              "type": "string"
            },
            "contentViewVideoMediaLink": {
              "type": "string"
            },
            "galleryViewVideoMediaLink": {
              "type": "string"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "orgId": {
              "type": "integer",
              "format": "int64"
            },
            "source": {
              "type": "string"
            },
            "speakerTimelineLink": {
              "type": "string"
            },
            "speakerViewVideoMediaLink": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "textMediaLink": {
              "type": "string"
            },
            "transcriptLink": {
              "type": "string"
            },
            "videoMediaLink": {
              "type": "string"
            },
            "keyTopics": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KeyTag"
              }
            },
            "tonalProcDone": {
              "type": "boolean"
            },
            "textSentProcDone": {
              "type": "boolean"
            },
            "cvProcDone": {
              "type": "boolean"
            },
            "dataFusionProcDone": {
              "type": "boolean"
            },
            "textKmProcDone": {
              "type": "boolean"
            },
            "uuid": {
              "type": "string"
            },
            "lastChunk": {
              "type": "integer",
              "format": "int64"
            },
            "processedFlag": {
              "type": "string"
            },
            "thumbnail": {
              "type": "string"
            },
            "confidential": {
              "type": "boolean"
            },
            "sharedDate": {
              "type": "string"
            },
            "sharedUser": {
              "type": "string"
            },
            "account": {
              "$ref": "#/components/schemas/IdNameDTO"
            },
            "pendingPromisesCount": {
              "type": "integer",
              "format": "int32"
            },
            "totalPromisesCount": {
              "type": "integer",
              "format": "int32"
            },
            "externalMeetingId": {
              "type": "string"
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConvAttendeeAttr"
              }
            }
          }
        },
        "Opportunity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "opptyAmount": {
              "type": "number",
              "format": "double"
            },
            "stage": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "createDate": {
              "type": "string"
            },
            "closeDate": {
              "type": "string"
            }
          }
        },
        "ConvMetricsResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "desc": {
              "type": "string"
            },
            "videoLink": {
              "type": "string"
            },
            "attendees": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AttendeeMetric"
              }
            }
          }
        },
        "ContactMetricsResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "avatarUrl": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "jobTitle": {
              "type": "string"
            },
            "score": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Score"
              }
            },
            "metrics": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "oppty": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpptyDTO"
              }
            },
            "contactMethods": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ContactMethodDTO"
              }
            }
          }
        },
        "CompanySlideFirstResponse": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "companyName": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "low": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SlideFirst"
              }
            },
            "high": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SlideFirst"
              }
            }
          }
        },
        "AccountTeamDTO": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "insertTime": {
              "type": "string"
            },
            "source": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "seller": {
              "type": "string"
            },
            "manager": {
              "type": "string"
            },
            "timeOnAccount": {
              "type": "string"
            },
            "startDate": {
              "type": "string",
              "format": "date-time"
            },
            "endDate": {
              "type": "string",
              "format": "date-time"
            },
            "lastActivityDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "AccountTeamResponse": {
          "type": "object",
          "properties": {
            "current": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountTeamDTO"
              }
            },
            "last": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountTeamDTO"
              }
            }
          }
        },
        "AccountPromisesResponseDTO": {
          "type": "object",
          "properties": {
            "account": {
              "$ref": "#/components/schemas/Account"
            },
            "promises": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Promise"
              }
            },
            "dateTime": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "ConvInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "meetingTopic": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "startTime": {
              "type": "string",
              "format": "date-time"
            },
            "endTime": {
              "type": "string",
              "format": "date-time"
            },
            "hostId": {
              "type": "integer",
              "format": "int64"
            },
            "confidential": {
              "type": "boolean"
            }
          }
        },
        "DealInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "name": {
              "type": "string"
            },
            "amount": {
              "type": "number",
              "format": "double"
            },
            "amountNumber": {
              "type": "string"
            },
            "createDate": {
              "type": "string",
              "format": "date-time"
            },
            "closeDate": {
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "Promise": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "deal": {
              "$ref": "#/components/schemas/DealInfo"
            },
            "conv": {
              "$ref": "#/components/schemas/ConvInfo"
            },
            "promiseText": {
              "type": "string"
            },
            "promiseStartTime": {
              "type": "string"
            },
            "promiseEndTime": {
              "type": "string"
            },
            "type": {
              "type": "string"
            },
            "subtype": {
              "type": "string"
            },
            "classification": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "promiseNextAction": {
              "type": "string"
            },
            "score": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "TrendEQForOpptyResponse": {
          "type": "object",
          "properties": {
            "keyMoments": {
              "$ref": "#/components/schemas/OpptyDTO"
            },
            "deals": {
              "$ref": "#/components/schemas/DealSummaryDetailResponse"
            }
          }
        },
        "CurrentEQForOpptyResponse": {
          "type": "object",
          "properties": {
            "deals": {
              "$ref": "#/components/schemas/DealSummaryDetailResponse"
            }
          }
        },
        "ConversationAttributionLogRsp": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "convId": {
              "type": "integer",
              "format": "int64"
            },
            "oldAccountId": {
              "type": "integer",
              "format": "int64"
            },
            "oldAccountCrmId": {
              "type": "string"
            },
            "oldOpptyId": {
              "type": "integer",
              "format": "int64"
            },
            "oldOpptyCrmId": {
              "type": "string"
            },
            "newAccountId": {
              "type": "integer",
              "format": "int64"
            },
            "newAccountCrmId": {
              "type": "string"
            },
            "newOpptyId": {
              "type": "integer",
              "format": "int64"
            },
            "newOpptyCrmId": {
              "type": "string"
            },
            "allowEdit": {
              "type": "boolean"
            }
          }
        }
      },
      "securitySchemes": {
        "bearer-jwt": {
          "type": "http",
          "name": "Authorization",
          "in": "header",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    }
  }
]