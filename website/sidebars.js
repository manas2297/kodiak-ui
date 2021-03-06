module.exports = {
  docs: [
    'introduction',
    'getting-started',
    'themeing',
    'sx-prop',
    'variants',
    'components',
    {
      type: 'category',
      label: 'Primitives',
      items: [
        'primitives/anchorButton',
        'primitives/avatar',
        'primitives/badge',
        'primitives/box',
        'primitives/button',
        'primitives/checkbox',
        'primitives/flex',
        'primitives/grid',
        'primitives/image',
        'primitives/input',
        'primitives/input-group',
        'primitives/input-addon',
        'primitives/label',
        'primitives/link',
        'primitives/loading',
        'primitives/nav',
        'primitives/radio',
        'primitives/select',
        'primitives/svg',
        'primitives/switch',
        'primitives/tag',
        'primitives/text',
        'primitives/textarea',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/accordion',
        'components/combobox',
        {
          'Data Vizualization': [
            'components/DataVisualization/stat',
            'components/DataVisualization/statprogress',
          ],
        },
        'components/dialog',
        'components/iframe',
        'components/menu',
        'components/pagination',
        'components/progress',
        'components/select',
        'components/skeleton',
        'components/table',
        'components/tabs',
        'components/tooltip',
      ],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: ['hooks/use-event-logger'],
    },
    {
      type: 'category',
      label: 'Recipes',
      items: ['recipes/forms'],
    },
  ],
}
