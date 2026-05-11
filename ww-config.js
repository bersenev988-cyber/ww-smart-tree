export default {
  name: 'ww-smart-tree',
  editor: {
    label: { en: 'Smart Tree' },
  },
  properties: {
    treeData: {
      type: 'Array',
      defaultValue: [],
      bindable: true,
      label: { en: 'Tree Data' },
      section: 'settings',
    },
    collectionName: {
      type: 'Text',
      defaultValue: '',
      bindable: true,
      label: { en: 'Collection / Table name' },
      section: 'settings',
    },
    companyId: {
      type: 'Text',
      defaultValue: '',
      bindable: true,
      label: { en: 'Company ID' },
      section: 'settings',
    },
  },
  triggerEvents: [
    {
      name: 'node-drop',
      label: { en: 'Node dropped' },
      event: {
        nodeId: null,
        newParentId: null,
        oldParentId: null,
        newPosition: null,
        positionType: null,
        collectionName: null,
        companyId: null,
      },
      default: true,
    },
    {
      name: 'create-node',
      label: { en: 'Node created' },
      event: {
        tempId: null,
        parentId: null,
        position: null,
        type: null,
        label: null,
        collectionName: null,
        companyId: null,
      },
      default: false,
    },
    {
      name: 'delete-node',
      label: { en: 'Node deleted' },
      event: {
        nodeId: null,
        nestedNodeIds: [],
        collectionName: null,
        companyId: null,
      },
      default: false,
    },
    {
      name: 'item-selected',
      label: { en: 'Item selected' },
      event: {
        nodeId: null,
        collectionName: null,
        companyId: null,
      },
      default: false,
    },
    {
      name: 'node-rename',
      label: { en: 'Node renamed' },
      event: {
        nodeId: null,
        oldLabel: null,
        newLabel: null,
        collectionName: null,
        companyId: null,
      },
      default: false,
    },
  ],
};