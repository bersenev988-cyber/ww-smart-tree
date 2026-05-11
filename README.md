# Smart Tree Element

Custom tree element for WeWeb. Supports directories and items, inline rename, drag-and-drop, contextual menu with creation and deletion.

## Properties
- `treeData` (Array) – data source from collection
- `collectionName` (Text) – name of the collection/table
- `companyId` (Text) – company identifier

## Events
- `create-node` – fires when a new node is created
- `delete-node` – fires on node deletion
- `node-drop` – fires after drag-and-drop
- `item-selected` – fires when an item is clicked
- `node-rename` – fires after a node is renamed

## Usage
1. Add element to page
2. Bind `treeData` to a collection formula
3. Set `collectionName` and `companyId` if needed
4. Create workflows triggered by the element's events