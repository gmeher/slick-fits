module.exports = {
    "env": {
      "development": {
        "presets": [
          "next/babel"
        ],
        "plugins": [
          [
            "styled-components",
            {
              "ssr": true,
              "displayName": true
            }
          ]
        ]
      },
      "production": {
        "presets": [
          "next/babel"
        ],
        "plugins": [
          [
            "styled-components",
            {
              "ssr": true,
              "displayName": true
            }
          ]
        ]
      },
      "test": {
        "presets": [
          [
            "next/babel",
            {
              "preset-env": {
                "modules": "commonjs"
              }
            }
          ]
        ],
        "plugins": [
          [
            "styled-components",
            {
              "ssr": true,
              "displayName": true
            }
          ]
        ]
      }
    }
  }