module.exports = require('../../app/mometa-material.config').concat([
  {
    name: '物料',
    key: 'component',
    assetGroups: [
      {
        name: '基础',
        key: 'basic',
        assets: [
          {
            name: '按钮',
            key: '@antd/button',
            cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            homepage: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: {
              code: '<$ANT_BUTTON$ type="default">按钮</$ANT_BUTTON$>',
              dependencies: {
                ANT_BUTTON: {
                  source: 'antd',
                  mode: 'named',
                  imported: 'Button'
                }
              },
              sideEffectDependencies: ['antd/lib/button/style/css']
            }
          },
          {
            name: '输入框',
            key: 'input',
            cover: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
            data: {
              code: '<$ANT_INPUT$ placeholder="请输入" />',
              dependencies: {
                ANT_INPUT: {
                  source: 'antd',
                  mode: 'named',
                  imported: 'Input'
                }
              },
              sideEffectDependencies: ['antd/lib/input/style/css']
            }
          }
        ]
      },
      {
        name: '基础',
        key: 'basic',
        assets: [
          {
            name: '按钮',
            key: '@antd/button',
            cover: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            homepage: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: {
              code: '<$ANT_BUTTON$ type="default">按钮</$ANT_BUTTON$>',
              dependencies: {
                ANT_BUTTON: {
                  source: 'antd',
                  mode: 'named',
                  imported: 'Button'
                }
              },
              sideEffectDependencies: ['antd/lib/button/style/css']
            }
          },
          {
            name: '输入框',
            key: 'input',
            cover: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
            data: {
              code: '<$ANT_INPUT$ placeholder="请输入" />',
              dependencies: {
                ANT_INPUT: {
                  source: 'antd',
                  mode: 'named',
                  imported: 'Input'
                }
              },
              sideEffectDependencies: ['antd/lib/input/style/css']
            }
          }
        ]
      }
    ]
  }
])
